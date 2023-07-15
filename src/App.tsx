import { Center, CircularProgress, Container, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import EmojiCard from './components/EmojiCard';
import { Emoji } from './types/Emoji';
import Nav from './components/Navbar';
import Filter from './components/Filter';
import { useQuery } from '@tanstack/react-query';
import fetchAll from './api/fetchAll';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isLoading, data } = useQuery<Emoji[]>({
    queryKey: ['emojies'],
    queryFn: fetchAll,
  });

  if (isLoading) {
    return (
      <Center h='100vh'>
        <CircularProgress isIndeterminate color='green.300' />
      </Center>
    );
  }

  const emojiesData = data || [];

  return (
    <>
      <Nav onOpen={onOpen} />
      <Filter isOpen={isOpen} onClose={onClose} />
      <Container maxW='container.xxl' p={10}>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={10}>
          {emojiesData.map((emoji, index) => (
            <EmojiCard key={index} emoji={emoji} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default App;
