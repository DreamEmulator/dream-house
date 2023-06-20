import React, {Suspense} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {deg2Rad} from "../Helpers";

interface Props {
    position: [number, number, number];
    scale?: number;
    rotation?: number;
}

const GeoDome: React.FC<Props> = ({position, scale = 1, rotation = 0}) => {
    return (
        <Suspense fallback={null}>
            <ObjectFromGLTF scale={scale}
                            position={position}
                            rotation={[0, deg2Rad(rotation), 0]}
                            file={require('../objects/geo_dome.glb').default}/>
        </Suspense>
    )
};

export default GeoDome;
