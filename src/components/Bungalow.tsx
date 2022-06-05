import React, {Suspense} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {rotate} from "../Helpers";

interface Props {
    position: [number, number, number]
    rotation: number;
}

const Bungalow: React.FC<Props> = ({position = [0,0,0], rotation= 90}) => {
return (
    <Suspense fallback={null}>
        <ObjectFromGLTF file={require('../objects/nice_bungalow.glb').default} position={position}
                        scale={2} rotation={rotate(rotation)}/>
    </Suspense>
)};

export default Bungalow;
