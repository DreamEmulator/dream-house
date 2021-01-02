import React, {useMemo} from 'react';
import * as THREE from "three";

interface Props {
}

const GroundPlot: React.FC<Props> = ({}) => {
    const shape = useMemo(() => {

        const medzePts = [];

        // This shape draws the Medze plot of land using the left most side closest to the road as 0,0
        medzePts.push(new THREE.Vector2(0, 0));

        // Bottom line at the road
        medzePts.push(new THREE.Vector2(190, 0));

        // Up on the right side
        medzePts.push(new THREE.Vector2(190, 100));

        // Middle point up slant
        medzePts.push(new THREE.Vector2(145, 105));
        // Middle point up point
        medzePts.push(new THREE.Vector2(105, 140));
        // Middle point back point
        medzePts.push(new THREE.Vector2(80, 120));

        // Big Left block up to top left point
        medzePts.push(new THREE.Vector2(-80, 250));
        // Big left block back down
        medzePts.push(new THREE.Vector2(-110, 100));
        // Big left block back into the middle
        medzePts.push(new THREE.Vector2(10, 90));

        medzePts.push(new THREE.Vector2(0, 0));

        for (let i = 0; i < medzePts.length; i++) medzePts[i].multiplyScalar(0.05);

        const medzeShape = new THREE.Shape(medzePts);

        return medzeShape;
    }, [])
    return (
        <mesh rotation={[-(Math.PI / 2), 0, -THREE.MathUtils.degToRad(-90)]} position={[5, 0.01, 2]}>
            <shapeGeometry args={[shape]}/>
            <meshBasicMaterial color='blue' side={THREE.DoubleSide}/>
        </mesh>
    )
};

export default GroundPlot;
