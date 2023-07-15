import { Container, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import EmojiCard from './components/EmojiCard';
import { useEffect, useState } from 'react';
import { request } from './utils';
import { Emoji } from './types/Emoji';
import Nav from './components/Navbar';
import Filter from './components/Filter';

function App() {
  const [emojies, setEmojis] = useState<Emoji[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchEmojies = async () => {
      const response = await request<Emoji[]>('https://emojihub.yurace.pro/api/all', {
        method: 'GET',
      });
      setEmojis(response.slice(0, 20));
    };
    void fetchEmojies();
  });

  return (
    <>
      <Nav onOpen={onOpen} />
      <Filter isOpen={isOpen} onClose={onClose} />
      <Container maxW='container.xxl' p={10}>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={10}>
          {emojies.map((emoji, index) => (
            <EmojiCard key={index} emoji={emoji} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default App;
