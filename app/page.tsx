"use client";
import { ChakraProvider} from '@chakra-ui/react'
import Features from './Features';
import Header from './Header';
import Pricing from './pricing'



export default function Home() {
  return(
    <ChakraProvider>
      <Header/>
      <Pricing/>
      <Features/>
    </ChakraProvider>
  )
        
}
