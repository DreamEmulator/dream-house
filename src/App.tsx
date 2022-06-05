import React, {useRef} from 'react';
import './App.css';
import {Canvas} from "react-three-fiber";
import Lighting from "./components/Lighting";
import Controls from "./components/Controls";
import GroundPlot from "./components/GroundPlot";
import {mapToPlotWithElevation} from "./Helpers";
import Bear from "./components/Bear";
import Lake from "./components/Lake";
import Trees from "./components/Trees";
import Field from "./components/Mountains";
import Sky from "./components/Sky";
import Bungalow from "./components/Bungalow";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import Buttons from "./components/Buttons";
import Bench from "./components/Bench";

function App() {
    //  One Unit in ThreeJS is 1 meter
    // The dimensions of the plot are approx:
    // x = -120 till 180
    // y = 0 till 280
    const controls = useRef<OrbitControls>();
    return (
        <>
            <Canvas camera={{
                position: [56.845490819514566, 14.144354975985182, -1.0556404126866994],
                near: 1,
                far: 15_000
            }}>
                <Lighting/>
                <Controls controls={controls}/>
                <Bench rotate={5} scale={2} position={mapToPlotWithElevation({x: 0, y: 100, heightInMeters: 8,})}/>
                <Bungalow position={mapToPlotWithElevation({x: 0, y: 155, heightInMeters: 2})} rotation={230}/>
                <Bear position={mapToPlotWithElevation({x: 8.3 * 20, heightInMeters: 1, y: 3 * 20})}/>
                <Lake position={mapToPlotWithElevation({x: -15, y: 130, heightInMeters: 5,})} radius={10}/>
                <Sky/>
                <Trees/>
                <GroundPlot/>
                <Field/>
            </Canvas>
            <Buttons controls={controls}/>
            <div id='explainer'>
                <p>Rotate = <span>👆</span></p>
                <p>Pan = <span>✌️</span>️</p>
                <p>Zoom = <span>🤏</span>️</p>
            </div>
        </>
    );
}

export default App;
