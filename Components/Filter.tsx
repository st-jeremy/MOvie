import { Box } from "@chakra-ui/react";
import { useEffect } from 'react';

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {

  useEffect(()=>{
    activeGenre===0 ? setFiltered(popular) : popular
  })
  return ( 
    <Box>

    </Box>
   );
}
 
export default Filter;
