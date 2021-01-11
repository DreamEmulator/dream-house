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
            <Cloud scale={8} position={[30, 90, -125]}/>
            <Cloud scale={20} position={[180, 100, -250]}/>
            <Cloud scale={14} position={[-60, 75, -50]}/>
            <Cloud scale={10} position={[-100, 150, -150]}/>
        </Suspense>
    )
};

export default Sky;
