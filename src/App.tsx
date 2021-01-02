import React from 'react';
import './App.css';
import {Canvas} from "react-three-fiber";
import Sphere from "./components/Sphere";
import Box from "./components/Box";
import Lighting from "./components/Lighting";
import Ground from "./components/Ground";
import Controls from "./components/Controls";
import Heart from "./components/Heart";
import GroundPlot from "./components/GroundPlot";

function App() {
    return (
        <Canvas camera={{position: [5, 5, 0], near: 0.1, far: 1000}}>
            <Lighting/>
            <Sphere/>
            <Box/>
            <Heart position={[-10, 1, -10]}/>
            <Heart position={[10, 1, 10]}/>
            <GroundPlot/>
            {/*<Ground/>*/}
            <Controls/>
        </Canvas>
    );
}

export default App;
