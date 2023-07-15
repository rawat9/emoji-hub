import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Select,
  Stack,
} from '@chakra-ui/react';
import { categories } from '../data/filters';

function Filter({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Filter</DrawerHeader>

          <DrawerBody>
            <Stack>
              <Box>
                <FormLabel htmlFor='category'>Select category</FormLabel>
                <Select id='category'>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button
              w={'full'}
              colorScheme='blue'
              onClick={() => {
                onClose();
              }}
            >
              Apply filters
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Filter;
