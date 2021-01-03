import React, {Suspense} from 'react';
import {mapToPlot} from "../Helpers";
import ObjectFromGLTF from "../objects/ObjectFromGLTF";

interface Props {
    position: [number, number, number]
}

const Tree: React.FC<Props> = ({position}) => {
return (
    <ObjectFromGLTF file={require('../objects/lowpoly_tree.gltf').default} scale={1.1} position={position}/>
)};

export default Tree;
