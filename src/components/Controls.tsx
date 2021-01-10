import React, {useEffect, useRef} from "react";
import {extend, useFrame, useThree} from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Vector3} from "three";
import {deg2Rad} from "../Helpers";

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
        // console.log(camera.position);
    });

    useEffect(()=>{
        if(controls.current){
            controls.current.minDistance = 2;
            controls.current.maxDistance = 100;
            controls.current.maxPolarAngle = deg2Rad(88);
        }
    },[controls]);

    // @ts-ignore
    return <orbitControls ref={controls} target={[60, 0,-100]} args={[camera, domElement]} maxZoom={1}/>
};

export default Controls;
