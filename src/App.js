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
import MainContent from './layout/MainContent';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="80%" mt={0} boxShadow="xl" p={0}>
        <Flex direction="column" height="100vh">
          <Header/>
          <Flex height="100%">
            <Box flex="1" bg="gray.200">
              <LeftContent/>
            </Box>
            <Box flex="3"  bg="green.200">
              <MainContent/>
            </Box>
            <Box flex="1"  bg="gray.200">
              <RightContent/>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
