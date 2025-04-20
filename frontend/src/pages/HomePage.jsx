import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useColorModeValue } from '../components/ui/color-mode';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import Product from '../../../backend/models/products.model';
import ProductCard from "../components/ProductCard.jsx"

export const HomePage = () => {
  const {fetchAllProducts, products} = useProductStore();
  useEffect(() => {fetchAllProducts()}, [fetchAllProducts]);
  console.log(products);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack>
        <Text
            fontSize="28px"
            color={useColorModeValue("blue.600","brown.500")}
            // bgGradient={"linear(to-l, cyan.400, blue.500)"}
            // bgClip={"text"}
            fontWeight="extrabold"
         >
          Current Products
        </Text>

        <Text
        as={'span'}
        fontSize="16px"
        color={useColorModeValue("blue.600","brown.500")}
        // bgGradient={"linear(to-l, cyan.400, blue.500)"}
        // bgClip={"text"}
        fontWeight="extrabold"
        _hover={{textDecoration:"underline"}}
        >
          <Link to={"/create"}>
            Create New Product 🏹
          </Link>
                
        </Text>
        <SimpleGrid 
          columns={{
            base:1,
            md:2,
            lg:3
          }}
          gap={{ base: "24px", md: "40px" }}
          spacing={10}
          w={"full"}
        >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}
