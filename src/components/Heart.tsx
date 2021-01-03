import React, {useMemo, useRef, useState} from 'react';
import * as THREE from 'three';
import {useFrame} from "react-three-fiber";

interface Props {
    position?: [number, number, number]
}

const Heart: React.FC<Props> = ({position = [0, 0, 0]}) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<THREE.Mesh>();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        if (mesh?.current?.rotation) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    })
    useFrame(() => {
        if (mesh?.current?.rotation) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    });
    const shape = useMemo(() => {
        const x = 0, y = 0;
        const shape = new THREE.Shape()
        // From http://blog.burlock.org/html5/130-paths
        shape.moveTo(x + 0.25, y + 0.25)
            .bezierCurveTo(x + 0.25, y + 0.25, x + 0.20, y, x, y)
            .bezierCurveTo(x - 0.30, y, x - 0.30, y + 0.35, x - 0.30, y + 0.35)
            .bezierCurveTo(x - 0.30, y + 0.55, x - 0.10, y + 0.77, x + 0.25, y + 0.95)
            .bezierCurveTo(x + 0.60, y + 0.77, x + 0.80, y + 0.55, x + 0.80, y + 0.35)
            .bezierCurveTo(x + 0.80, y + 0.35, x + 0.80, y, x + 0.50, y)
            .bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);
        return shape;
    }, [])

    return (
        <mesh ref={mesh} rotation={[0, 0, 0]} position={position}>
            <shapeGeometry args={[shape]}/>
            <meshBasicMaterial color={hovered ? 'hotpink' : 'orange'} side={THREE.DoubleSide}/>
        </mesh>
    )
};

export default Heart;
