import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Sketch } from '@uiw/react-color'
import hexToRgba from 'hex-to-rgba';
import { Canvas } from '@react-three/fiber';
function App() {

  const [hex, setHex] = useState("#fff");
  const SKETCH_REF = useRef();

  const [canvasColor, setcanvasColor] = useState({ r: 255, g: 255, b: 255, a: 1 })


  return (
    <div>
      <Sketch
        id='sketchsaa'
        style={{ marginLeft: 20 }}
        color={hex}
        ref={SKETCH_REF}
        onChange={(color) => {
          console.log(color.rgba)
          setHex(color.hex);
          setcanvasColor(color.rgba)
        }}
      >

      </Sketch>

      <Canvas style={{

        witdh: '300px', height: '300px',

        backgroundColor: `rgba(${canvasColor.r},${canvasColor.g},${canvasColor.b},${canvasColor.a})`
     
     }}> 
      </Canvas>

      <p> HEX : {hex}</p>
      <p> RGBA </p>
      <p>R : {canvasColor.r}, G : {canvasColor.g}, B: {canvasColor.b}, A: {canvasColor.a}</p>

    </div>

  );
}

export default App;
