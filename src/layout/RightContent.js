// RightContent.js

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
      <Box flex="1" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
        <div title={title}> {/* 使用 title 属性来显示完整的标题 */}
          <Text>{title.length > 9 ? `${title.slice(0, 9)}...` : title}</Text>
        </div>
      </Box>
      <Flex align="center">
        <Box>👍</Box>
        <Box ml={1}>{likesCount}</Box>
      </Flex>
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
                <Box>
                  <div>
                    <a>这是一篇博客1</a>
                  </div>
                </Box>
              </Flex>
              <Flex
                h='40px'
                alignItems='center'
                justifyContent='center'
              >
                <Box>
                  <div>
                    <a>这是一篇博客2</a>
                  </div>
                </Box>
              </Flex>
              <Flex
                h='40px'
                alignItems='center'
                justifyContent='center'
              >
                <Box>
                  <div>
                    <a>这是一篇博客3</a>
                  </div>
                </Box>
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
              <BlogLink title="博客标题1" likesCount={15} />
              <BlogLink title="博客标题2这是一个非常长的标题" likesCount={20} />
              <BlogLink title="博客标题3" likesCount={10} />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default RightContent;
