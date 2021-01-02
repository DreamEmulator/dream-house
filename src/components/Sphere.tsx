import React, {useEffect, useRef} from 'react';
import {useFrame, useThree} from "react-three-fiber";

interface Props {
}

const Sphere: React.FC<Props> = ({}) => {
    const {gl} = useThree();
    useEffect(() => gl.setPixelRatio(window.devicePixelRatio || 2), [])
    const mesh = useRef<THREE.Mesh>(null);
    useFrame(() => {
        if (mesh?.current?.rotation) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    })
    return (
        <>
            <mesh ref={mesh} scale={[1, 1, 1]} rotation={[2, 0, 0]} position={[1, 1, 1]}>
                <sphereBufferGeometry/>
                <meshStandardMaterial color="hotpink"/>
            </mesh>
        </>
    )
};

export default Sphere;
