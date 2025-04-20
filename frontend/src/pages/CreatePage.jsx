import { Container,VStack, Heading, Box, Input, Button } from '@chakra-ui/react'
import { Toaster, toaster } from '../components/ui/toaster'
import React, { useState } from 'react'
import { useColorModeValue } from '../components/ui/color-mode';
import { useProductStore } from '../store/product';

export const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    link: "",
    image: "",
  });
  const {createProduct} = useProductStore();

  const handleAddProduct = async() => {
    const {success, message} =  await createProduct(newProduct);
    if(!success){
      toaster.create({
        title:"Error occured",
        description:message,
        type:"error"
      })
    }else{
      toaster.create({
        title:"Success",
        descripton:message,
        status:"success",
        isClosable:true
      })
    }
    setNewProduct({name:"",price:"",link:"",image:""});
  }

  return <Container maxW={"container.sm"} py={12}>
    <VStack
    spacing={8}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Create New Product
      </Heading>

      <Box w={400} bg={useColorModeValue("white","green.300")} p={6} rounded={"lg"} shadow={"md"} >
        <VStack spacing={4}>
          <Input
          placeholder='Product Name'
          color={"black"}
          name='name'
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
          />
        </VStack>
        <br/>
        <VStack spacing={4}>
          <Input
          placeholder='Price'
          color={"black"}
          name='price'
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
          />
        </VStack>
        <br/>
        <VStack spacing={4}>
          <Input
          placeholder='Product Link'
          color={"black"}
          name='link'
          value={newProduct.link}
          onChange={(e) => setNewProduct({ ...newProduct, link: e.target.value})}
          />
        </VStack>
        <br/>
        <VStack spacing={4}>
          <Input
          placeholder='Product Image'
          color={"black"}
          name='image'
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
          />
        </VStack>
        <br/>
        <Button colorScheme={'blue'} onClick={handleAddProduct} w={"full"}>
          Add Product
        </Button>
      </Box>
      <Toaster/>
    </VStack>
  </Container>
}
