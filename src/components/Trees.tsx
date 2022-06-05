import React, {Suspense} from 'react';
import PatchOfTrees from "./PatchOfTrees";
import {mapToPlotWithElevation, metersToUnits} from "../Helpers";

interface Props {
}

const Trees: React.FC<Props> = ({}) => {
    return (
        <Suspense fallback={null}>
            {/*At the Lake*/}
            <PatchOfTrees position={mapToPlotWithElevation({x: 0, heightInMeters: 1, y: 6})} amount={500}
                          patchSize={metersToUnits(60)}
                          rotation={-4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 0, heightInMeters: 1, y: 65})} amount={250}
                          patchSize={metersToUnits(40)}
                          rotation={-4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 40, heightInMeters: 1, y: 65})} amount={250}
                          patchSize={metersToUnits(40)}
                          rotation={-4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -10, heightInMeters: 1, y: 145})} amount={250}
                          patchSize={metersToUnits(40)}
                          rotation={60}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 30, heightInMeters: 1, y: 110})} amount={250}
                          patchSize={metersToUnits(40)}
                          rotation={60}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -50, heightInMeters: 1, y: 150})} amount={500}
                          patchSize={metersToUnits(60)}
                          rotation={60}
            />
        </Suspense>
    )
};

export default Trees;
