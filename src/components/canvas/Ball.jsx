/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../Loader";
import { Canvas } from "@react-three/fiber";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal map={decal} position={[0, 0, 1]}  rotation={[2 * Math.PI, 0 , 6.25]}/>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
