/**
 * Pure, dependency-free SVG rendering of a {@link ViewerDocument}. The output
 * is a stacked set of per-process CPU sparklines plus a peak-memory bar, all as
 * inline SVG so it works in a browser or as a static file with no remote media.
 */
import { ViewerDocument } from "./model.js";
export interface TimelineOptions {
    width: number;
    laneHeight: number;
    labelWidth: number;
    padding: number;
}
export declare const DEFAULT_OPTIONS: TimelineOptions;
/**
 * Render a full timeline SVG string. `maxCpu` normalises every lane to the same
