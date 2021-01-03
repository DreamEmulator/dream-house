import React, {useRef} from 'react';
import {useFrame, useThree} from "react-three-fiber";

interface Props {
}

const Lighting: React.FC<Props> = ({}) => {
    const pointLight = useRef<THREE.PointLight>();

    const {camera} = useThree();

    useFrame(() => {
        if (pointLight.current?.position) {
            pointLight.current.position.x += 1;
            pointLight.current.position.y += 1;
            pointLight.current.position.z += 1;
        }
        // console.log('camera.rotation',camera.rotation);
        // console.log('camera.position',camera.position);
        // console.log('camera',camera);
    });
    return (
        <pointLight ref={pointLight}/>
    )
};

export default Lighting;
