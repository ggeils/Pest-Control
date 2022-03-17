import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Button
  } from '@chakra-ui/react';
  const data = [
    {
        "bugName": "Image not displaying properly",
        "productName": "E-Commerce Site",
        "severity": "High",
        "description": "Image is on the wrong side of the page",
        "reproduction": "No specific instructions needed",
        "status": "open"
    },
    {
        "bugName": "Syntax error in index.js",
        "productName": "E-Commerce Site",
        "severity": "High",
        "description": "Variable syntax incorrect in index.js",
        "reproduction": "No specific instructions needed",
        "status": "open"
    }
  ];
  // export default function blogPostWithImage() {
  const CurrentBugs = () => {
    return (
        <Center py={6}>
            <Box
            maxW={'1200px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
                Current Bugs
            </Heading>
            </Box>
        <div>
            {data.map((info) => (
                <Center py={6}>
                    <Box
                        maxW={'400px'}
                        w={'full'}
                        bg={'white'}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        p={6}
                        textAlign={'center'}>
                    <Stack> 
                        <Text
                        color={'green.500'}
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
                        <Text fontWeight={600}>Name</Text>
                        <Text color={'gray.500'}>Date Submitted:·</Text>
                        <Button colorScheme="green">Mark As Fixed</Button>
                        <Button colorScheme="blue">Edit Bug</Button>
                        </Stack>
                    </Stack>
                    </Box>
                    <Box>
                    </Box>
                </Center>
            ))}
        </div>
    </Center>


    );
  }
  export default CurrentBugs;