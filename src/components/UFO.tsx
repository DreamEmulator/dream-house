import React, {useMemo, useRef} from 'react';
import * as THREE from 'three';
import {deg2Rad} from "../Helpers";
import {useFrame} from "react-three-fiber";

interface Props {
    showUFO: boolean
}

const UFO: React.FC<Props> = ({showUFO}) => {

    const width = 10 / 20;
    const height = 5 / 20;
    const depth = 3 / 20;
    const {edges, lineMaterial} = useMemo(() => {
        return {
            edges: new THREE.EdgesGeometry(new THREE.BoxBufferGeometry(width, height, depth)),
            lineMaterial: new THREE.LineBasicMaterial({color: 0xffffff})
        }
    }, []);

    const group = useRef<THREE.Group>();
    let y = -1.5;
    let rotateClockwise = true;
    useFrame(() => {
        if (group?.current) {
            // Rotation
            rotateClockwise ? group.current.rotation.y += 0.01 : group.current.rotation.y -= 0.01;
            // Elevation
            y = showUFO ? Math.min(group.current.position.y + 0.01, 1) : Math.max(group.current.position.y - 0.01, -1.5);
            group.current.position.y = y;
        }
    })

    return (
        <group ref={group} position={[5, y, -3]}>
            {/*Plus sign*/}
            <group position={[-0.5, 1, 0]} onPointerUp={() => rotateClockwise = true}>
                <mesh>
                    <meshPhongMaterial color='#6e638a'/>
                    <boxBufferGeometry args={[width, height, depth]}/>
                    <lineSegments args={[edges, lineMaterial]}/>
                </mesh>
                <mesh rotation={[0, 0, deg2Rad(90)]}>
                    <meshPhongMaterial color='#6e638a'/>
                    <boxBufferGeometry args={[width, height, depth]}/>
                    <lineSegments args={[edges, lineMaterial]}/>
                </mesh>
            </group>
            {/*Minus sign*/}
            <mesh onPointerUp={() => rotateClockwise = false} position={[0.5, 1, 0]} rotation={[0, 0, 0]}>
                <meshPhongMaterial color='#6e638a'/>
                <boxBufferGeometry args={[width, height, depth]}/>
                <lineSegments args={[edges, lineMaterial]}/>
            </mesh>
            <mesh position={[0, 0.5, 0]}>
                <meshPhongMaterial color='#f0f'/>
                <coneGeometry args={[1, 1, 32]}/>
            </mesh>
        </group>
    )
};

export default UFO;
