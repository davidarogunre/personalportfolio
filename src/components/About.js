import '@fontsource/ubuntu/300.css'
import {Box, Text} from '@chakra-ui/react'
import Typed from "typed.js"
import {useEffect, useRef} from "react"
import { keyframes } from "styled-components";
const About = () => {
  const el = useRef(null)
  useEffect(()=>{
    const typed = new Typed(el.current, {
      strings: ['Software Engineer', 'Full Stack Developer', 'Python Ethusiatist'],
      startDelay: 100,
      typeSpeed:80,
      backSpeed:50,
      backDelay: 100,
      loop: true
    })

    return () =>{
      typed.destroy()
    }
  }, [])


  return (
    <section width="100%">
    <Box  margin={"100px 0 0 40px"} fontFamily="Ubuntu">
      <Box fontWeight="bold" display={{xl:"flex"}} flexDirection={{xl:"column"}} alignItems={{xl:"center"}}>
        <Text fontSize={{base:"60px", md:"80px", xl:"90px"}}>Hi! I'm a </Text>
        <Box fontSize={{base:"47px", md:"70px", xl:"90px"}} bgGradient="linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"  backgroundClip="text" textColor="transparent">
        <span ref={el}></span>
        </Box>
      </Box>
      <Box width="20%" fontWeight="lighter" display={{xl:"flex"}} flexDirection={{xl:"column"}} alignItems={{xl:"center"}}>
      <Text>
      I'm a developer skilled with a wide range of technologies and frameworks.
      I have experience with working in teams and can coordinate well with others.
      </Text>
      </Box>
      </Box>
    </section>
  )
}

export default About