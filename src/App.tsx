import React, {useEffect} from 'react';
import './App.css';
import {addLine, setup3dScene} from "./dream-house-3d";
import {Canvas} from "react-three-fiber";
import Box from "./components/Box";

function App() {
    return (
        <Canvas camera={{zoom: 40, position: [0, 0, 500]}} >
            <ambientLight intensity={0.5} />
            <pointLight position={[150, 150, 150]} intensity={0.55} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Box position={[0, -3.5, 0]}/>
            <Box position={[1, 0, 0]} />
        </Canvas>
    );
}

export default App;
