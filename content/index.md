# CLI Agent Internals Comparison (Code-Level)

This report compares what these repositories **actually expose in code**:

- OpenAI Codex CLI (`openai/codex`)
- Google Gemini CLI (`google-gemini/gemini-cli`)
- OpenCode (`sst/opencode`)
- Claude Code repo (`anthropics/claude-code`)
- GitHub Copilot CLI repo (`github/copilot-cli`)

## Scope

The goal was a source-level technical comparison of:

- Runtime architecture
- Entrypoints and command parsing
- Auth/provider design
- Safety/approval/sandbox systems
- Tool orchestration and extensibility
- Session/state handling
- Interactive vs non-interactive operation

## Key Result

There are two distinct transparency classes:

1. **Full runtime internals visible in-repo**
- Codex
- Gemini CLI
- OpenCode

2. **Distribution/plugins/docs surfaces visible, but core runtime not present**
- Claude Code repo (plugin + hook ecosystem and scripts)
- Copilot CLI repo (installer/docs/workflow metadata)

That difference heavily impacts how far architecture conclusions can be validated directly from code.

## Repository Snapshot Date

Analysis snapshot: **February 6, 2026**.

See [Repo Snapshots](/appendix/repo-snapshots) for exact commit SHAs.
