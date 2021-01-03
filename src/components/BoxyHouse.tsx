import React from 'react';
import * as THREE from 'three';

interface Props {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
    size: {width: number, height: number, depth: number}
}

const BoxyHouse: React.FC<Props> = ({position = [0, 0, 0], rotation = [0, 0, 0], scale = 1}, size) => {
    return (
        <mesh position={position}
              scale={[scale, scale, scale]}
              rotation={rotation}
              geometry={new THREE.BoxBufferGeometry(size.width, size.height, size.depth)}
              material={new THREE.MeshBasicMaterial({color: new THREE.Color('indianred'), transparent: true})}/>
    )
};

export default BoxyHouse;
