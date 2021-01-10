import React, {useEffect, useRef, useState} from 'react';
import * as THREE from "three";
import {DoubleSide, Geometry} from "three";
import {Colors} from "../types/Colors";

interface Props {
}

const Terrain: React.FC<Props> = () => {
    const geometry = useRef<Geometry>();
    const [{width, height}, setWidthAndHeight] = useState({width: 0, height: 0});

    useEffect(() => {
        const createHeightmap = (image: HTMLImageElement) => {
            const ctx = document.createElement('canvas').getContext('2d');
            if (!ctx) throw Error('Failed to load terrain heatmap!')
            const {width, height} = image;
            ctx.canvas.width = width;
            ctx.canvas.height = height;
            ctx.drawImage(image, 0, 0);
            const {data} = ctx.getImageData(0, 0, width, height);
            setWidthAndHeight({width, height});
            if (geometry.current) {
                const cellsAcross = width - 1;
                const cellsDeep = height - 1;
                for (let z = 0; z < cellsDeep; ++z) {
                    for (let x = 0; x < cellsAcross; ++x) {
                        // compute row offsets into the height data
                        // we multiply by 4 because the data is R,G,B,A but we
                        // only care about R
                        const base0 = (z * width + x) * 4;
                        const base1 = base0 + (width * 4);

                        // look up the height for the for points
                        // around this cell
                        const h00 = data[base0] / 32;
                        const h01 = data[base0 + 4] / 32;
                        const h10 = data[base1] / 32;
                        const h11 = data[base1 + 4] / 32;
                        // compute the average height
                        const hm = (h00 + h01 + h10 + h11) / 4;

                        // the corner positions
                        const x0 = x;
                        const x1 = x + 1;
                        const z0 = z;
                        const z1 = z + 1;

                        // remember the first index of these 5 vertices
                        const ndx = geometry.current.vertices.length;

                        // add the 4 corners for this cell and the midpoint
                        geometry.current.vertices.push(
                            new THREE.Vector3(x0, h00, z0),
                            new THREE.Vector3(x1, h01, z0),
                            new THREE.Vector3(x0, h10, z1),
                            new THREE.Vector3(x1, h11, z1),
                            new THREE.Vector3((x0 + x1) / 2, hm, (z0 + z1) / 2),
                        );

                        // create 4 triangles
                        geometry.current.faces.push(
                            new THREE.Face3(ndx + 0, ndx + 4, ndx + 1),
                            new THREE.Face3(ndx + 1, ndx + 4, ndx + 3),
                            new THREE.Face3(ndx + 3, ndx + 4, ndx + 2),
                            new THREE.Face3(ndx + 2, ndx + 4, ndx + 0),
                        );

                        // add the texture coordinates for each vertex of each face
                        const u0 = x / cellsAcross;
                        const v0 = z / cellsDeep;
                        const u1 = (x + 1) / cellsAcross;
                        const v1 = (z + 1) / cellsDeep;
                        const um = (u0 + u1) / 2;
                        const vm = (v0 + v1) / 2;
                        geometry.current.faceVertexUvs[0].push(
                            [new THREE.Vector2(u0, v0), new THREE.Vector2(um, vm), new THREE.Vector2(u1, v0)],
                            [new THREE.Vector2(u1, v0), new THREE.Vector2(um, vm), new THREE.Vector2(u1, v1)],
                            [new THREE.Vector2(u1, v1), new THREE.Vector2(um, vm), new THREE.Vector2(u0, v1)],
                            [new THREE.Vector2(u0, v1), new THREE.Vector2(um, vm), new THREE.Vector2(u0, v0)],
                        )
                    }
                }
            }
        }

        // extract the data from the image by drawing it to a canvas
        // and calling getImageData
        const imgLoader = new THREE.ImageLoader();
        imgLoader.load(require('../assets/img/heightmap-240x240.png').default, createHeightmap);
    }, []);


    return (
        <mesh position={[-width / 2 - 7.5, 0, -height - 35 ]} scale={[1.38,1.5,1.2]}>
            <geometry ref={geometry}/>
            <meshPhongMaterial flatShading color={Colors.green} side={DoubleSide}/>
        </mesh>
    )
};

export default Terrain;
