import React, {useEffect} from 'react';
import {OrbitControls} from "@react-three/drei";

interface Props {
    controls: React.MutableRefObject<OrbitControls | undefined>
}

const Buttons: React.FC<Props> = ({controls}) => {

    const autoRotate = () => {
        if (controls.current) {
            controls.current.autoRotate = !controls.current.autoRotate;
            controls.current.autoRotateSpeed = 0.5;
        }
    }

    useEffect(() => {
        autoRotate()
    }, [])

    return (
        <div className='autoRotate' onPointerUp={autoRotate}>🔁️</div>
    )
};

export default Buttons;
