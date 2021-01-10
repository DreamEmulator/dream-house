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
            <PatchOfTrees position={mapToPlot(-5*20, 4.5*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-6*20, 5.5*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-6*20, 4*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>

            <PatchOfTrees position={mapToPlot(-5.5*20, 6.5*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-6*20, 7.5*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-6*20, 8*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>

            <PatchOfTrees position={mapToPlot(-5.5*20, 8.5*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-6*20, 9.5*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-5*20, 10*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>

            <PatchOfTrees position={mapToPlot(-4*20, 10*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(0*20, 6*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(-1*20, 5*20)} amount={10} patchSize={metersToUnits(30)} rotation={5.5}/>

            {/*At the house*/}
            <PatchOfTrees position={mapToPlot(1*20, 1*20)} amount={80} patchSize={metersToUnits(100)} rotation={5.5}/>
            <PatchOfTrees position={mapToPlot(3*20, 1*20)} amount={80} patchSize={metersToUnits(100)} rotation={5.5}/>

        </Suspense>
    )
};

export default Trees;
