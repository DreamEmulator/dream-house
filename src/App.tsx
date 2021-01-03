import React from 'react';
import './App.css';
import {Canvas} from "react-three-fiber";
import Sphere from "./components/Sphere";
import Lighting from "./components/Lighting";
import Controls from "./components/Controls";
import GroundPlot from "./components/GroundPlot";
import {mapToPlot} from "./Helpers";

function App() {
    return (
        <Canvas camera={{
                position: [0,150, 100],
            near: 0.1,
            far: 500
        }}>
            <Lighting/>
            <Sphere/>
            <Sphere position={mapToPlot(9.8, 2.05)}/>
            <Sphere position={mapToPlot(8.9, 7.2)}/>
            <Sphere position={mapToPlot(6.05, 7.05)}/>
            <Sphere position={mapToPlot(3.55, 9)}/>
            <Sphere position={mapToPlot(2.975, 7.1)}/>
            <Sphere position={mapToPlot(-5.625, 13.2)}/>
            <Sphere position={mapToPlot(-6.05, 4.3)}/>
            <Sphere position={mapToPlot(0, 4.8)}/>
            <GroundPlot/>
            <Controls/>
        </Canvas>
    );
}

export default App;
