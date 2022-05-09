import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Button } from '@chakra-ui/react'
import {FaGithub, FaTwitter} from 'react-icons/fa'
import {Box} from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Box width="100%" height='52px' backgroundColor="rgb(23,25,35)"  position="relative">
    <Box display="flex" position="absolute" right="0" top="6px"> 
      <Button leftIcon={<FaGithub />} marginRight="10px">
    Github
  </Button>
  <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
    Twitter
  </Button>
        <ColorModeSwitcher/>
        </Box>
    </Box>
    
  )
}

export default Navbar