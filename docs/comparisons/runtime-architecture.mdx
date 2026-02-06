# Runtime Architecture Comparison

## Codex

- Distribution model: Node launcher dispatching to platform-specific binaries.
- Implementation center: Rust (`codex-rs/*`) with separate binaries for TUI, app-server, MCP server, and sandbox utilities.
- Strong separation between protocol, core logic, tooling, state, and UI crates.

Operational effect: favors deterministic native behavior and strict subsystem boundaries.

## Gemini CLI

- Distribution model: Node package, TypeScript monorepo.
- Implementation center: `packages/cli` + `packages/core` with explicit services for policy, tools, scheduler, hooks, agents, and output formats.
- High test density around most core modules.

Operational effect: fast iteration and composability via TypeScript services with explicit orchestration layers.

## OpenCode

- Distribution model: native binary wrappers launched by Node shim, with runtime implementation in Bun/TypeScript.
- Implementation center: `packages/opencode/src/*` with yargs CLI, server, tools, permissions, provider, session, and MCP modules.
- Explicit client/server posture (local in-process fetch, optional HTTP serve/attach flow).

Operational effect: terminal-first UX with remote-control pathway built into architecture.

## Claude Code Repository

- Exposed structure is plugin/hook ecosystem, skills/agents/commands markdown, and utility scripts.
- Core runtime internals (command loop, tool executor, model orchestration, policy engine) are not present in this repository snapshot.

Operational effect: highly useful for extension behavior, but not sufficient for full runtime architecture audit.

## Copilot CLI Repository

- Exposed structure is installer script, changelog, README, and release/update workflows.
- Core runtime internals are not present in this repository snapshot.

Operational effect: enough to inspect installation/update channel behavior, not enough for harness internals.
