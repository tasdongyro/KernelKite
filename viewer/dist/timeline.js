/**
 * Pure, dependency-free SVG rendering of a {@link ViewerDocument}. The output
 * is a stacked set of per-process CPU sparklines plus a peak-memory bar, all as
 * inline SVG so it works in a browser or as a static file with no remote media.
 */
import { humanBytes } from "./model.js";
export const DEFAULT_OPTIONS = {
    width: 900,
    laneHeight: 44,
    labelWidth: 150,
    padding: 16,
};
/** A stable, colour-blind-friendly palette cycled per series. */
const PALETTE = [
    "#4c78a8",
    "#f58518",
    "#54a24b",
    "#e45756",
    "#72b7b2",
    "#b279a2",
    "#ff9da6",
    "#9d755d",
];
function escapeXml(s) {
