import React, {Suspense, useRef} from 'react';
import {Geometry, Mesh} from "three";
import {useFrame} from "react-three-fiber";
import {scale} from "../Helpers";
import ObjectFromGLTF from "../objects/ObjectFromGLTF";

interface Props {
    position: [number, number, number];
    scale?: number;
}

const Bench: React.FC<Props> = ({position, scale = 1}) => {
    const bench = useRef<Mesh<Geometry>>();

    return (
        <mesh ref={bench} position={position}>
            <ObjectFromGLTF scale={scale} file={require('../objects/bench.glb').default}/>
        </mesh>
    )
};

export default Bench;
