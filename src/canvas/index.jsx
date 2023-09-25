/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Shirt from './Shirt';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';

const CanvasModel = () => {
  return (
    <Canvas
      id='canvas'
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className='w-full h-full max-w-full transition-all ease-in'>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
