import React from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {Euler, Vector3} from "three";
import {useThree} from "react-three-fiber";
import {deg2Rad} from "../Helpers";

interface Props {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const Bear: React.FC<Props> = ({scale = 0.002, position = [0, 0, 0], rotation = [0, 0, 0]}) => {
    // At scale 0.002 the bear is approx 1.90m tall

    const {camera} = useThree();
    const lookAtPoint = (point: Vector3) => {
        camera.setRotationFromEuler(new Euler(-2.769392165351228, 1.173999909974832, 2.7959799734612805))
        camera.position.set(8.557029058379754 , 0.218699189592502, -3.3198212678698145 )
    }
    return (
        <group onClick={event => {
            lookAtPoint && lookAtPoint(event.point)
        }}>

            <ObjectFromGLTF file={require('../objects/bear.gltf').default} scale={scale} position={position}
                            rotation={rotation}/>
        </group>
    )
};

export default Bear;
