import React from 'react';
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Avatar,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function IntroPage() {
  return (
    <Box p={4} paddingTop="40px" paddingRight="40px" paddingBottom="40px" paddingLeft="40px">
      <Flex justifyContent="flex-end" alignItems="flex-start">
        <Avatar name="User Avatar" size="md" />
      </Flex>
      <Box mt={8} textAlign="center">
        <Heading size="lg" mb={4}>
          Welcome to Our "Apna Form Banao" Website,
        </Heading>
        <Heading size="md" mb={4}>
          Now to create a form is everyone's cup of tea with our website.
        </Heading>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Create your own forms with ease and convenience. Start by clicking below.
        </Text>
        <Link to="/create">
          <Button colorScheme="teal" leftIcon={<AddIcon />}>
            Create a New Form
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default IntroPage;


