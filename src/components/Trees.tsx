import React, {Suspense} from 'react';
import PatchOfTrees from "./PatchOfTrees";
import {mapToPlotWithElevation, metersToUnits} from "../Helpers";

interface Props {
}

const Trees: React.FC<Props> = ({}) => {
    return (
        <Suspense fallback={null}>
            {/* South Georgia Neighbors trees*/}
            <PatchOfTrees position={mapToPlotWithElevation({x: -100, heightInMeters: 1, y: -10})} amount={1000}
                          patchSize={metersToUnits(100)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -145, heightInMeters: 1, y: 90})} amount={90}
                          patchSize={metersToUnits(30)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -140, heightInMeters: 1, y: 40})} amount={100}
                          patchSize={metersToUnits(60)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -130, heightInMeters: 1, y: 10})} amount={100}
                          patchSize={metersToUnits(40)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -125, heightInMeters: 1, y: -15})} amount={100}
                          patchSize={metersToUnits(30)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -135, heightInMeters: 1, y: 60})} amount={100}
                          patchSize={metersToUnits(30)}
                          rotation={4}
            />
            {/*Left side neighbours dense trees*/}
            <PatchOfTrees position={mapToPlotWithElevation({x: -145, heightInMeters: 1, y: 110})} amount={100}
                          patchSize={metersToUnits(30)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -145, heightInMeters: 1, y: 140})} amount={100}
                          patchSize={metersToUnits(30)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -145, heightInMeters: 1, y: 170})} amount={100}
                          patchSize={metersToUnits(30)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -145, heightInMeters: 1, y: 200})} amount={100}
                          patchSize={metersToUnits(30)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -145, heightInMeters: 1, y: 230})} amount={100}
                          patchSize={metersToUnits(30)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -145, heightInMeters: 1, y: 260})} amount={200}
                          patchSize={metersToUnits(60)}
                          rotation={4}
            />
            {/*Land behind our land*/}
            <PatchOfTrees position={mapToPlotWithElevation({x: -110, heightInMeters: 1, y: 260})} amount={600}
                          patchSize={metersToUnits(100)}
                          rotation={-35}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -30, heightInMeters: 1, y: 200})} amount={150}
                          patchSize={metersToUnits(50)}
                          rotation={-35}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 5, heightInMeters: 1, y: 180})} amount={100}
                          patchSize={metersToUnits(30)}
                          rotation={-35}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 25, heightInMeters: 1, y: 160})} amount={100}
                          patchSize={metersToUnits(30)}
                          rotation={-35}
            />
            {/*Dense rows of birches at the roadside at your left hand*/}
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
            {/*The peninsula of trees running through the middle*/}
            <PatchOfTrees position={mapToPlotWithElevation({x: 0, heightInMeters: 1, y: 10})} amount={100}
                          patchSize={metersToUnits(60)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 0, heightInMeters: 1, y: 70})} amount={40}
                          patchSize={metersToUnits(40)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 80, heightInMeters: 1, y: 80})} amount={20}
                          patchSize={metersToUnits(20)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 100, heightInMeters: 1, y: 80})} amount={20}
                          patchSize={metersToUnits(20)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 80, heightInMeters: 1, y: 60})} amount={20}
                          patchSize={metersToUnits(20)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 100, heightInMeters: 1, y: 60})} amount={20}
                          patchSize={metersToUnits(20)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 120, heightInMeters: 1, y: 60})} amount={20}
                          patchSize={metersToUnits(20)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 120, heightInMeters: 1, y: 80})} amount={20}
                          patchSize={metersToUnits(20)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 100, heightInMeters: 1, y: 40})} amount={20}
                          patchSize={metersToUnits(20)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: 85, heightInMeters: 1, y: 45})} amount={10}
                          patchSize={metersToUnits(20)}
                          rotation={4}
            />
            {/*Very dense are in the middle that would be a cool place to make the permaculture*/}
            <PatchOfTrees position={mapToPlotWithElevation({x: -45, heightInMeters: 1, y: 95})} amount={150}
                          patchSize={metersToUnits(50)}
                          rotation={4}
            />
            <PatchOfTrees position={mapToPlotWithElevation({x: -85, heightInMeters: 1, y: 115})} amount={150}
                          patchSize={metersToUnits(50)}
                          rotation={4}
            />
        </Suspense>
    )
};

export default Trees;
