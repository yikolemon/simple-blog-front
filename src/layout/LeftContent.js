// LeftContent.js

import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import me from '../images/me.png';
import CustomButton from '../components/basic/CustomButton';

const menuItems = ['文章', '闲话', '关于'];

const LeftContent = () => {
  return (
    <Flex
      direction="column"
      bg="#f9f9f9"
      color="myGray"
      color="#777"
      boxShadow="md"
      p={4}
      textAlign="center"
      height="100%" // 设置整个 Flex 容器的高度为 100%
    >
      <Image
        borderRadius="full"
        boxSize="150px"
        src={me}
        alt="Dan Abramov"
        mx="auto"
      />
      <Box mt={4}>
        {menuItems.map((item, index) => (
          <CustomButton key={index}>{item}</CustomButton>
        ))}
      </Box>
    </Flex>
  );
};

export default LeftContent;
