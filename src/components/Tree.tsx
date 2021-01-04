import React, {Suspense} from 'react';
import {mapToPlot} from "../Helpers";
import ObjectFromGLTF from "../objects/ObjectFromGLTF";

interface Props {
    position: [number, number, number]
}

const Tree: React.FC<Props> = ({position}) => {
//    Trees are approx 4 meters high when scale = 0.0075
return (
    <ObjectFromGLTF file={require('../objects/lowpoly_tree.gltf').default} scale={0.0075} position={position}/>
)};

export default Tree;
