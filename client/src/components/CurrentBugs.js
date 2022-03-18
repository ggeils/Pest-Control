import { NavLink } from "react-router-dom";
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Button,
    SimpleGrid,
    Flex
  } from '@chakra-ui/react';
  import Image from './Assets/images/backgroundimage.png';
  import '../components/index.css'
  const data = [
    {
        "bugName": "Image not displaying properly",
        "productName": "E-Commerce Site",
        "severity": "High",
        "description": "Image is on the wrong side of the page",
        "reproduction": "No specific instructions needed",
        "status": "pen"
    },
    {
        "bugName": "Syntax error in index.js",
        "productName": "E-Commerce Site",
        "severity": "High",
        "description": "Variable syntax incorrect in index.js",
        "reproduction": "No specific instructions needed",
        "status": "Open"
    },
    {
        "bugName": "Wront routing path for product page",
        "productName": "E-Commerce Site",
        "severity": "High",
        "description": "Product page paths to wrong location",
        "reproduction": "Click product page button",
        "status": "Open"
    },
    {
        "bugName": "Image not displaying properly",
        "productName": "E-Commerce Site",
        "severity": "High",
        "description": "Image is on the wrong side of the page",
        "reproduction": "No specific instructions needed",
        "status": "pen"
    },
    {
        "bugName": "Syntax error in index.js",
        "productName": "E-Commerce Site",
        "severity": "High",
        "description": "Variable syntax incorrect in index.js",
        "reproduction": "No specific instructions needed",
        "status": "Open"
    },
    {
        "bugName": "Wront routing path for product page",
        "productName": "E-Commerce Site",
        "severity": "High",
        "description": "Product page paths to wrong location",
        "reproduction": "Click product page button",
        "status": "Open"
    }
  ];

  // export default function blogPostWithImage() {
  const CurrentBugs = () => {
    return (
    <div style={{ height: '100%', left: 0, width: '100%', backgroundImage:`url(${Image})`, backgroundSize: 'cover'}}>
        <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center">
        
        <Stack>
        <Center py={6}>
            <Box
            maxW={'800px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
                Current Bugs
            </Heading>
            {/* this is the two buttons for the report and chart */}
            <Center>
            <Stack direction='row' spacing={4} mt={'10px'}>
                <Button background="teal.400">
                    <NavLink color="white" to='/Report'>
                    Report
                        </NavLink>
                </Button>
                <Button background="teal.400"> 
                    <NavLink color="white" to='/Chart'>
                    Chart
                        </NavLink>
                </Button>
            </Stack>
            </Center>

            </Box>
            </Center>
        <div class='bugCard'>
            <Center>
            <SimpleGrid columns={[2, null, 3]} spacing='40px'>
            {data.map((info) => (
                <Center py={6}>
                    <Box
                        maxW={'400px'}
                        height={'300px'}
                        w={'full'}
                        bg={'white'}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        p={6}
                        textAlign={'center'}>
                    <Stack>
                        <Text
                        color={'teal.400'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        {info.bugName}
                        </Text>
                        <Text color={'gray.500'}>
                        Product Name: {info.productName}
                        </Text>
                        <Text color={'gray.500'}>
                        Severity: {info.severity}
                        </Text>
                        <Text color={'gray.500'}>
                        Bug Description: {info.description}
                        </Text>
                        <Text color={'gray.500'}>
                        Status: {info.status}
                        </Text>
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Button background="teal.400">Mark As Fixed</Button>
                        </Stack>
                    </Stack>
                    </Box>
                    <Box>
                    </Box>
                </Center>
            ))}
            </SimpleGrid>
            </Center>
        </div>
    </Stack>
    </Flex>
    </div>
    );
  }
  export default CurrentBugs;