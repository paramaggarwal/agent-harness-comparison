# Codex (`openai/codex`) Deep Dive

## Runtime Composition

Codex is implemented as a native Rust system with a JavaScript launcher shim:

- JS launcher resolves platform/arch binary and forwards args/signals: `codex-cli/bin/codex.js:1-176`
- TUI binary entrypoint: `codex-rs/tui/src/main.rs:1-30`
- App-server binary entrypoint: `codex-rs/app-server/src/main.rs:1-45`
- MCP server binary entrypoint: `codex-rs/mcp-server/src/main.rs:1-9`

## CLI Entrypoints and Parsing

- CLI flags and modes are defined via `clap`: `codex-rs/tui/src/cli.rs:7-115`
- Startup maps flags to runtime config (including approval/sandbox shortcuts): `codex-rs/tui/src/lib.rs:126-145`

Key implementation trait: approval/sandbox presets are explicit and enforceable at process start, not only prompt guidance.

## Auth and Credential Handling

- Storage modes include file/keyring/auto/none: `codex-rs/core/src/auth/storage.rs:28-133`
- MCP OAuth token storage + fallback behavior: `codex-rs/rmcp-client/src/oauth.rs:1-227`

## Safety, Policy, Sandbox

- Tool orchestration performs approval/sandbox mediation: `codex-rs/core/src/tools/orchestrator.rs:1-169`
- Sandboxing decision/runtime details: `codex-rs/core/src/tools/sandboxing.rs:52-180`
- Exec policy rules and prefix-rule amendment capability: `codex-rs/core/src/exec_policy.rs:81-193`
- Platform execution path routing: `codex-rs/core/src/exec.rs:117-166`

## Tooling and Extensibility

- Unified long-lived exec subsystem: `codex-rs/core/src/unified_exec/mod.rs:1-157`
- MCP tool call routing with approval gates: `codex-rs/core/src/mcp_tool_call.rs:30-161`
- MCP server capability propagation (`codex/sandbox-state`): `codex-rs/core/src/mcp_connection_manager.rs:318-333`
- Skill model and env-var dependency resolution: `codex-rs/core/src/skills/model.rs:1-73`, `codex-rs/core/src/skills/env_var_dependencies.rs:22-162`

## Session and State

- Context/history management: `codex-rs/core/src/context_manager/history.rs:22-210`
- Optional SQLite-backed state runtime and initialization path: `codex-rs/core/src/state_db.rs:26-96`, `codex-rs/core/src/codex.rs:324-355`

## Interactive vs Headless

- Interactive default: TUI startup path `codex-rs/tui/src/lib.rs:126-210`
- Headless integration: app-server over stdio/websocket `codex-rs/app-server/src/lib.rs:174-211`

## Distinctive Engineering Characteristics

1. Strong native core modularity (protocol/core/tooling/state/UI split).
2. Formalized approval+sandbox orchestration pipeline.
3. Built-in server boundary for non-TUI integration.
