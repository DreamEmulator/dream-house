import React, {Suspense} from 'react';
import './App.css';
import {Canvas} from "react-three-fiber";
import Lighting from "./components/Lighting";
import Controls from "./components/Controls";
import GroundPlot from "./components/GroundPlot";
import {mapToPlotWithElevation, rotate} from "./Helpers";
import Bear from "./components/Bear";
import Lake from "./components/Lake";
import CubeOneM2 from "./components/CubeOneM2";
import Trees from "./components/Trees";
import Waves from "./components/Waves";
import Mountains from "./components/Mountains";
import Sky from "./components/Sky";
import ObjectFromGLTF from "./objects/ObjectFromGLTF";

function App() {
    //  One Unit in ThreeJS is 1 meter
    // The dimensions of the plot are approx:
    // x = -6 till 9
    // y = 0 till 14

    return (
        <>
            <Canvas camera={{
                position: [56.845490819514566, 14.144354975985182, -1.0556404126866994],
                near: 1,
                far: 10000
            }}>
                <Lighting/>
                <Lake position={[-50, 2, -150]} radius={33}/>
                <Waves position={[-2.5 * 20, 2, -7.5 * 20]}/>
                <CubeOneM2/>
                <Trees/>
                <Suspense fallback={null}>

                    <Bear position={mapToPlotWithElevation({x: 8.3 * 20, heightInMeters: 1, y: 3 * 20})}/>
                    <ObjectFromGLTF file={require('./objects/nice_bungalow.glb').default} position={[160, 1, -100]}
                                    scale={2} rotation={rotate(180)}/>
                </Suspense>
                <Sky/>
                <GroundPlot/>
                <Mountains/>
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
