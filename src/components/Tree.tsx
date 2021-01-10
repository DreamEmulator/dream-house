import React, {useRef} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {useFrame} from "react-three-fiber";
import {Group} from "three";
import {deg2Rad} from "../Helpers";

interface Props {
    position: [number, number, number];
}

const Tree: React.FC<Props> = ({position}) => {
//    Trees are approx 4 meters high when scale = 0.15
    const group = useRef<Group>();
    let growTree = false;
    let scale = 0.15;
    useFrame(() => {
        if (group?.current) {
            // Grow tree
            scale = growTree ? Math.min(group.current.scale.x + (0.0001*20), (0.2*20)) : Math.max(group.current.scale.x - (0.001*20), (0.0075*20));
            group.current.scale.set(scale,scale,scale);
        }
    });
    return (
        <group ref={group} onPointerUp={() => {growTree = !growTree}} scale={[scale, scale, scale]} position={position} rotation={[0,(Math.random() - 0.5) * 100,0]}>
            <ObjectFromGLTF file={require('../objects/lowpoly_tree.gltf').default}/>
        </group>
    )
};

export default Tree;
