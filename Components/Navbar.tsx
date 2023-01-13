import { Box, Heading } from "@chakra-ui/react";
import Logo from "./Logo";

const Navbar = () => {
  return ( 
    <Box bgColor= 'black' position={'fixed'} zIndex={'1000'} width={'100%'}>

      <Box display='flex' flexDirection={{base: 'column', md: 'row'}} p={{base: '2px', md: '1rem 2rem'}} color={'white'} maxWidth={'1400px'} margin={'auto'}>

        <Logo />

        <Box display={{base: 'inline-flex', md: 'flex'}} flexDirection={'row'}  margin={ 'auto'} width={'90%'} p={1} bgColor={'black'}>
        </Box>
      </Box>

    </Box>
   );
}
 
export default Navbar;