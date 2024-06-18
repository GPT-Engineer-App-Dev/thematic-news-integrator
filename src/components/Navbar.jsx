import { Box, Flex, Link, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</NavLink>
          <NavLink to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</NavLink>
          <NavLink to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</NavLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;