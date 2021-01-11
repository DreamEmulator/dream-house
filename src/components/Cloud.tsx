import React, {Suspense, useRef} from 'react';
import {Geometry, Mesh} from "three";
import {useFrame} from "react-three-fiber";
import {scale} from "../Helpers";
import ObjectFromGLTF from "../objects/ObjectFromGLTF";

interface Props {
    position: [number, number, number]
}

const Cloud: React.FC<Props> = ({position}) => {
    const cloud = useRef<Mesh<Geometry>>();
    const direction = useRef<boolean>(true);
    useFrame(() => {
        if (cloud.current && position[0] ) {
            if (cloud.current.position.x > position[0] + 50 || cloud.current.position.x < position[0] - 50) direction.current = !direction.current;
            if (direction.current) cloud.current.position.x += 0.01;
            else cloud.current.position.x -= 0.01;
        }
    });

    return (
        <mesh ref={cloud} position={position} scale={scale(4)}>
            <ObjectFromGLTF file={require('../objects/cloud.glb').default}/>
        </mesh>
    )
};

export default Cloud;
