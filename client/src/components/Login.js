// declare new state variable
import React, { useState } from 'react';
import Auth from '../utils/auth'
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
import { NavLink } from "react-router-dom";


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
    Link,
    FormControl,
    FormHelperText,
    InputRightElement,
} from "@chakra-ui/react";
// imports react icons
// https://react-icons.github.io/react-icons
import { FaUserAlt, FaLock, FaBug } from "react-icons/fa";

/** Added by maribel */
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const Bug = chakra(FaBug);

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [ login, { data, loading, error} ] = useMutation(LOGIN_USER);

    // update state based on form input changes //
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value, });
    };

    // submit form //
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const dataFROMlogin = await login({ variables: { email: formState.email, password: formState.password }, });
            const token = dataFROMlogin.data.login.token;
            Auth.login(token);
        } 
        catch (e) { console.error(e); }
        // clear form values
        setFormState({ email: '', password: '', });
    };

    return (
        // flex is basically flex box in
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Bug size={"40px"} />
                {/* change colors to match style of site */}
                <Heading color="teal.400">Pest Control</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form onSubmit={handleFormSubmit}>
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
                                    <Input type="email" placeholder="Email Address" name="email" onChange={handleChange}/>
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
                                        placeholder="Password" name="password" onChange={handleChange} 
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textAlign="right">
                                    <Link>Forgot password?</Link>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                {"  "}
                <NavLink color="teal.500" to='/signup'>
                    Sign Up
                </NavLink>
            </Box>
        </Flex>
    );
};

export default Login;
