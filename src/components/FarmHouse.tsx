import React from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";

interface Props {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const FarmHouse: React.FC<Props> = ({scale = 0.0125, position = [0, 0, 0], rotation = [0, 0, 0]}) => {
    // At scale = 0.0125 the farmhouse is approx 6 x 5 x 12.5 (w x h x d)
    return (
        <ObjectFromGLTF file={require('../objects/farmhouse_obj.gltf').default} scale={scale} position={position}
                        rotation={rotation}/>
    )
};

export default FarmHouse;
