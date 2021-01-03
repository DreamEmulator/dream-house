import React from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";

interface Props {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const BoxyHouse: React.FC<Props> = (props) => {
return (
    <ObjectFromGLTF {...props} file={require('../objects/3d-model.gltf').default}/>
)};

export default BoxyHouse;
