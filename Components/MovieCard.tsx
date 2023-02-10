import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import type { AppProps from 'next/app';

interface Image{
  width: number,
  height: number,
  alt: string
}

const MovieCard = () => {
  
  return ( 
    <Box>
      <h2>Movie: {movie.title}</h2>
      <Image src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />

    </Box>
   );
}
 
export default MovieCard;