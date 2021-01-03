import React, {Suspense} from 'react';
import './App.css';
import {Canvas} from "react-three-fiber";
import Lighting from "./components/Lighting";
import Controls from "./components/Controls";
import GroundPlot from "./components/GroundPlot";
import {mapToPlot} from "./Helpers";
import Bear from "./components/Bear";
import Lake from "./components/Lake";
import Tree from "./components/Tree";
import FarmHouse from "./components/FarmHouse";
import WorldPlane from "./components/WorldPlane";

function App() {
    return (
        <>
            <Canvas camera={{
                position: [0, 150, 100],
                near: 0.1,
                far: 500
            }}>
                <Lighting/>
                <Lake position={mapToPlot(-3, 8)}/>
                <WorldPlane/>
                <Suspense fallback={null}>
                    <Tree position={mapToPlot(-4.75, 6)}/>
                    <Tree position={mapToPlot(-4.75, 10)}/>
                    <Tree position={mapToPlot(-5.5, 8)}/>
                    <Tree position={mapToPlot(8.5, 7)}/>
                    <Tree position={mapToPlot(6, 7)}/>
                    <Tree position={mapToPlot(9, 3)}/>
                </Suspense>
                <Suspense fallback={null}>
                    <FarmHouse position={mapToPlot(8, 5)} rotation={[0, 90, 0]}/>
                    <Bear position={mapToPlot(8, 3)} scale={0.2}/>
                </Suspense>
                <GroundPlot/>
                <Controls/>
            </Canvas>
            <div id='explainer'>
                <p>Rotate = <span>👆</span></p>
                <p>Pan = <span>✌️</span>️</p>
                <p>Zoom = <span>🤏</span>️</p>
            </div>
        </>
    );
}

export default App;
