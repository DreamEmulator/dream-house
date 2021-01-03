import React from 'react';
import * as THREE from 'three';

interface Props {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
    size: [number, number, number];
}

const BoxyHouse: React.FC<Props> = ({position = [0, 1, 0], rotation = [0, 0, 0], scale = 1}, size) => {
    return (
        <mesh
              scale={[scale, scale, scale]}
              rotation={rotation}>
            <boxBufferGeometry args={size}/>
            <meshPhongMaterial color='hotpink' />
        </mesh>
    )
};

export default BoxyHouse;
