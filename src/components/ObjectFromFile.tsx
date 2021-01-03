import React, {useMemo} from 'react';
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

const ObjectFromFile: React.FC<Props> = ({file}) => {
    const onload = () => console.log('Loaded!');
    const onProgress = (progressEvent: ProgressEvent) => console.log(`Loading ${Math.floor(progressEvent.loaded / progressEvent.total * 100)}%`);
    const onError = () => console.log('Error!');
    const object = useMemo(() => new OBJLoader().load(file, onload, (progressEvent) => onProgress(progressEvent), onError)
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
