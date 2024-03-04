import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Card,
  Icon,
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
} from '@chakra-ui/react';
import { VscComment, VscFlame, VscCalendar, VscChevronRight } from 'react-icons/vsc';
import CustomButton from '../components/basic/CustomButton';

const MainContent = () => {
  return (
    <Flex
      direction="column"
      bg="#f9f9f9"
      color="gray.800"
      p={4}
      height="100%"
      overflowY="auto"
      css={{ scrollBehavior: 'smooth' }}
    >
      <Card mb={4} p={4} boxShadow="md" borderRadius="md" position="sticky" top="0" zIndex="sticky">
        <Breadcrumb spacing="8px" separator={<VscChevronRight color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" color="blue.500">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" color="blue.500">
              About
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" color="blue.500">
              Contact
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Card>

      <Box
        flex="1" // Make sure the box takes the remaining space
        overflowY="auto" // Add a scrollbar for the blog list
      >
        <Card p={4} boxShadow="md" borderRadius="md" mb={4}>
          <Box>
            <Heading fontSize="xl" mb={4}>
              这是文章标题
            </Heading>
            <Text color="gray.600" mb={4}>
              文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介
            </Text>
            <Flex direction="row" alignItems="center">
              <Flex align="center" mr={4}>
                <Icon as={VscCalendar} boxSize={6} mr={2} color="gray.500" />
                <Text fontSize="sm" color="gray.500">
                  发布日期: xxxx
                </Text>
              </Flex>
              <Flex align="center" mr={4}>
                <Icon as={VscFlame} boxSize={6} mr={2} color="orange.500" />
                <Text fontSize="sm" color="gray.500">
                  阅读量: xxxx
                </Text>
              </Flex>
              <Flex align="center">
                <Icon as={VscComment} boxSize={6} mr={2} color="blue.500" />
                <Text fontSize="sm" color="gray.500">
                  评论数: xxxx
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Card>
        <Card p={4} boxShadow="md" borderRadius="md" mb={4}>
          <Box>
            <Heading fontSize="xl" mb={4}>
              这是文章标题
            </Heading>
            <Text color="gray.600" mb={4}>
              文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介文章的简介
            </Text>
            <Flex direction="row" alignItems="center">
              <Flex align="center" mr={4}>
                <Icon as={VscCalendar} boxSize={6} mr={2} color="gray.500" />
                <Text fontSize="sm" color="gray.500">
                  发布日期: xxxx
                </Text>
              </Flex>
              <Flex align="center" mr={4}>
                <Icon as={VscFlame} boxSize={6} mr={2} color="orange.500" />
                <Text fontSize="sm" color="gray.500">
                  阅读量: xxxx
                </Text>
              </Flex>
              <Flex align="center">
                <Icon as={VscComment} boxSize={6} mr={2} color="blue.500" />
                <Text fontSize="sm" color="gray.500">
                  评论数: xxxx
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Card>

        {/* Additional Blog Cards Go Here */}
        {/* Add space between additional blog cards using mb={4} or other desired margin */}
      </Box>
    </Flex>
  );
};

export default MainContent;
