import React from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";

interface Props {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const FarmHouse: React.FC<Props> = (props) => {
return (
    <ObjectFromGLTF {...props}file={require('../objects/farmhouse_obj.gltf').default} scale={1/20}/>
)};

export default FarmHouse;
