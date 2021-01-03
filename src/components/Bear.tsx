import React from 'react';
import ObjectFromFile from "./ObjectFromFile";

interface Props {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const Bear: React.FC<Props> = (props) => {
return (
    <ObjectFromFile {...props} file={require('../objects/bear.obj').default}/>
)};

export default Bear;
