import React, {useMemo} from 'react';
import * as THREE from 'three';
import {metersToUnits} from "../Helpers";

interface Props {
    position : [number, number, number];
    radius?: number;
}

const Lake: React.FC<Props> = ({position, radius= metersToUnits(20)}) => {
    const circleRadius = radius;
    const circleShape = useMemo(() => new THREE.Shape()
        .moveTo(0, circleRadius)
        .quadraticCurveTo(circleRadius, circleRadius, circleRadius, 0)
        .quadraticCurveTo(circleRadius, -circleRadius, 0, -circleRadius)
        .quadraticCurveTo(-circleRadius, -circleRadius, -circleRadius, 0)
        .quadraticCurveTo(-circleRadius, circleRadius, 0, circleRadius),[]);
    return (
        <mesh rotation={[-(Math.PI / 2), 0, 0]} position={position}>
            <shapeGeometry args={[circleShape]}/>
            <meshPhongMaterial color='#1dbefb'/>
        </mesh>
    )
};

export default Lake;
