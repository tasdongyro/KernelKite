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
 * scale so lanes are visually comparable; it defaults to the global maximum.
 */
export declare function renderTimelineSvg(doc: ViewerDocument, options?: Partial<TimelineOptions>): string;
/** Wrap a rendered SVG in a minimal standalone HTML page (no remote assets). */
export declare function renderStandaloneHtml(doc: ViewerDocument, svg: string): string;
