import { React, useState } from "react";
import {
  Input,
  Stack,
  Button,
  FormControl,
  Divider,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";

const Report = () => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="teal.400">Report a Bug</Heading>
      <form action="submit">
        <Box>
          <Stack spacing={4}>
            <FormControl isRequired>
              <Input placeholder="Project Name" size="lg" bg="white" />
              <Input placeholder="Bug Name" size="lg" bg="white" />
              <Input placeholder="Date Found" size="lg" bg="white" />
              <Input
                placeholder="Severity (Small, Medium, High)"
                size="lg"
                bg="white"
              />
              <Input placeholder="Bug Description" size="lg" bg="white" />
              <Input placeholder="Reproduction Details" size="lg" bg="white" />
              <Input placeholder="Status" size="lg" bg="white" />

              <Button
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="100%"
              >
                Report Bug
              </Button>
            </FormControl>
          </Stack>
        </Box>
      </form>
    </Flex>
  );
};

export default Report;
