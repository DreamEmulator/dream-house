import React, {Suspense} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {rotate} from "../Helpers";

interface Props {
}

const Field: React.FC<Props> = ({}) => {
    return (
        <Suspense fallback={null}>
            <group position={[40, -3.5, -150]} rotation={rotate(-90)}>
                <ObjectFromGLTF file={require('../objects/mountains.glb').default}/>
            </group>
        </Suspense>
    )
};

export default Field;
