// CustomButton.js

import React from 'react';
import { Button } from '@chakra-ui/react';

const CustomButton = ({isActive, children, ...rest }) => {
  return (
    <Button
      width="100%"
      marginTop={2}
      bg={isActive?'my.3':'my.1'}
      color="my.4"
      _hover={{
        bg: 'my.3'
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
