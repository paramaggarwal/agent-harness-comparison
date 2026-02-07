# Limitations

## Repository Visibility Constraint

This analysis only asserts what is visible in the checked-out source repositories.

That means:

- Closed-source runtime components are out of scope.
- Binary-only behavior is out of scope.
- Documentation claims without matching implementation evidence are treated as unverified.

This constraint is especially material for the analyzed Claude Code and Copilot CLI repositories, where full harness internals are not exposed in-repo.

## No Performance Benchmarks

We did not run controlled benchmark suites for:

- Latency
- Cost efficiency
- Output quality
- Tool success rate
- Diff quality

This documentation is architecture and implementation oriented, not a leaderboard.

## No Reverse Engineering

No binary reverse engineering or decompilation was performed.

## Configuration Sensitivity

Actual behavior can vary substantially depending on:

- Model/provider selection
- API limits and auth context
- Permission/policy settings
- Loaded extensions/hooks/skills/MCP servers
- Local environment and filesystem shape

So these findings should be read as **implementation capability and architecture posture**, not guaranteed outcomes for every deployment profile.
