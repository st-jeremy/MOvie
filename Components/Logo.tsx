import { useRouter } from 'next/router';
import { Box, Heading  } from '@chakra-ui/react';

const Logo = () => {

  const router = useRouter();
  const handleHomeClick =() =>{
    router.push('/')
  }

  return ( 
    <Box textAlign={'center'} m={'auto'}>
      <Heading 
        fontSize={{base: '18pt', md: '30pt'}} 
        onClick={handleHomeClick} 
        cursor='pointer' 
        width={{base: 'fit-content', md: '300px'}} 
        color={'white'}
      >
        Moviez
      </Heading>
    </Box>
   );
}
 
export default Logo;