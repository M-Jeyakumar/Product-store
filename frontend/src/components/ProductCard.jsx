import { Box, chakra, Heading, HStack, IconButton, Image, Text, Dialog, Button, Portal, CloseButton, VStack, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useColorMode, useColorModeValue } from './ui/color-mode';
import { useProductStore } from '../store/product';
import {Toaster, toaster} from '../components/ui/toaster';
const EditIcon = chakra(FiEdit2);
const DeleteIcon = chakra(MdDelete);

const ProductCard = ({product}) => {
  // if(!product) return null;
  const [updatedproduct, setUpdatedProduct] = useState(product);
  const [open, setOpen] = useState(false)
  const textColor = useColorModeValue("gray.600","gray.200");
  const bg = useColorModeValue("blue.100","gray.800");
  const {deleteProduct, updateProduct} = useProductStore();
  
  const handleDeleteProduct = async (pid) => {
    const {success,message} = await deleteProduct(pid);
    if(!success){
      toaster.create({
        title: "Error occured",
        description: message,
        type:"error"
      })
    }else{
      toaster.create({
        title:"Successfully Deleted",
        description: message,
        type: "success"
      })
    }
  }

  const updateProductDetail = async (pid, updatedproduct) => {
    const {success,message} = await updateProduct(pid, updatedproduct);
    // onclose();
    if(!success){
      toaster.create({
        title: "Error occured",
        description: message,
        type:"error"
      })
    }else{
      toaster.create({
        title:"Successfully Updated",
        description: message,
        type: "success"
      })
    }
  }

  return (
    <Box 
    shadow={"lg"}
    rounded={'lg'}
    overflow={'hidden'}
    transition={'all 0.3s'}
    _hover={{transform: 'translateY(-5px)', shadow:"xl"}}
    bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"} />
        <Box p={4}>
            <Heading as='h3' size={"md"} mb={2}>
                {product.name}
            </Heading>
            
            <Text 
            fontWeight={"bold"}
            fontSize={"xl"}
            color={textColor}
            mb={4}
            >
                ${product.price}
            </Text>

            <HStack spacing={2}>
              <IconButton
                aria-label="Edit"
                bg={"blue.400"}
              >
                <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
                  <Dialog.Trigger asChild>
                    <EditIcon/>
                  </Dialog.Trigger>
                  <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                      <Dialog.Content>
                        <Dialog.Header>
                          <Dialog.Title>Update Product</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                          <VStack spacing={4}>
                            <Input placeholder='Product Name' name='name' value={updatedproduct.name}
                              onChange={(e) => setUpdatedProduct({ ...updatedproduct, name: e.target.value})}/>
                            <Input placeholder='Price' name='price' value={updatedproduct.price}
                              onChange={(e) => setUpdatedProduct({ ...updatedproduct, price: e.target.value})}/>
                            <Input placeholder='Product Link' name='link' value={updatedproduct.link}
                              onChange={(e) => setUpdatedProduct({ ...updatedproduct, link: e.target.value})}/>
                            <Input placeholder='Product Image' name='image' value={updatedproduct.image}
                              onChange={(e) => setUpdatedProduct({ ...updatedproduct, image: e.target.value})}/>
                          </VStack>
                        </Dialog.Body>
                        <Dialog.Footer>
                          <Dialog.ActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                          </Dialog.ActionTrigger>
                          <Dialog.ActionTrigger asChild>
                            <Button colorScheme="blue" onClick={() => {updateProductDetail(product._id,updatedproduct)}}>Update</Button>
                          </Dialog.ActionTrigger>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                          <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                      </Dialog.Content>
                    </Dialog.Positioner>
                  </Portal>
                </Dialog.Root>
              </IconButton>
              <IconButton
                bg="red.500"
                aria-label="Delete"
                onClick={() => {handleDeleteProduct(product._id)}}
              >
                <DeleteIcon/>
              </IconButton>
            </HStack>
            <Toaster/>
        </Box>

        
    </Box>
    

  )
}

export default ProductCard