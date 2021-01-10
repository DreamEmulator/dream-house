import React, {Suspense, useMemo, useRef} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {Geometry, Mesh} from "three";
import {scale} from "../Helpers";
import {useFrame} from "react-three-fiber";

interface Props {
}

const Sky: React.FC<Props> = ({}) => {
    const cloud_01 = useRef<Mesh<Geometry>>();
    const cloud_02 = useRef<Mesh<Geometry>>();
    const cloud_03 = useRef<Mesh<Geometry>>();

    // Initial positions

        const int_c01 = 30;
        const int_c02 = 80;
        const int_c03 = -20;


    const direction_c01 = useRef<boolean>(true);
    const direction_c02 = useRef<boolean>(true);
    const direction_c03 = useRef<boolean>(false);

    useFrame(() => {
        if (cloud_01.current && int_c01 && cloud_02.current && int_c02 && cloud_03.current && int_c03) {
            if (cloud_01.current.position.x > int_c01 + 50 || cloud_01.current.position.x < int_c01 - 50) direction_c01.current = !direction_c01.current;
            if (direction_c01.current) cloud_01.current.position.x += 0.01;
            else cloud_01.current.position.x -= 0.01;

            // Move cloud 2
            if (cloud_02.current.position.x > int_c02 + 50 || cloud_02.current.position.x < int_c02 - 50) direction_c02.current = !direction_c02.current;
            if (direction_c02.current) cloud_02.current.position.x += 0.01;
            else cloud_02.current.position.x -= 0.01;

            // Move cloud 3
            if (cloud_03.current.position.x > int_c03 + 50 || cloud_03.current.position.x < int_c03 - 50) direction_c03.current = !direction_c03.current;
            if (direction_c03.current) cloud_03.current.position.x += 0.01;
            else cloud_03.current.position.x -= 0.01;
        }
    });

    return (
        <Suspense fallback={null}>
            <mesh ref={cloud_01} position={[int_c01, 30, -40]} scale={scale(4)}>
                <ObjectFromGLTF file={require('../objects/cloud.glb').default}/>
            </mesh>
            <mesh ref={cloud_02} position={[int_c02, 80, -300]} scale={scale(4)}>
                <ObjectFromGLTF file={require('../objects/cloud.glb').default}/>
            </mesh>
            <mesh ref={cloud_03} position={[int_c03, 15, -100]} scale={scale(4)}>
                <ObjectFromGLTF file={require('../objects/cloud.glb').default}/>
            </mesh>
        </Suspense>
    )
};

export default Sky;
