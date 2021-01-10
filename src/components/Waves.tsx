import React, {useEffect, useMemo, useRef} from 'react';
import * as THREE from 'three';
import {DoubleSide, Geometry, Mesh} from 'three';
import {useFrame} from "react-three-fiber";
import {metersToUnits} from "../Helpers";
import {Position} from "../types/defaults";
import {Colors} from "../types/Colors";

interface Props {
    position?: Position;
}

type WaveVector = { x: number, y: number, z: number, ang: number, amp: number, speed: number };

const Waves: React.FC<Props> = ({position = [0, 0, 0]}) => {

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
                    amp: metersToUnits(1) + Math.random() * metersToUnits(1),
                    // a random speed between 0.006 and 0.036 radians / frame
                    speed: 0.006 + Math.random() * 0.020
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

            // mesh.current.rotation.z += .005;
        }
    });
    return (
        <mesh ref={mesh} position={position} receiveShadow
              matrix={new THREE.Matrix4().makeRotationX(-Math.PI / 2)} >
            <meshPhongMaterial color={Colors.blue} transparent flatShading opacity={.8} side={DoubleSide}/>
            <planeGeometry args={[2.25*20,2.5*20,30,20]}/>
        </mesh>
    )
};

export default Waves;
