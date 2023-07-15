import { Box, Text, Stack, Badge, useColorModeValue, useToast } from '@chakra-ui/react';
import { Emoji } from '../types/Emoji';
import { transformHtmlCodeToUnicode } from '../utils';

function EmojiCard({ emoji }: { emoji: Emoji }) {
  const toast = useToast();

  const copyToClipboard = (text: string) => {
    void navigator.clipboard.writeText(text);
  };

  return (
    <Box
      as='button'
      maxW={'350px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}
      _hover={{
        boxShadow: 'xl',
      }}
      onClick={() => {
        copyToClipboard(emoji.htmlCode[0]);
        toast({
          title: 'Copied successfully!',
          description: "You've copied the emoji to your clipboard.",
          status: 'success',
          position: 'top',
          duration: 2000,
          isClosable: true,
        });
      }}
    >
      <Text fontSize={50}>{transformHtmlCodeToUnicode(emoji.htmlCode[0])}</Text>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {emoji.name}
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
        <Badge px={2} py={1} bg={useColorModeValue('blue.50', 'blue.800')} fontWeight={'400'}>
          #{emoji.group}
        </Badge>
        <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
          #{emoji.category}
        </Badge>
      </Stack>
    </Box>
  );
}

export default EmojiCard;
