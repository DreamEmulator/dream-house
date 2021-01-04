import React, {useRef} from 'react';
import ObjectFromGLTF from "../objects/ObjectFromGLTF";
import {useFrame} from "react-three-fiber";
import {Group} from "three";

interface Props {
    position: [number, number, number]
}

const Tree: React.FC<Props> = ({position}) => {
//    Trees are approx 4 meters high when scale = 0.0075
    const group = useRef<Group>();
    let growTree = false;
    let scale = 0.0075;
    useFrame(() => {
        if (group?.current) {
            // Grow tree
            scale = growTree ? Math.min(group.current.scale.x + 0.0001, 0.2) : Math.max(group.current.scale.x - 0.001, 0.0075);
            group.current.scale.set(scale,scale,scale);
        }
    });
    return (
        <group ref={group} onPointerUp={() => {growTree = !growTree;
            console.log('growing!');}} scale={[scale, scale, scale]} position={position}>
            <ObjectFromGLTF file={require('../objects/lowpoly_tree.gltf').default}/>
        </group>
    )
};

export default Tree;
