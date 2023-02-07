import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [ movies, setMovies ] = useState([]);
  const url = "https://api.themoviedb.org";

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    setMovies(movies.results);
  }

  return ( 
    <Box>
      <Heading>All Movies</Heading>
      {movies.map((movie, index)=>{
        return <MovieCard key={index} {...movies} />
      })}
      
    </Box>
   );
}
 
export default MovieList;