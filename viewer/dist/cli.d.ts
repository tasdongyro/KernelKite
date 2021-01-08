#!/usr/bin/env node
/**
 * Node renderer: reads a kernelkite viewer document (JSON) and writes an SVG or
 * standalone HTML file. No remote dependencies.
 *
 * Usage:
 *   kernelkite-render <viewer.json> [out.svg|out.html]
 *
 * The output format is chosen from the extension of the output path (.html for
