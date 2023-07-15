import { Box, Text, Stack, Badge, useColorModeValue } from '@chakra-ui/react';
import { Emoji } from '../types/Emoji';
import { transformHtmlCodeToUnicode } from '../utils';

function EmojiCard({ emoji }: { emoji: Emoji }) {
  return (
    <Box
      maxW={'350px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}
    >
      <Text fontSize={50}>{transformHtmlCodeToUnicode(emoji.htmlCode[0])}</Text>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {emoji.name}
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
        <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
          #{emoji.category}
        </Badge>
      </Stack>
    </Box>
  );
}

export default EmojiCard;
