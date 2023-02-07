import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

interface Image{
  width: number,
  height: number,
  alt: string
}

const MovieCard = ({movie}) => {
  
  return ( 
    <Box>
      <Heading>Movie: {movie.title}</Heading>
      <Image src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />

    </Box>
   );
}
 
export default MovieCard;