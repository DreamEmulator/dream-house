import React, {useMemo} from 'react';
import * as THREE from "three";
import {metersToUnits} from "../Helpers";
import {Colors} from "../types/Colors";

interface Props {
}

const WorldPlane: React.FC<Props> = ({}) => {
    const circleRadius = metersToUnits(200);
    const circleShape = useMemo(() => new THREE.Shape()
        .moveTo(0, circleRadius)
        .quadraticCurveTo(circleRadius, circleRadius, circleRadius, 0)
        .quadraticCurveTo(circleRadius, -circleRadius, 0, -circleRadius)
        .quadraticCurveTo(-circleRadius, -circleRadius, -circleRadius, 0)
        .quadraticCurveTo(-circleRadius, circleRadius, 0, circleRadius),[]);
    return (
        <mesh rotation={[-(Math.PI / 2), 0, 0]} position={[2, 0, -7]}>
            <shapeGeometry args={[circleShape]}/>
            <meshPhongMaterial color={Colors.green} side={THREE.DoubleSide}/>
        </mesh>
    )};

export default WorldPlane;
