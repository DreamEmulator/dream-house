import React, {useRef} from "react";
import {extend, useFrame, useThree} from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

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
        // console.log(camera);
    });
    // @ts-ignore
    return <orbitControls ref={controls} args={[camera, domElement]}/>
};

export default Controls;
