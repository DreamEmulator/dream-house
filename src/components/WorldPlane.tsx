import React, {useMemo} from 'react';
import * as THREE from "three";

interface Props {
}

const WorldPlane: React.FC<Props> = ({}) => {
    const circleRadius = 200;
    const circleShape = useMemo(() => new THREE.Shape()
        .moveTo(0, circleRadius)
        .quadraticCurveTo(circleRadius, circleRadius, circleRadius, 0)
        .quadraticCurveTo(circleRadius, -circleRadius, 0, -circleRadius)
        .quadraticCurveTo(-circleRadius, -circleRadius, -circleRadius, 0)
        .quadraticCurveTo(-circleRadius, circleRadius, 0, circleRadius),[]);
    return (
        <mesh rotation={[-(Math.PI / 2), 0, 0]} position={[40, -1, -150]}>
            <shapeGeometry args={[circleShape]}/>
            <meshPhongMaterial color='#75b527'/>
        </mesh>
    )};

export default WorldPlane;
