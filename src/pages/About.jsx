import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About News Aggregator</Heading>
      <Text fontSize="lg" mb={6}>News Aggregator is your go-to platform for the latest news from various sources, all in one place.</Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <Text ml={2}>Real-time updates</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Wide range of sources</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>User-friendly interface</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;