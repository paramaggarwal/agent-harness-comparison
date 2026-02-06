# Methodology

## Process

1. Cloned each target repository at current `HEAD` on February 6, 2026.
2. Captured commit SHA/date and tracked-file footprint.
3. Inspected entrypoints, core runtime modules, tool systems, auth flows, and policy/sandbox paths.
4. Marked claims as in-scope only when backed by code in the checked-out repository.

## Important Inclusion Decision: OpenCode

You requested OpenCode to be included because some provider repos do not expose runtime internals.

I evaluated two similarly named repos:

- `sst/opencode` (active; current coding-agent implementation)
- `opencode-ai/opencode` (archived; README states project moved)

This report uses **`sst/opencode`** for the OpenCode deep-dive.

## Evidence Standard

- Conclusions are based on checked-in files only.
- If a repo contains docs/installers/plugins but not runtime source, the report explicitly calls that out and avoids speculative implementation claims.
- Direct file references are provided throughout and consolidated in [Evidence Map](/appendix/evidence-map).

## What This Is Not

- Not a benchmark study (no speed/cost/quality ranking runs).
- Not a product feature marketing comparison.
- Not an assessment of closed-source binaries not present in these repos.
