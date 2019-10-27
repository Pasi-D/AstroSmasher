import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

// Dummy geometrix box component

function BoxBox() {
 const ref: any = useRef();
 useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
 return (
   <mesh
     ref={ref}
     onClick={e => console.log('click')}
     onPointerOver={e => console.log('hover')}
     onPointerOut={e => console.log('unhover')}>
     <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
     <meshNormalMaterial attach="material" />
   </mesh>
 )
}

export const App = () => {
 return (
  <Canvas>
   <BoxBox />
  </Canvas>
 );
}

export default App;
