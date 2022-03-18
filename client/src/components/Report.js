import { React } from "react";
import {
  Input,
  Stack,
  Button,
  FormControl,
  Flex,
  Heading,
  Box,
  Select,
} from "@chakra-ui/react";
import Image from './Assets/images/backgroundimage.png';

const Report = () => {
  return (
    <div style={{ backgroundImage:`url(${Image})`, backgroundSize: 'cover'}}>
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="teal.500">Report a Bug</Heading>
      <br></br>
      <form action="submit">
        <Box>
          <Stack spacing={4}>
            <FormControl isRequired>
              <Input placeholder="Project Name" size="lg" bg="white" />
              <Input placeholder="Bug Name" size="lg" bg="white" />
              <Input placeholder="Date Found" size="lg" bg="white" />
              <Select
                placeholder="Please select a level of severity"
                size="lg"
                bg="white"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
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
    </div>
    
  );
};

export default Report;
