import { Box } from "@chakra-ui/react";

const Playground = () => {
  let cx = document.querySelectorAll("canvas").getContext("2d");
cx.beginPath();
cx.moveTo(10, 90);
// control=(60,10) goal=(90,90)
cx.quadraticCurveTo(60, 10, 90, 90);
cx.lineTo(60, 10);
cx.closePath();
cx.stroke();

  return ( 
    <Box>
<canvas></canvas>
    </Box>
   );
}
 
export default Playground;