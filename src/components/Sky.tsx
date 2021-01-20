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
            <Cloud scale={4} position={[30, 90, -225]}/>
            <Cloud scale={2.5} position={[180, 100, -285]}/>
            <Cloud scale={6} position={[-60, 75, -350]}/>
            <Cloud scale={5} position={[-100, 150, -150]}/>
        </Suspense>
    )
};

export default Sky;
