import { Box } from "@chakra-ui/react";
import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [ movies, setMovies ] = useState([])
  return ( 
    <Box>
      {movies.map((movie, index)=>{
        return <MovieCard key={index} {...movies} />
      })}
      
      
    </Box>
   );
}
 
export default MovieList;