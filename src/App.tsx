import React from 'react';
import './App.css';
import {Canvas} from "react-three-fiber";
import Sphere from "./components/Sphere";
import Box from "./components/Box";
import Lighting from "./components/Lighting";
import Ground from "./components/Ground";
import Controls from "./components/Controls";
import Heart from "./components/Heart";

function App() {
    return (
        <Canvas camera={{position: [5, 5, 0], near: 0.1, far: 100}}>
            <Lighting/>
            <Sphere/>
            <Box/>
            <Ground/>
            <Heart/>
            <Controls/>
        </Canvas>
    );
}

export default App;
