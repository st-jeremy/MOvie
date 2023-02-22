import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const api =  'http://www.omdbapi.com/?i=tt3896198&apikey=2aacff32';

const Main = () => {
  const [ name, setName ] = useState('');
  const [ movie, setMovie ] = useState([]);

  const getInfo = () => {
    axios
      .get(api + `&s=${name}` + "&type=movie" + "&page=1")
      .then((res) => {
        if(res){
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
    </Box>
   );
}
 
export default Main;