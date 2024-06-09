import React from "react";
import { ChakraProvider, Container, VStack, HStack, Box, Text, Button, Input, FormControl, FormLabel, Textarea, Image, IconButton } from "@chakra-ui/react";
import { FaCamera, FaSave } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.xl" p={4}>
        <VStack spacing={4} align="stretch">
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontSize="2xl" fontWeight="bold">
              Roof Inspection App
            </Text>
          </Box>

          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">
              User Authentication
            </Text>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button colorScheme="blue" mt={4}>
              Login
            </Button>
          </Box>

          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">
              Inspection Dashboard
            </Text>
            <Button colorScheme="green" leftIcon={<FaCamera />}>
              Create New Inspection
            </Button>
          </Box>

          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">
              Detailed Inspection Form
            </Text>
            <FormControl id="structural-integrity" isRequired>
              <FormLabel>Structural Integrity</FormLabel>
              <Textarea placeholder="Describe the structural integrity of the roof" />
            </FormControl>
            <FormControl id="material-condition" isRequired>
              <FormLabel>Material Condition</FormLabel>
              <Textarea placeholder="Describe the condition of the roofing materials" />
            </FormControl>
            <FormControl id="corrosion" isRequired>
              <FormLabel>Corrosion Identification</FormLabel>
              <Textarea placeholder="Describe areas affected by rust or corrosion" />
            </FormControl>
            <FormControl id="paint-deterioration" isRequired>
              <FormLabel>Paint Deterioration</FormLabel>
              <Textarea placeholder="Describe any peeling, cracking, or fading paint" />
            </FormControl>
            <FormControl id="water-leak-detection" isRequired>
              <FormLabel>Water Leak Detection</FormLabel>
              <Textarea placeholder="Describe locations of leaks and evidence of water damage" />
            </FormControl>
            <Button colorScheme="blue" mt={4} leftIcon={<FaSave />}>
              Save Inspection
            </Button>
          </Box>

          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">
              Image Upload and Annotation
            </Text>
            <HStack spacing={4}>
              <Image src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29mJTIwaW5zcGVjdGlvbnxlbnwwfHx8fDE3MTc5MzcyNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" objectFit="cover" />
              <IconButton aria-label="Upload Image" icon={<FaCamera />} size="lg" />
            </HStack>
          </Box>

          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">
              Findings and Recommendations
            </Text>
            <FormControl id="findings" isRequired>
              <FormLabel>Findings</FormLabel>
              <Textarea placeholder="Detailed description of observed issues" />
            </FormControl>
            <FormControl id="recommendations" isRequired>
              <FormLabel>Recommendations</FormLabel>
              <Textarea placeholder="Suggested repairs and maintenance actions" />
            </FormControl>
            <Button colorScheme="blue" mt={4} leftIcon={<FaSave />}>
              Save Report
            </Button>
          </Box>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
