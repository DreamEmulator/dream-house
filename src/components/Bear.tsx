import React from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";

interface Props {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const Bear: React.FC<Props> = (props) => {
return (
    <ObjectFromGLTF {...props} file={require('../objects/bear.gltf').default} scale={1/60}/>
)};

export default Bear;
