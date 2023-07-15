import { Box, Flex, Button, useColorModeValue, Stack, useColorMode } from '@chakra-ui/react';
import { Filter, Moon, Sun } from 'react-feather';

export default function Nav({ onOpen }: { onOpen: () => void }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Button size='md' colorScheme='blue'>
            Emoji Hub 🚀
          </Button>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={2}>
              <Button onClick={onOpen}>
                <Filter />
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <Moon /> : <Sun />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
