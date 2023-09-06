import React from 'react';
import {
  VStack,
  Input,
  Textarea,
  Box,
  Text,
  Button,
  HStack,
  Spacer,
} from '@chakra-ui/react';

function MCQSection({ onComplete, onRemove }) {
  const options = ['A', 'B', 'C', 'D'];

  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="xl"
      boxShadow="md"
      background="white"
    >
      <Textarea
        placeholder="Text Question"
        size="lg"
        borderRadius="md"
        borderColor="gray.300"
        _hover={{ borderColor: 'gray.400' }}
        _focus={{ borderColor: 'blue.500' }}
      />
      <Spacer height={4} />
      <VStack spacing={3} align="stretch">
        {options.map((option, index) => (
          <HStack key={option}>
            <Text fontWeight="bold" mr={2}>
              {`${option}`}
            </Text>
            <Input
              placeholder={`Option ${option}`}
              size="md"
              borderRadius="md"
              borderColor="gray.300"
              _hover={{ borderColor: 'gray.400' }}
              _focus={{ borderColor: 'blue.500' }}
            />
          </HStack>
        ))}
        <HStack justifyContent="space-between">
          <Button
            size="sm"
            colorScheme="red"
            variant="outline"
            onClick={onRemove}
          >
            Remove Section
          </Button>
          <Button
            size="sm"
            colorScheme="green"
            onClick={onComplete}
          >
            Mark as Complete
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default MCQSection;

