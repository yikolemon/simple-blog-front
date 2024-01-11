// RightContent.js

import { GoFlame } from "react-icons/go";


import React from 'react';
import {
  Box,
  Flex,
  StackDivider,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs, Text,
  VStack,
} from '@chakra-ui/react';

const BlogLink = ({ title, likesCount }) => {
  return (
    <Flex align="center" mb={4}>
      <Flex align={"center"}>
        <Box as={GoFlame} />
        <Text mr={2}>{likesCount}</Text>
      </Flex>
        <div title={title}> {/* 使用 title 属性来显示完整的标题 */}
          <Text>{title.length > 9 ? `${title.slice(0, 9)}...` : title}</Text>
        </div>
    </Flex>
  );
};

const RightContent = () => {
  return (
    <Flex
      direction="column"
      bg="#f9f9f9"
      color="#777"
      boxShadow="md"
      p={4}
      textAlign="center"
      height="100%"
    >
      <Tabs isFitted position="relative" variant="unstyled">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg='my.3'
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
              align='stretch'
            >
              <Flex
                h='40px'
                alignItems='center'
                justifyContent='center'
              >
                <BlogLink title="博客标题1" likesCount={15} />
              </Flex>
              <Flex
                h='40px'
                alignItems='center'
                justifyContent='center'
              >
                <BlogLink title="博客标题1" likesCount={15} />
              </Flex>
            </VStack>
          </TabPanel>
          <TabPanel>
            {/* 在第二个 TabPanel 中添加博客链接列表 */}
            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
              align='stretch'
            >
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default RightContent;
