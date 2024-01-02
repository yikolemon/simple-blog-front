// CustomButton.js

import React from 'react';
import { Button } from '@chakra-ui/react';

const CustomButton = ({ children, ...rest }) => {
  return (
    <Button
      width="100%"
      marginTop={2}
      bg="my.1"
      color="my.4"
      _hover={{
        bg: 'my.3',
        color: 'my.4',
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
