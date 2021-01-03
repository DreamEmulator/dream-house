import React from 'react';
import {metersToUnits} from "../Helpers";

interface Props {
    position?: [number, number, number]
}

const CubeOneM2: React.FC<Props> = ({position = [0, 0.0275, 0]}) => {
    return (
        <mesh position={position}>
            <boxBufferGeometry args={[metersToUnits(1), metersToUnits(1), metersToUnits(1)]}/>
        </mesh>
    )
};

export default CubeOneM2;
