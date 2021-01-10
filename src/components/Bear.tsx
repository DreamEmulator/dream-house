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

export const existentialBearPerspective: [number, number, number] = [143.6827808262251,3.489949670250107,-45.364732594329794];

const Bear: React.FC<Props> = ({scale = 0.002 * 20, position = [0, 0, 0], rotation = [0, 0, 0]}) => {
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
            }}>
                <ObjectFromGLTF file={require('../objects/bear.gltf').default} scale={scale} position={position}
                                rotation={rotation}/>
            </group>
        </>
    )
};

export default Bear;
