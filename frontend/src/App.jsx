import React from 'react';
import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CreatePage } from './pages/CreatePage';
import NavBar from './components/navbar';
import { useColorMode, useColorModeValue } from './components/ui/color-mode';

function App() {

  return (
    <>
    <Box minH={"100vh"} bg={useColorModeValue("red.300","blue.500")}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>
    </Box>
    </>
  );
}

export default App;
