import React, { useState } from 'react';
import { Input, Box,Spacer, Textarea, Button, HStack } from '@chakra-ui/react';

function TextSection({ onComplete, onRemove }) {
  const [answer, setAnswer] = useState(''); // State to track the answer

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="xl" boxShadow="md" background="white">
      <Textarea placeholder="Text Question" />
      <Spacer height={4} />
      <Input
        placeholder="Your Answer"
        value={answer}
        onChange={handleAnswerChange}
      />
      <Spacer height={4} />
      <HStack justifyContent="space-between">
        <Button size="sm" colorScheme="red" onClick={onRemove}>Remove Section</Button>
        <Button size="sm" colorScheme="green" onClick={() => onComplete(answer)}>Mark as Complete</Button>
      </HStack>
    </Box>
  );
}

export default TextSection;
