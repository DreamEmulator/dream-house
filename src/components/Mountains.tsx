import React, {Suspense} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {deg2Rad, mapToPlot, rotate, scale} from "../Helpers";

interface Props {
}

const Mountains: React.FC<Props> = ({}) => {
    return (
        <Suspense fallback={null}>
            <group position={[40,-3.5, -150]} rotation={rotate(-90)}>
                <ObjectFromGLTF file={require('../objects/mountains.glb').default}/>
            </group>
        </Suspense>
    )
};

export default Mountains;
