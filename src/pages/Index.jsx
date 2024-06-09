import React, { useState } from "react";
import { ChakraProvider, Container, VStack, HStack, Box, Text, Button, Input, FormControl, FormLabel, Textarea, Image, IconButton } from "@chakra-ui/react";
import { FaCamera, FaSave } from "react-icons/fa";

const Index = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <ChakraProvider>
      <Container maxW="container.xl" p={4}>
        <VStack spacing={4} align="stretch">
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">
              Project Information
            </Text>
            <FormControl id="company-name" isRequired>
              <FormLabel>Company Name</FormLabel>
              <Input type="text" placeholder="Enter company name" />
            </FormControl>
            <FormControl id="client-contact" isRequired>
              <FormLabel>Client Contact</FormLabel>
              <Input type="text" placeholder="Enter client contact" />
            </FormControl>
            <FormControl id="client-email" isRequired>
              <FormLabel>Client Email</FormLabel>
              <Input type="email" placeholder="Enter client email" />
            </FormControl>
            <FormControl id="site-name" isRequired>
              <FormLabel>Site Name</FormLabel>
              <Input type="text" placeholder="Enter site name" />
            </FormControl>
            <FormControl id="site-address" isRequired>
              <FormLabel>Site Address</FormLabel>
              <Textarea placeholder="Enter site address" />
            </FormControl>
          </Box>
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
              {images.map((image, index) => (
                <Image key={index} src={image} boxSize="150px" objectFit="cover" />
              ))}
              <Input type="file" multiple onChange={handleImageUpload} display="none" id="file-upload" />
              <FormLabel htmlFor="file-upload">
                <IconButton as="span" aria-label="Upload Image" icon={<FaCamera />} size="lg" />
              </FormLabel>
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
