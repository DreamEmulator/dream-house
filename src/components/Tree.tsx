import React, {useEffect, useRef} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {useFrame} from "react-three-fiber";
import {Group} from "three";

interface Props {
    position: [number, number, number];
}

const Tree: React.FC<Props> = ({position}) => {
    // Trees are approx 4 meters high when scale = 0.15
    const initialScale = 0.16;
    const minScale = 0.15;
    const maxScale = 0.2;
    const growSpeed = 0.000125;

    const group = useRef<Group>();
    let startGrowing = useRef(false);
    let growTaller = useRef(true);
    let scale = useRef(initialScale);

    useEffect(() => {
        setTimeout(() => startGrowing.current = !startGrowing.current, Math.random() * 1000_0000);
    }, []);

    useFrame(() => {
        if (startGrowing.current && group.current) {
            // Grow tree
            if (group.current?.scale.x === minScale || group.current?.scale.x === maxScale) {
                growTaller.current = !growTaller.current;
                startGrowing.current = !startGrowing.current;
                setTimeout(() => startGrowing.current = !startGrowing.current, Math.random() * 1000_00);
            }
            scale.current = growTaller.current ? Math.min(group.current.scale.x + growSpeed, maxScale) : Math.max(group.current.scale.x - (growSpeed * 200), minScale);
            group.current.scale.set(scale.current, scale.current, scale.current);
        }
    });
    return (
        <group ref={group} onPointerUp={() => {
            growTaller.current = true;
            startGrowing.current = true;
        }} scale={[scale.current, scale.current, scale.current]} position={position}
               rotation={[0, (Math.random() - 0.5) * 100, 0]}>
            <ObjectFromGLTF file={require('../objects/lowpoly_tree.gltf').default}/>
        </group>
    )
};

export default Tree;
