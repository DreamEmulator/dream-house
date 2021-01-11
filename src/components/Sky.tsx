import React, {Suspense, useRef} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {Geometry, Mesh} from "three";
import {scale} from "../Helpers";
import {useFrame} from "react-three-fiber";
import Cloud from "./Cloud";

interface Props {
}

const Sky: React.FC<Props> = ({}) => {
    return (
        <Suspense fallback={null}>
            <Cloud scale={3} position={[30, 90, -150]}/>
            <Cloud position={[180, 80, -300]}/>
            <Cloud scale={3.5} position={[-60, 75, -50]}/>
            <Cloud scale={2} position={[-100, 100, -150]}/>
        </Suspense>
    )
};

export default Sky;
