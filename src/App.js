import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid
} from '@chakra-ui/react';

import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
// import Projects from './components/Projects'
// import Skills from './components/Skills'
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })





function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box pos="relative">
        <Navbar/>
        <About/>
        {/* <Dashboard/> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
