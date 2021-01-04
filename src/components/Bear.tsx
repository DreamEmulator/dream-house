import React from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";

interface Props {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const Bear: React.FC<Props> = ({scale = 0.002, position = [0, 0, 0], rotation = [0, 0, 0]}) => {
    // At scale 0.002 the bear is approx 1.90m tall
    return (
        <ObjectFromGLTF file={require('../objects/bear.gltf').default} scale={scale} position={position} rotation={rotation}/>
    )
};

export default Bear;
