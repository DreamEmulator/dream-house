import React, {Suspense} from 'react';
import PatchOfTrees from "./PatchOfTrees";
import {mapToPlot, metersToUnits} from "../Helpers";
import Tree from "./Tree";

interface Props {
}

const Trees: React.FC<Props> = ({}) => {
    return (
        <Suspense fallback={null}>
            {/*At the Lake*/}
            <PatchOfTrees position={mapToPlot(-5, 4.5)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-6, 5.5)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-6, 4)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>

            <PatchOfTrees position={mapToPlot(-5.5, 6.5)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-6, 7.5)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-6, 8)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>

            <PatchOfTrees position={mapToPlot(-5.5, 8.5)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-6, 9.5)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-5, 10)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>

            <PatchOfTrees position={mapToPlot(-4, 10)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(0, 6)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-1, 5)} amount={30} patchSize={metersToUnits(30)} rotation={5.5}/>

            {/*At the house*/}
            <PatchOfTrees position={mapToPlot(1, 1)} amount={200} patchSize={metersToUnits(100)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(3, 1)} amount={200} patchSize={metersToUnits(100)} rotation={5.5}/>

        </Suspense>
    )
};

export default Trees;
