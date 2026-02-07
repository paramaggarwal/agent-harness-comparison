# Codex (`openai/codex`) Deep Dive

Codex is architected as a native runtime with thin JavaScript distribution glue. If you prefer strongly typed, crate-level subsystem boundaries, this repository is one of the most inspectable in the set.

## Runtime Shape

The launcher resolves platform binaries:

```js
// codex-cli/bin/codex.js (representative)
const child = spawn(binaryPath, args, { stdio: 'inherit' })
```

Core entrypoints are native:

- `codex-rs/tui/src/main.rs`
- `codex-rs/app-server/src/main.rs`
- `codex-rs/mcp-server/src/main.rs`

This layout cleanly separates interactive UI, app-server use, and MCP server responsibilities.

## Safety and Execution Control

Codex’s safety model is visible in runtime orchestration code, not only configuration docs.

Key evidence paths:

- `codex-rs/core/src/tools/orchestrator.rs`
- `codex-rs/core/src/tools/sandboxing.rs`
- `codex-rs/core/src/exec_policy.rs`
- `codex-rs/core/src/exec.rs`

The notable design decision is explicit mediation before tool execution (approval + sandbox + exec policy).

## Auth and MCP

Auth is modularized:

- Local auth storage: `codex-rs/core/src/auth/storage.rs`
- MCP OAuth handling: `codex-rs/rmcp-client/src/oauth.rs`

MCP plumbing is also deeply integrated:

- `codex-rs/core/src/mcp_tool_call.rs`
- `codex-rs/core/src/mcp_connection_manager.rs`

## Session and State

Codex includes explicit context/state machinery:

- `codex-rs/core/src/context_manager/history.rs`
- `codex-rs/core/src/state_db.rs`

That makes long-running or resumable workflows easier to audit at the implementation level.

## Practical Read

Codex is strongest when you want:

1. Native runtime boundaries.
2. Formalized safety pipeline in code.
3. Headless app-server integration path without depending on UI internals.
