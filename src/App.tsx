import "./materials/color-noise";
import { Box, Button } from "@chakra-ui/react";
import { Float, Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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
