import {MathUtils} from 'three';

export const mapToPlot = (x: number, y: number): [number, number, number] => [x, 1, -(y)];
export const mapToPlotWithElevation = (position: { x: number, heightInMeters: number, y: number }): [number, number, number] => [position.x, metersToUnits(position.heightInMeters) * 0.5, -(position.y)];
export const metersToUnits = (meters: number) => meters;
export const deg2Rad = (degrees: number) => MathUtils.degToRad(degrees);
export const rotate = (degrees: number): [number, number, number] => [0, deg2Rad(degrees), 0];
export const scale = (scale: number): [number, number, number] => [scale, scale, scale];
