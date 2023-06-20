import React, {Suspense} from 'react';
import PatchOfTrees from "./PatchOfTrees";
import {mapToPlotWithElevation, metersToUnits} from "../Helpers";

interface Props {
}

const Trees: React.FC<Props> = ({}) => {
    return (
        <Suspense fallback={null}>
            {/* SOuth Georgia Neighbors trees*/}
            <PatchOfTrees position={mapToPlotWithElevation({x: -100, heightInMeters: 1, y: -10})} amount={1000}
                          patchSize={metersToUnits(100)}
                          rotation={4}
            />
            {/*Dense rows of birches at the road side at your left hand*/}
            <PatchOfTrees position={mapToPlotWithElevation({x: 0, heightInMeters: 1, y: 6})} amount={30}
                          patchSize={metersToUnits(40)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 40, heightInMeters: 1, y: 12})} amount={30}
                          patchSize={metersToUnits(40)}
                          rotation={10}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 0, heightInMeters: 1, y: 40})} amount={30}
                          patchSize={metersToUnits(40)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 40, heightInMeters: 1, y: 55})} amount={30}
                          patchSize={metersToUnits(20)}
                          rotation={4}
            />

            {/*/!*Thinner rows of birches at the road side at your left hand*!/*/}
            {/*<PatchOfTrees position={mapToPlotWithElevation({x: 80, heightInMeters: 1, y: 20})} amount={100}*/}
            {/*              patchSize={metersToUnits(60)}*/}
            {/*              rotation={4}*/}
            {/*/>*/}
        </Suspense>
    )
};

export default Trees;
