import React, {useMemo} from 'react';
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

const ObjectFromFile: React.FC<Props> = ({file}) => {
    const onload = () => console.log('Loaded!');
    const onProgress = () => console.log('Loaded!');
    const onError = () => console.log('Error!');
    const object = useMemo(() => new OBJLoader().load(file, onload, onProgress, onError)
        , [file])

    return null;
    return (
        <mesh>
            <planeBufferGeometry attach="geometry" args={[1, 1]}/>
            <meshLambertMaterial attach="material" transparent>
                <primitive attach="map" object={object}/>
            </meshLambertMaterial>
        </mesh>
    )
};

export default ObjectFromFile;

interface Props {
    file: string;
}
