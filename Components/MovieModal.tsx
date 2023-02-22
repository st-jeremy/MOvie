import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";

const MovieModal = ({movieInfo, handleClose}) => {
  return ( 
    <Box>
      <Image src={movieInfo.Poster} height={ 100} width={ 70} alt={"Poster"} />
        <p>
          <b>Actors:</b> {movieInfo.Actors}
        </p>
        <p>
          <b>Genre:</b> {movieInfo.Genre}
        </p>
        <p>
          <b>Director:</b> {movieInfo.Director}
        </p>
        <p>
          <b>Released:</b> {movieInfo.Released}
        </p>
        <p>
          <b>Plot:</b> {movieInfo.Plot}
        </p>
      <Button onClick={handleClose}>Close</Button>
    </Box>
   );
}
 
export default MovieModal;