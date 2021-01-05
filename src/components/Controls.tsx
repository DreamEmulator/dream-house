import React, {useEffect, useRef} from "react";
import {extend, useFrame, useThree} from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Vector3} from "three";

extend({OrbitControls});

interface Props {
}

const Controls: React.FC<Props> = ({}) => {
    const {
        camera,
        gl: {domElement},
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef<OrbitControls>();
    useFrame((state) => {
        controls?.current?.update()

    });

    // @ts-ignore
    return <orbitControls ref={controls} target={[3, 0,-5]} args={[camera, domElement]} maxZoom={1}/>
};

export default Controls;
