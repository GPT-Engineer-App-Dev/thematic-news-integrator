import { Container, Text, VStack, Input, Box, Heading, Flex, Link, HStack, IconButton } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Welcome to News Aggregator</Heading>
        <Text fontSize="lg">Stay updated with the latest news</Text>
        <Flex width="100%" mt={4}>
          <Input placeholder="Search for news..." size="lg" />
          <IconButton aria-label="Search" icon={<FaSearch />} size="lg" ml={2} />
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;