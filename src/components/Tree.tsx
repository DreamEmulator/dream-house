import React, {useEffect, useRef} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {useFrame} from "react-three-fiber";
import {Group} from "three";

interface Props {
    position: [number, number, number];
}

const Tree: React.FC<Props> = ({position}) => {
    // Trees are approx 4 meters high when scale = 0.15
    const minScale = 0.15;
    const maxScale = 1;
    const growSpeed = 0.0005;

    const group = useRef<Group>();
    let growTree = useRef(false);
    let scale = useRef(minScale);

    useEffect(() => {
        setTimeout(() => growTree.current = true, Math.random() * 1000_000)
    }, []);

    useFrame(() => {
        if (group?.current) {
            // Grow tree
            if(group.current?.scale.x < minScale || group.current?.scale.x > maxScale) growTree.current = !growTree.current;
            scale.current = growTree.current ? Math.min(group.current.scale.x + growSpeed, maxScale + 0.1) : Math.max(group.current.scale.x - growSpeed, minScale - 0.1);
            group.current.scale.set(scale.current, scale.current, scale.current);
        }
    });
    return (
        <group ref={group} onPointerUp={() => {
            growTree.current = !growTree.current
        }} scale={[scale.current, scale.current, scale.current]} position={position} rotation={[0, (Math.random() - 0.5) * 100, 0]}>
            <ObjectFromGLTF file={require('../objects/lowpoly_tree.gltf').default}/>
        </group>
    )
};

export default Tree;
