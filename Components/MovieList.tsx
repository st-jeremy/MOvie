import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [ movies, setMovies ] = useState([]);
  const url = "https://api.themoviedb.org";

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = 

  return ( 
    <Box>
      {movies.map((movie, index)=>{
        return <MovieCard key={index} {...movies} />
      })}
      
    </Box>
   );
}
 
export default MovieList;