import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

type movies = {
  imdbID: string,
  Title: string,
  Type: string,
  Poster: string,
  Year: string
};

const api =  'http://www.omdbapi.com/?i=tt3896198&apikey=2aacff32';

const Main = () => {
  const [ name, setName ] = useState('');
  const [ movies, setMovies ] = useState([]);

  const getInfo = () => {
    axios
      .get(api + `&s=${name}` + "&type=movie" + "&page=1")
      .then((res) => {
        if(res){
          setMovies(res.data.Search)
          console.log(res.data);
        }
      })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getInfo();
  };

  return ( 
    <Box>
      <Heading> Main </Heading>
      <form>
        <label htmlFor="name">Movie Name</label>
        <Input type='text' name="name" placeholder="Search Movie Name" onChange={(e) => setName(e.target.value)} />
        <Button type="submit" onClick={(e) => handleSubmit(e)}> Search </Button>
      </form>

      {movies ? 
        <Box>
          {movies.map(movie => (
            <Box key={movie.imdbID}>
              <Image src={movie.Poster} height={100} width={60} alt={movie.Title} />
              <Text>{movie.Title}</Text>
              <Button>Details</Button>
            </Box>
          )
          )}
        </Box>
        : <Text> Movie not found!</Text>  
      }
    </Box>
   );
}
 
export default Main;