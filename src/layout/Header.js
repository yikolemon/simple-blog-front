import React from 'react';
import { Box, Flex, Icon, Text,InputRightElement,InputGroup,Input } from '@chakra-ui/react';
import { VscHome,VscSearch  } from "react-icons/vsc";

const Header = () => {

  return (
    <Box bg="#f9f9f9" color="myGray" p={4} color="#777" boxShadow="md">
      <Flex alignItems="center">
        <Flex flex={1} alignItems="center">
          <Icon as={VscHome} boxSize={6} mr={2} />
          <Text fontSize="xl" fontWeight="bold">
            Yikolemon's Blog
          </Text>
        </Flex>

        <InputGroup flex={3}>
          <Input type="text" placeholder="Search..." />
          <InputRightElement pointerEvents="none">
            <Icon as={VscSearch} color="gray.300" transform="scaleX(-1)" />
          </InputRightElement>
        </InputGroup>

        <Box flex={1} ml="auto">
          {/* 其他内容 */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
