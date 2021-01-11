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
            <Cloud position={[30, 90, -150]}/>
            <Cloud position={[180, 80, -300]}/>
            <Cloud position={[-60, 75, -50]}/>
            <Cloud position={[-100, 100, -150]}/>
        </Suspense>
    )
};

export default Sky;
