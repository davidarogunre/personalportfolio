import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
// import Projects from './components/Projects'
// import Skills from './components/Skills'

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
