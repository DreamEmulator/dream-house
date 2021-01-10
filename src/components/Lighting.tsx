import React, {useRef} from 'react';
import {useFrame, useThree} from "react-three-fiber";

interface Props {
}

const Lighting: React.FC<Props> = ({}) => {
    const pointLight_01 = useRef<THREE.PointLight>();
    const pointLight_02 = useRef<THREE.PointLight>();
    const pointLight_03 = useRef<THREE.PointLight>();

    const {camera} = useThree();

    useFrame(() => {
        if (pointLight_01.current?.position && pointLight_01.current.position.z < 200) {
            pointLight_01.current.position.x += 1;
            pointLight_01.current.position.y += 1;
            pointLight_01.current.position.z += 1;
        }
        if (pointLight_02.current?.position && pointLight_02.current.position.z > -200) {
            pointLight_02.current.position.x -= 1;
            pointLight_02.current.position.y += 1;
            pointLight_02.current.position.z -= 1;
        }
        if (pointLight_03.current?.position && pointLight_03.current.position.z > -600) {
            pointLight_03.current.position.x += 1;
            pointLight_03.current.position.y += 1;
            pointLight_03.current.position.z -= 1;
        }
    });
    useFrame(()=>{if(camera && pointLight_02.current){
        pointLight_02.current.position.set(camera.position.x, camera.position.y, camera.position.z);
    }})
    return (
        <group>
            <pointLight ref={pointLight_01} intensity={0.95}/>
            <pointLight ref={pointLight_02} intensity={0.15}/>
            <pointLight ref={pointLight_03} intensity={0.7}/>
        </group>
    )
};

export default Lighting;
