import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../Components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  
  )
}
