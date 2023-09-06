import React from 'react';
import { Box, Center, VStack, Text, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function UploadMediaSection() {
  // Add functionality to handle media upload here

  return (
    <Box borderWidth={1} borderRadius="lg" p={4} textAlign="center">
      <Center>
        <IconButton
          aria-label="Upload Media"
          icon={<AddIcon />}
          onClick={() => {
            // Handle media upload here
          }}
        />
      </Center>
      <VStack mt={2}>
        <Text>Click to Upload Media</Text>
      </VStack>
    </Box>
  );
}

export default UploadMediaSection;

