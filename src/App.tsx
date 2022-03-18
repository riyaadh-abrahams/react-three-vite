import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import ColorShiftMaterial from "./color-noise";
import { extend } from "@react-three/fiber";
import { useState } from "react";

function App() {
  extend({ ColorShiftMaterial });

  const Block = () => {
    const [elapsedTime, setElapsedTime] = useState(0);

    useFrame((state) => {
      setElapsedTime(state.clock.elapsedTime);
    });

    return (
      <mesh>
        <boxGeometry />
        <colorShiftMaterial color="hotpink" time={elapsedTime * 0.2} />
      </mesh>
    );
  };

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
