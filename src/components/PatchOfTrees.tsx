import React, {FC, useEffect, useState} from 'react';
import ObjectFromGLTF from "./ObjectFromGLTF";
import {mapToPlot} from "../Helpers";

interface Props {
    trees?: number;
    position?: [number, number, number]
}

const PatchOfTrees: React.FC<Props> = ({trees = 10, position = [0, 0, 0]}) => {
    return (
        <mesh position={position}>
            <ObjectFromGLTF file={require('../objects/lowpoly_tree.gltf').default} scale={0.8} position={mapToPlot(3,2)}/>
            <ObjectFromGLTF file={require('../objects/lowpoly_tree.gltf').default} scale={1.2} position={mapToPlot(2,5)}/>
        </mesh>
    )
};

export default PatchOfTrees;
