import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const api =  'http://www.omdbapi.com/?i=tt3896198&apikey=2aacff32';

const apiKey = '2aacff32';

const Main = () => {
  const [ name, setName ] = useState('');

  const getInfo = () => {
    
  }
  return ( 
    <Box>
      <h2> Main </h2>
    </Box>
   );
}
 
export default Main;