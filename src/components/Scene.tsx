import React from 'react';
import Lights from "./Lights";
import Terrain from "./Terrain";

interface Props {
}

const Scene: React.FC<Props> = ({}) => {
    return (
        <>
            <Lights/>
            <Terrain/>
        </>
    )
};

export default Scene;
