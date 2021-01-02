import React, {useRef} from 'react';
import {useFrame} from "react-three-fiber";

interface Props {
}

const Lighting: React.FC<Props> = ({}) => {
    const pointLight = useRef<THREE.PointLight>();

    useFrame(() => {
        if (pointLight.current?.position) {
            pointLight.current.position.x += 1;
            pointLight.current.position.y += 1;
            pointLight.current.position.z += 1;
        }
    });
    return (
        <pointLight ref={pointLight} />
    )
};

export default Lighting;
