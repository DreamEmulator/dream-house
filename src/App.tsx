import React, {Suspense} from 'react';
import './App.css';
import {Canvas} from "react-three-fiber";
import Lighting from "./components/Lighting";
import Controls from "./components/Controls";
import GroundPlot from "./components/GroundPlot";
import {mapToPlot, mapToPlotWithElevation, metersToUnits} from "./Helpers";
import Bear from "./components/Bear";
import Lake from "./components/Lake";
import Tree from "./components/Tree";
import FarmHouse from "./components/FarmHouse";
import WorldPlane from "./components/WorldPlane";
import CubeOneM2 from "./components/CubeOneM2";

function App() {
    //  One Unit in ThreeJS is 20 meters
    // The dimensions of the plot are approx:
    // x = -6 till 9
    // y = 0 till 14
    return (
        <>
            <Canvas camera={{
                rotation: [0, 10, 100],
                position: [0, 1, 0],
                near: 0.1,
                far: 500
            }}>
                <Lighting/>
                <Lake position={mapToPlot(-2.5, 7.5)} radius={metersToUnits(30)}/>
                <CubeOneM2/>
                <WorldPlane/>
                <Suspense fallback={null}>
                    {/*<BoxyHouse position={mapToPlotWithElevation({x: 8.5, heightInMeters: 5, y: 4.5})}*/}
                    {/*           size={{width: metersToUnits(6), height: metersToUnits(5), depth: metersToUnits(12.5)}} rotation={[0,90,0]}/>*/}
                    <Tree position={mapToPlot(-4.75, 6)}/>
                    <Tree position={mapToPlot(-4.75, 10)}/>
                    <Tree position={mapToPlot(-5.5, 8)}/>
                    <Tree position={mapToPlot(8.5, 7)}/>
                    <Tree position={mapToPlot(6, 7)}/>
                    <Tree position={mapToPlot(9, 3)}/>
                </Suspense>
                <Suspense fallback={null}>
                    <FarmHouse position={mapToPlot(8, 5)} rotation={[0, 90, 0]}/>
                    <Bear position={mapToPlotWithElevation({x: 8.3, heightInMeters: 0.01, y: 3})}/>
                </Suspense>
                <GroundPlot/>
                <Controls/>
            </Canvas>
            <div id='scale'>
                <p><span>⬜️</span> = 1m3</p>
                <a target='_blank' href='map_with_grid_and_coordinates.png'>Map</a>
            </div>
            <div id='explainer'>
                <p>Rotate = <span>👆</span></p>
                <p>Pan = <span>✌️</span>️</p>
                <p>Zoom = <span>🤏</span>️</p>
            </div>
        </>
    );
}

export default App;
