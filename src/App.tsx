import "./materials/color-noise";
import { Box } from "@chakra-ui/react";
import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Block from "./objects/Block";
import FlyingSaucer from "./objects/FlyingSaucer";
import { Suspense } from "react";

function App() {
  return (
    <Box height="full">
      <Canvas camera={{ position: [2.5, 0.5, -2.5] }}>
        <OrbitControls />
        <color attach="background" args={["black"]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Block position={[0, -1.12, 0]} scale={[5, 0.5, 5]} />
        <Suspense fallback={null}>
          <Float>
            <FlyingSaucer />
          </Float>
        </Suspense>
      </Canvas>
    </Box>
  );
}

export default App;
