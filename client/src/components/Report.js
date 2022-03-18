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
import { useState } from "react";
import { useMutation } from  '@apollo/client'; 
import { ADD_BUG } from "../utils/mutations";
import Image from './Assets/images/backgroundimage.png';


const Report = () => {
  const [ addBug , { error }] = useMutation(ADD_BUG,)

  const [formState, setFormState] = useState({
    bugName: '', productName: '', severity: '', description: '', reproduction: '' ,
    })

    const newBugHandler = async (event) => {
      event.preventDefault();
      console.log(formState);

        try{
          
            const { data } = await addBug({
                variables: {
                  bugName: formState.bugName, productName: formState.productName,
                  severity: formState.severity , description: formState.description ,
                  reproduction: formState.reproduction ,
                },
            });
            window.location.assign('/Current');
            // return <Navigate to="/Current" />;
        } 
        catch (err){console.log(err); }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value, });
    }

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
      <form action="submit" onSubmit={newBugHandler}>
        <Box>
          <Stack spacing={4}>
            <FormControl isRequired>
              <Input placeholder="Project Name" size="lg" bg="white" name="productName" onChange={handleChange} />
              <Input placeholder="Bug Name" size="lg" bg="white" name="bugName" onChange={handleChange}/>
              <Input placeholder="Date Found" size="lg" bg="white" />
              <Select
                placeholder="Please select a level of severity"
                size="lg"
                bg="white" name="severity" onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
              <Input placeholder="Bug Description" size="lg" bg="white" name="description" onChange={handleChange}/>
              <Input placeholder="Reproduction Details" size="lg" bg="white" name="reproduction" onChange={handleChange} />
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
