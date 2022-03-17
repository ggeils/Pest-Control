
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

// export default function blogPostWithImage() {
const CurrentBugs = () => {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            CurrentBugs
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Bug Name:
          </Heading>
          <Text color={'gray.500'}>
          Product Name:
          </Text>
          <Text color={'gray.500'}>
          Date Found:
          </Text>          
          <Text color={'gray.500'}>
          Severity:
          </Text>          
          <Text color={'gray.500'}>
          Bug Description:
          </Text>
          <Text color={'gray.500'}>
          Status:
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
    </Center>
  );
}

export default CurrentBugs;