import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {Geometry, Mesh} from 'three';
import {useFrame} from "react-three-fiber";
import {metersToUnits} from "../Helpers";
import {Position} from "../types/defaults";

interface Props {
    position?: Position;
}

type WaveVector = { x: number, y: number, z: number, ang: number, amp: number, speed: number };

const Waves: React.FC<Props> = ({position = [0, 0, 0]}) => {
    // Setup the Scene
    const Colors = {
        red: 0xf25346,
        white: 0xd8d0d1,
        brown: 0x59332e,
        pink: 0xf5986E,
        brownDark: 0x23190f,
        blue: 0x68c3c0
    };

    const mesh = useRef<Mesh<Geometry>>();

    // create an array to store new data associated to each vertex
    const waves: WaveVector[] = [];

    useEffect(() => {
        if (mesh.current) {

            const geom = mesh.current.geometry;
            geom.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
            // important: by merging vertices we ensure the continuity of the waves
            geom.mergeVertices();

            // get the vertices
            const lengthVertices = geom.vertices.length;
            for (let i = 0; i < lengthVertices; i++) {
                // get each vertex
                const v = geom.vertices[i];

                // store some data associated to it
                waves.push({
                    y: v.y,
                    x: v.x,
                    z: v.z,
                    // a random angle
                    ang: Math.random() * Math.PI * 2,
                    // a random distance
                    amp: metersToUnits(1) + Math.random() * metersToUnits(3),
                    // a random speed between 0.016 and 0.048 radians / frame
                    speed: 0.016 + Math.random() * 0.032
                });
            }

        }

    }, [mesh]);

    useFrame(() => {
        // Move the waves

        // console.log(waves)
        if (mesh.current && waves) {
            const geom = mesh.current.geometry;
            const verts = geom.vertices;
            // get the vertices
            const lengthVertices = geom.vertices.length;
            if (verts.length) {
                for (let i = 0; i < lengthVertices; i++) {
                    const v = verts[i];
                    // console.log(v.x);
                    // get the data associated to it
                    const vprops = waves[i];

                    // update the position of the vertex
                    if (vprops) {
                        v.x = vprops.x + Math.cos(vprops.ang) * vprops.amp;
                        v.y = vprops.y + Math.sin(vprops.ang) * vprops.amp;
                        // increment the angle for the next frame
                        vprops.ang += vprops.speed;
                    }


                }
            }

            // Tell the renderer that the geometry of the sea has changed.
            // In fact, in order to maintain the best level of performance,
            // three.js caches the geometries and ignores any changes
            // unless we add this line
            mesh.current.geometry.verticesNeedUpdate = true;

            mesh.current.rotation.z += .005;
        }
    });
    return (
        <mesh ref={mesh} position={position} receiveShadow
              matrix={new THREE.Matrix4().makeRotationX(-Math.PI / 2)}>
            <meshPhongMaterial color={Colors.blue} transparent opacity={.8}/>
            <cylinderGeometry args={[2, 2, 2, 10, 10]}/>
        </mesh>
    )
};

export default Waves;
