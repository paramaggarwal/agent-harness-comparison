# Limitations

## Repository-Only Visibility

This report is constrained to source files present in the analyzed repositories at the snapshot commits.

- If runtime internals are distributed in binaries or private repositories, they are out of scope.
- For Claude Code and Copilot CLI repos, this materially limits architecture-level assertions.

## No Runtime Benchmarking

No controlled benchmark was run for:

- Latency
- Token efficiency
- Tool success rates
- Diff quality
- Cost per task

## No Reverse Engineering of Binaries

No decompilation/reverse engineering of downloaded binaries was performed.

## Configuration Sensitivity

Behavior in all CLIs can vary significantly by:

- model/provider selection
- policy/permission settings
- local hooks/extensions/MCP servers
- environment variables and credentials

So this report emphasizes architecture and implementation surfaces, not absolute behavior under every runtime configuration.
