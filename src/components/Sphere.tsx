import React, {useRef, useState} from 'react';
import {useFrame} from "react-three-fiber";
import * as THREE from 'three';

interface Props {
    position?: [number, number, number]
}

const Sphere: React.FC<Props> = ({position = [0, 0, 0]}) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<THREE.Mesh>()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        if (mesh?.current?.rotation) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    })

    return (
        <>
            <mesh ref={mesh}
                  position={position}
                  scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
                  onClick={(e) => setActive(!active)}
                  onPointerOver={(e) => setHover(true)}
                  onPointerOut={(e) => setHover(false)}>
                <sphereBufferGeometry/>
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
            </mesh>
        </>
    )
};

export default Sphere;
