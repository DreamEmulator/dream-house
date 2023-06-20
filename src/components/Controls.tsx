import React, {useEffect} from "react";
import {extend, useFrame, useThree} from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {deg2Rad} from "../Helpers";

extend({OrbitControls});

interface Props {
    controls: React.MutableRefObject<OrbitControls | undefined>
}

const Controls: React.FC<Props> = ({controls}) => {
    const {
        camera,
        gl: {domElement},
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame


    useFrame((state) => {
        controls?.current?.update()
        // console.log(camera.position);
    });

    useEffect(() => {
        if (controls.current) {
            controls.current.minDistance = 2;
            controls.current.maxDistance = 100;
            controls.current.maxPolarAngle = deg2Rad(88);
            controls.current.autoRotate = true
            controls.current.autoRotateSpeed = .05
        }
    }, [controls]);

    // @ts-ignore
    return <orbitControls ref={controls} target={[60, 0, -100]} args={[camera, domElement]} maxZoom={2}/>
};

export default Controls;
