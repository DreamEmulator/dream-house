import React, {Suspense, useRef} from 'react';
import {Geometry, Mesh} from "three";
import ObjectFromGLTF from "../objects/ObjectFromGLTF";

interface Props {
    position: [number, number, number];
    scale?: number;
}

const Bench: React.FC<Props> = ({position, scale = 1}) => {
    const bench = useRef<Mesh<Geometry>>();

    return (
        <Suspense fallback={null}>
            <mesh ref={bench} position={position}>
                <ObjectFromGLTF rotation={[0,90,0]} scale={scale} file={require('../objects/bench.glb').default}/>
            </mesh>
        </Suspense>
    )
};

export default Bench;
