import React from 'react';

interface Props {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
    size: { width: number, height: number, depth: number };
}

const BoxyHouse: React.FC<Props> = ({position = [0, 1 *20, 0], rotation = [0, 0, 0], scale = 1, size}) => {
    return (
        <mesh position={position} rotation={rotation} scale={[scale,scale,scale]}>
            <boxBufferGeometry args={[size.width, size.height, size.depth]}/>
        </mesh>
    )
};

export default BoxyHouse;
