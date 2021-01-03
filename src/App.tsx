import React, {Suspense} from 'react';
import './App.css';
import {Canvas} from "react-three-fiber";
import Lighting from "./components/Lighting";
import Controls from "./components/Controls";
import GroundPlot from "./components/GroundPlot";
import {mapToPlot, metersToUnits} from "./Helpers";
import Bear from "./components/Bear";
import Lake from "./components/Lake";
import Tree from "./components/Tree";
import FarmHouse from "./components/FarmHouse";
import WorldPlane from "./components/WorldPlane";
import BoxyHouse from "./components/BoxyHouse";
import CubeOneM2 from "./components/CubeOneM2";

function App() {
    //  One Unit in ThreeJS is 20 meters
    // The dimensions of the plot are approx:
    // x = -6 till 9
    // y = 0 till 14
    return (
        <>
            <Canvas camera={{
                position: [0, 4, 6],
                near: 0.1,
                far: 500
            }}>
                <Lighting/>
                <Lake position={mapToPlot(-2.5, 7)}/>
                <CubeOneM2 position={mapToPlot(8, 3)}/>
                {/*<BoxyHouse position={mapToPlot(8, 3)}*/}
                {/*           size={{width: metersToUnits(8), height: metersToUnits(6), depth: metersToUnits(12)}}/>*/}
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
                    <Bear position={mapToPlot(8 , 3)} scale={0.2}/>
                </Suspense>
                <GroundPlot/>
                <Controls/>
            </Canvas>
            <div id='explainer'>
                <p>Rotate = <span>👆</span></p>
                <p>Pan = <span>✌️</span>️</p>
                <p>Zoom = <span>🤏</span>️</p>
                <a target='_blank' href='map_with_grid_and_coordinates.png'>Map</a>
            </div>
        </>
    );
}

export default App;
