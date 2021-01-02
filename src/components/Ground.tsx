import React from 'react';

interface Props {
}

const Ground: React.FC<Props> = ({}) => {

    return (
        <mesh  rotation={[ -Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[25, 25, 75, 75]} />
            <meshPhongMaterial
                attach="material"
                color={"lawngreen"}
                shininess={3}
                flatShading
            />
        </mesh>
    )
};

export default Ground;
