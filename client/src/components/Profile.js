// import React, {useState} from 'react';

// import {
//     Heading,
//     Avatar,
//     Box,
//     Center,
//     Text,
//     Stack,
//     Button,
//     Link,
//     Badge,
//     useColorModeValue,
//     SimpleGrid,
//   } from '@chakra-ui/react';
  
//   const Profile = () => {
//     return (
//       <Center py={6}>
//         <Box
//           maxW={'1200px'}
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.900')}
//           boxShadow={'2xl'}
//           rounded={'lg'}
//           p={6}
//           textAlign={'center'}>
//           <Heading fontSize={'2xl'} fontFamily={'body'}>
//             First Last
//           </Heading>
//           <Text fontWeight={600} color={'teal.500'} mb={0}>
//             Company Name
//           </Text>
//           <Text fontWeight={600} color={'teal.500'} mb={4}>
//             Job Title
//           </Text>
//           <Text
//             textAlign={'center'}
//             color={useColorModeValue('gray.700', 'gray.400')}
//             px={3}>
//             Bugs Reported:
//             <br></br>
//             Bugs Fixed:
//           </Text>
  

  
//           {/* <Stack mt={8} direction={'row'} spacing={4}>
//             <Button
//               flex={1}
//               fontSize={'sm'}
//               rounded={'full'}
//               bg={'teal.400'}
//               color={'white'}
//               boxShadow={
//                 '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
//               }
//               _hover={{
//                 bg: 'teal.500',
//               }}
//               _focus={{
//                 bg: 'teal.500',
//               }}>
//               Message
//             </Button>
//           </Stack> */}
//         </Box>
//         <Box>
//             <Stack>
//                 <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
//                     <SimpleGrid columns={1} spacingY='20px'>
//                     </SimpleGrid>
//                     <SimpleGrid columns={1} spacingY='20px'>
//                     </SimpleGrid>
//                 </SimpleGrid>
//             </Stack>
//         </Box>
//       </Center>
//     );
//   }

// export default Profile;