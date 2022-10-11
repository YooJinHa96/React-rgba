import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Sketch } from '@uiw/react-color'
import hexToRgba from 'hex-to-rgba';
import { Canvas } from '@react-three/fiber';
function App() {

  const [hex, setHex] = useState("#fff");
  const SKETCH_REF = useRef();
  const canvas = useRef();
  const [rgba, setRgba] = useState({});
  const [canvasColor, setcanvasColor] = useState({ r: 255, g: 255, b: 255, a: 1 })

  const hande_click = (() => {
    setcanvasColor(rgba)

  })
  useEffect(() => {

  })//`rgba(${test.R},${test.G},${test.B},${test.A})`//`${hex}`
  return (
    <div>
      <Sketch
        id='sketchsaa'
        style={{ marginLeft: 20 }}
        color={hex}
        ref={SKETCH_REF}
        onChange={(color) => {
          setHex(color.hex);
          setRgba(color.rgba)
        }}
      >
        <button>CLICK</button>
      </Sketch>
      <button onClick={hande_click}> click </button>
      <Canvas style={{
        witdh: '300px', height: '300px',
        backgroundColor: `rgba(${canvasColor.r},${canvasColor.g},${canvasColor.b},${canvasColor.a})`
      }}> </Canvas>

      <p> HEX : {hex}</p>
      <p> RGBA </p>
      <p>R : {rgba.r}, G : {rgba.g}, B: {rgba.b}, A: {rgba.a}</p>

    </div>

  );
}

export default App;
