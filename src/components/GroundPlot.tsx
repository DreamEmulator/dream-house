import React, {useMemo} from 'react';
import * as THREE from "three";
import {Shape, ShapeGeometry} from "three";

interface Props {
}

const GroundPlot: React.FC<Props> = ({}) => {

    const {edges, lineMaterial} = useMemo(() => {

        const medzePts = [];

        // This shape draws the Medze plot of land using the left most side closest to the road as 0,0
        medzePts.push(new THREE.Vector2(0, 0));

        // Bottom line at the road
        medzePts.push(new THREE.Vector2(9.8*20, 2.05*20));

        // Up on the right side
        medzePts.push(new THREE.Vector2(8.9*20, 7.2*20));

        // Middle point up slant
        medzePts.push(new THREE.Vector2(6.05*20, 7.05*20));
        // Middle point up point
        medzePts.push(new THREE.Vector2(3.55*20, 9*20));
        // Middle point back point
        medzePts.push(new THREE.Vector2(2.975*20, 7.1*20));

        // Big Left block up to top left point
        medzePts.push(new THREE.Vector2(-5.625*20, 13.2*20));
        // Big left block back down
        medzePts.push(new THREE.Vector2(-6.05*20, 4.3*20));
        // Big left block back into the middle
        medzePts.push(new THREE.Vector2(0*20, 4.8*20));

        medzePts.push(new THREE.Vector2(0*20, 0*20));

        // for (let i = 0; i < medzePts.length; i++) medzePts[i].multiplyScalar(20); // 1 box in the land_map_grid is 20m


        const geometry = new ShapeGeometry(new Shape(medzePts));
        return {
            edges: new THREE.EdgesGeometry(geometry),
            lineMaterial: new THREE.LineBasicMaterial({color: 0xffffff})
        }
    }, []);
    return (
        <mesh rotation={[-(Math.PI / 2), 0, 0]} position={[0, 1, 0]}>
            <lineSegments args={[edges, lineMaterial]}/>
        </mesh>
    )
};

export default GroundPlot;
