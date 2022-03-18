import { MeshProps, useFrame } from "@react-three/fiber";
import { useState } from "react";

const Block = (props: MeshProps) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useFrame((state) => {
    setElapsedTime(state.clock.elapsedTime);
  });

  return (
    <mesh {...props}>
      <boxGeometry />
      <colorShiftMaterial color="hotpink" time={elapsedTime * 0.2} />
    </mesh>
  );
};

export default Block;
