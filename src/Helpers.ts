import {MathUtils} from 'three';

export const mapToPlot = (x: number, y: number): [number, number, number] => [x, 0.01, -(y)];
export const mapToPlotWithElevation = (position: { x: number, heightInMeters: number, y: number }): [number, number, number] => [position.x, metersToUnits(position.heightInMeters) * 0.5, -(position.y)];
export const metersToUnits = (meters: number) => meters / 20;
export const deg2Rad = (degrees: number) => MathUtils.degToRad(degrees);
