import React from 'react'
import { Container, Flex, Text, HStack, Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import { LuCirclePlus, LuSun, LuMoon } from 'react-icons/lu';
import { useColorMode, useColorModeValue } from "../components/ui/color-mode.jsx"
const NavBar = () => {
    const { toggleColorMode, colorMode } = useColorMode()

   return <Container maxW={"1140px"} px={4}>
    <Flex
    h={16}
    alignItems={"center"}
    justifyContent={"space-between"}
    flexDir={{
        base:"column",
        sm:"row"
    }}
    >
        <Text
        fontSize="28px"
        color={useColorModeValue("blue.600","brown.500")}
        // bgGradient={"linear(to-l, cyan.400, blue.500)"}
        // bgClip={"text"}
        fontWeight="extrabold"
        >
                <Link to={"/"}>
                    Product Store
                </Link>
        </Text>
    
        <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
                <IconButton variant={"outline"} size={"sm"}>
                    <LuCirclePlus />
                </IconButton>
            </Link>

            <IconButton onClick={toggleColorMode} variant={"outline"} size={"sm"}>
                        {colorMode==="light" ? <LuMoon /> : <LuSun/>}
            </IconButton>

        </HStack>
    </Flex>
    
  </Container>
}

export default NavBar