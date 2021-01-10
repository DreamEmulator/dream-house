import React, {Suspense} from 'react';
import './App.css';
import {Canvas} from "react-three-fiber";
import Lighting from "./components/Lighting";
import Controls from "./components/Controls";
import GroundPlot from "./components/GroundPlot";
import {mapToPlot, mapToPlotWithElevation} from "./Helpers";
import Bear, {existentialBearPerspective} from "./components/Bear";
import Lake from "./components/Lake";
import FarmHouse from "./components/FarmHouse";
import CubeOneM2 from "./components/CubeOneM2";
import Trees from "./components/Trees";
import Waves from "./components/Waves";
import Mountains from "./components/Mountains";

function App() {
    //  One Unit in ThreeJS is 1 meter
    // The dimensions of the plot are approx:
    // x = -6 till 9
    // y = 0 till 14

    return (
        <>
            <Canvas camera={{
                position: existentialBearPerspective,
                near: 1,
                far: 10000
            }}>
                <Lighting/>
                <Lake position={[-50, 2, -150]} radius={33}/>
                <Waves position={[-2.5 * 20, 2, -7.5 * 20]}/>
                <CubeOneM2/>

                <Trees/>
                <Suspense fallback={null}>
                    <FarmHouse position={mapToPlot(8 * 20, 5 * 20)} rotation={[0, 90, 0]}/>
                    <Bear position={mapToPlotWithElevation({x: 8.3 * 20, heightInMeters: 1, y: 3 * 20})}/>
                </Suspense>
                <Mountains/>
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
