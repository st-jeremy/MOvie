import { Box, Heading } from "@chakra-ui/react";

interface Image{
  width: number,
  height: number,
  alt: string
}

const MovieCard = ({movie}) => {
  
  return ( 
    <Box>
      <Heading>Movie: {movie.title}</Heading>

    </Box>
   );
}
 
export default MovieCard;