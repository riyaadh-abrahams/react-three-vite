import "./materials/color-noise";
import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Block from "./objects/Block";

function App() {
  return (
    <Box height="full">
      <Canvas camera={{ position: [1.5, 1.5, -1.5] }}>
        <OrbitControls />
        <color attach="background" args={["black"]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Block />
      </Canvas>
    </Box>
  );
}

export default App;
