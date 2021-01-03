import React, {useMemo, useState} from 'react';
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {mapToPlot} from "../Helpers";

interface Props {
    file: string;
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const ObjectFromFile: React.FC<Props> = ({file, position= [0,0,0], rotation= [0,0,0], scale = 1}) => {
    const [object, setObject] = useState(null);
    const onload = (object: any) => setObject(object);
    const onProgress = (progressEvent: ProgressEvent) => console.log(`Loading ${Math.floor(progressEvent.loaded / progressEvent.total * 100)}%`);
    const onError = () => console.log('Error!');
    useMemo(() => new OBJLoader().load(file, onload, (progressEvent) => onProgress(progressEvent), onError)
        , [file])
    return (
        <mesh rotation={rotation} position={position} scale={[scale, scale, scale]}>
            {object && <primitive attach="map" object={object}/>}
            <meshBasicMaterial color='white'/>
        </mesh>
    )
};

export default ObjectFromFile;


