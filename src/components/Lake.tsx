import React, {useMemo} from 'react';
import * as THREE from 'three';

interface Props {
    position : [number, number, number];
}

const Lake: React.FC<Props> = ({position}) => {
    const circleRadius = 40;
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
