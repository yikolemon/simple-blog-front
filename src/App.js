import React from 'react';
import {
  ChakraProvider,
  Container,
  Box,
  Flex,
} from '@chakra-ui/react';
import Header from './layout/Header';
import theme from './thmem';
import LeftContent from './layout/LeftContent';
import RightContent from './layout/RightContent';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="85%" mt={0} boxShadow="xl" p={0}>
        <Flex direction="column" height="100vh">
          <Header/>
          <Flex height="100%">
            <Box flex="4" bg="gray.200">
              <LeftContent/>
            </Box>
            <Box flex="14"  bg="green.200">
              中宽部分
            </Box>
            <Box flex="5"  bg="gray.200">
              <RightContent/>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
