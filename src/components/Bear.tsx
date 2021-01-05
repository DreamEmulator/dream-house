import React, {useState} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {Vector3} from "three";
import {useThree} from "react-three-fiber";
import UFO from "./UFO";

interface Props {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

export const existentialBearPerspective: [number, number, number] = [8.400934909715168, 0.13034729878130913, -2.8635745868792397]

const Bear: React.FC<Props> = ({scale = 0.002, position = [0, 0, 0], rotation = [0, 0, 0]}) => {
    // At scale 0.002 the bear is approx 1.90m tall

    const {camera} = useThree();
    const lookAtPoint = (point: Vector3) => {
        camera.position.set(...existentialBearPerspective)
    }
    const [showUFO, setShowUFO] = useState(false);
    return (
        <>
            <group onPointerUp={event => {
                lookAtPoint && lookAtPoint(event.point);
                setShowUFO(!showUFO);
            }}>

                <ObjectFromGLTF file={require('../objects/bear.gltf').default} scale={scale} position={position}
                                rotation={rotation}/>
            </group>
            <UFO showUFO={showUFO}/>
        </>
    )
};

export default Bear;
