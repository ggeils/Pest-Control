// declare new state variable
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations"

import Auth from "../utils/auth"

// importing prebuilt components from the chakra website
// https://chakra-ui.com/docs/components/overview
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    FormControl,
    InputRightElement
} from "@chakra-ui/react";
// imports react icons
// https://react-icons.github.io/react-icons
import { FaUserAlt, FaLock, FaBug } from "react-icons/fa";
import Image from './Assets/images/backgroundimage.png'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const Bug = chakra(FaBug);

// let inputValues = {
//     username: "",
//     email: "",
//     password: "",
// }

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [addUser] = useMutation(ADD_USER);
    const handleShowClick = () => setShowPassword(!showPassword);

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });

    const newUserHandler = async (event) => {
        event.preventDefault();
        console.log(formState);

        try{
            const mutationResponse = await addUser({
                variables: {
                    username: formState.username,
                    email: formState.email,
                    password: formState.password
                },
            });
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);
        } 
        catch (err){console.log(err); }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value, });
    }
    // const newUser = async (inputValues) => {
    //     try{
    //         const mutationResponse = await addUser({
    //             variables: {
    //                 username: inputValues.username,
    //                 email: inputValues.email,
    //                 password: inputValues.password
    //             },
    //           });
      
    //           const token = mutationResponse.data.addUser.token;
    //           Auth.login(token);
    //     } catch (err){
    //         console.log(err);
    //     }
    // }

    return (
        // flex is basically flex box in
        <div style={{ backgroundImage:`url(${Image})`, backgroundSize: 'cover'}}>
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Bug size={'40px'}/>
                {/* change colors to match style of site */}
                <Heading color="teal.400">Pest Control</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form onSubmit={newUserHandler}>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email" placeholder="Email address" name="email" onChange={handleChange} />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                    />
                                    
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Confirm Password" name="password" onChange={handleChange}
                                    />
                                    
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                // onClick={newUser(inputValues)}
                            >
                                Create Account
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
        </div>
    );
};


export default Signup;