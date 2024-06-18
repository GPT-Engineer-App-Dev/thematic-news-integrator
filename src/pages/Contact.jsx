import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';

const Contact = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>Contact Us</Heading>
      <Text fontSize="lg" mb={6}>We'd love to hear from you! Reach out to us at contact@newsaggregator.com.</Text>
    </Flex>
  </Box>
);

export default Contact;