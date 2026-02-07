# Methodology

This documentation is intentionally code-first. Every comparative claim is grounded in files that were present in each checked-out repository snapshot.

## How The Analysis Was Done

1. Clone each target repository and capture snapshot metadata (`remote`, `SHA`, commit timestamp, tracked-file count).
2. Inspect entrypoints, runtime loop modules, tool systems, auth/provider layers, session/state internals, and non-interactive pathways.
3. Cross-check whether behavior is implemented in code or only described in docs.
4. Mark anything not visible in repository internals as out-of-scope for architecture claims.

## Why Pi Was Added

You requested we include Pi because several provider-adjacent repos do not expose full runtime internals. That addition materially improves the comparison set by adding another fully inspectable CLI runtime.

Analyzed Pi repository:

- `https://github.com/badlogic/pi-mono`

## Inclusion Principle

A feature is considered **implemented and comparable** only if the implementation path is visible in repository code.

For example:

- If a README claims JSON mode but no corresponding runtime path is visible, it is not counted as code-verified.
- If a repo exposes installers, plugins, or docs without the core runtime loop, we classify it as a surface/integration view for this study.

## Scope Boundaries

This is not a benchmark report and does not rank model quality, latency, cost, or output quality.

Specifically out of scope:

- Synthetic task benchmarks.
- Closed-source binaries not present in the repo.
- Reverse engineering of packaged artifacts.

## Evidence Style

You will see two evidence forms throughout:

1. **File references** for traceability.
2. **Short code excerpts** where architecture differences are easier to understand directly from implementation.

For the complete claim-to-file index, see [Evidence Map](/appendix/evidence-map).
