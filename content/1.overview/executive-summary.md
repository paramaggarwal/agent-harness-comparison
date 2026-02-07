# Executive Summary

If your goal is to choose a coding-agent CLI based on **runtime internals you can audit**, the repositories separate into two groups very clearly.

The first group exposes substantial implementation detail in the public repo: **Codex**, **Gemini CLI**, **OpenCode**, and **Pi**. The second group mostly exposes integration surfaces and distribution tooling in the analyzed snapshots: **Claude Code repo** and **Copilot CLI repo**.

## The Core Split

### Group A: Runtime is inspectable in repository code

These projects expose their agent loop, tool execution pathways, session model, and automation modes in source:

- Codex (`openai/codex`)
- Gemini CLI (`google-gemini/gemini-cli`)
- OpenCode (`sst/opencode`)
- Pi (`badlogic/pi-mono`)

### Group B: Runtime is not fully inspectable in these repositories

These repos are still useful, but they do not expose a full end-to-end agent runtime for equivalent architecture-level auditing:

- Claude Code repo (`anthropics/claude-code`)
- Copilot CLI repo (`github/copilot-cli`)

## What Actually Differs Technically

### 1. Runtime composition choices

Codex centers a native Rust core with a JavaScript launcher. Gemini CLI and OpenCode are TypeScript-first runtime stacks. Pi is also TypeScript-first, but its design emphasizes a minimal core plus extension/package-driven customization.

### 2. Safety enforcement model

Codex and Gemini CLI both expose explicit policy/approval orchestration layers. OpenCode ties permission decisions directly to tool execution (`allow/ask/deny`). Pi currently emphasizes configurable tool surface and runtime controls, while sandboxing appears most explicitly in the `mom` package’s host-vs-docker executor model.

### 3. Automation posture

Gemini CLI and Pi both expose explicit structured non-interactive outputs. OpenCode offers `run` and server/attach workflows. Codex exposes an app-server boundary designed for integration workflows.

### 4. Extensibility strategy

All four inspectable runtimes expose extensibility, but with different primitives:

- Codex: MCP + skills + dynamic tooling and app-server boundaries.
- Gemini CLI: hooks/extensions/skills/subagents/MCP as first-class modules.
- OpenCode: tools + MCP + agent configuration layering + server mode.
- Pi: extensions + skills + prompt templates + themes + package manager model.

## Practical Recommendation

Start by deciding what matters most in your org:

1. **Maximum runtime auditability**: prioritize Codex, Gemini CLI, OpenCode, Pi.
2. **Tight scripted automation**: focus on Gemini CLI, OpenCode, Pi, and Codex app-server paths.
3. **Lowest extension friction**: compare Gemini CLI and Pi first, then OpenCode.

Then validate with the [Capability Matrix](/comparative-analysis/capability-matrix) and drill into the repo-specific chapters.
