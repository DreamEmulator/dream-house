import React, {useEffect, useRef} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {useFrame} from "react-three-fiber";
import {Group} from "three";

interface Props {
    position: [number, number, number];
}

const Tree: React.FC<Props> = ({position}) => {
//    Trees are approx 4 meters high when scale = 0.15
    const group = useRef<Group>();
    let growTree = useRef(false);
    let scale = 0.15;

    useEffect(() => {
        setTimeout(() => growTree.current = true, Math.random() * 1000_00)
    }, []);

    useFrame(() => {
        if (group?.current) {
            // Grow tree
            scale = growTree.current ? Math.min(group.current.scale.x + 0.0001, 2) : Math.max(group.current.scale.x - 0.0001, 0.15);
            group.current.scale.set(scale, scale, scale);
        }
    });
    return (
        <group ref={group} onPointerUp={() => {
            growTree.current = !growTree.current
        }} scale={[scale, scale, scale]} position={position} rotation={[0, (Math.random() - 0.5) * 100, 0]}>
            <ObjectFromGLTF file={require('../objects/lowpoly_tree.gltf').default}/>
        </group>
    )
};

export default Tree;
