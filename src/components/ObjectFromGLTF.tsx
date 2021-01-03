import React, {useMemo} from 'react';
import {useLoader} from "react-three-fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

interface Props {
    file: string;
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const ObjectFromGLTF: React.FC<Props> = ({file, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1}) => {
    const gltf = useLoader(GLTFLoader, file);
    const scene = useMemo(() => gltf.scene.clone(), [gltf]);
    return (
        <mesh rotation={rotation} position={position} scale={[scale, scale, scale]}>
            <primitive object={scene}/>
        </mesh>
    )
};

export default ObjectFromGLTF;
