import React, {Suspense} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {rotate} from "../Helpers";

interface Props {
    position: [number, number, number]
}

const Bungalow: React.FC<Props> = ({position}) => {
return (
    <Suspense fallback={null}>
        <ObjectFromGLTF file={require('../objects/nice_bungalow.glb').default} position={position}
                        scale={2} rotation={rotate(180)}/>
    </Suspense>
)};

export default Bungalow;
