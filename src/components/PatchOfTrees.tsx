import React, {useMemo} from 'react';
import {deg2Rad, metersToUnits} from "../Helpers";
import Tree from "./Tree";

interface Props {
    position?: [number, number, number];
    amount?: number;
    patchSize?: number;
    rotation?: number;
}

const PatchOfTrees: React.FC<Props> = ({
                                           position = [0, 0, 0],
                                           amount = 10,
                                           patchSize = metersToUnits(3), rotation = 0
                                       }) => {
    const trees = useMemo(() => {
        const trees = [];
        for (let x = 0; x < amount; x++) {
            trees.push(<Tree key={`tree_${x}`}
                             position={[(Math.random()) * patchSize, 1, -(Math.random() * patchSize)]}/>)
        }
        return trees;
    }, []);

    return (
        <group position={position}
               rotation={[0, deg2Rad(rotation), 0]}>
            {trees}
        </group>
    )
};

export default PatchOfTrees;
