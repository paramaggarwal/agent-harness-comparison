# Runtime Architecture

Architecture is where these CLIs diverge most. The key question is not only “what features exist,” but **where control lives**: native runtime, service layer, or extension shell.

## Codex: Native Core With Explicit Binary Boundaries

Codex uses a JavaScript launcher to dispatch to platform binaries, while most behavior lives in Rust crates.

```js
// codex-cli/bin/codex.js
const { platform, arch } = process;
const exe = `codex-${platform}-${arch}`;
spawn(exe, process.argv.slice(2), { stdio: 'inherit' });
```

```rust
// codex-rs/tui/src/main.rs
fn main() -> anyhow::Result<()> {
    codex_tui::run()
}
```

This split gives Codex a strongly typed native core and clear process boundaries (`tui`, `app-server`, `mcp-server`).

## Gemini CLI: Service-Oriented TypeScript Monorepo

Gemini CLI keeps orchestration in TypeScript modules with explicit subsystem boundaries: scheduler, policy, hooks, tools, agents, and output formatters.

```ts
// packages/cli/src/config/config.ts (shape)
outputFormat: 'text' | 'json' | 'stream-json'
```

```ts
// packages/core/src/scheduler/scheduler.ts (conceptual flow)
// user input -> policy checks -> tool execution -> streamed events
```

This design favors rapid iteration and makes orchestration behavior easy to inspect in one language stack.

## OpenCode: CLI + Local Runtime + Remote Server Path

OpenCode combines a local CLI runtime with explicit server/attach mechanics.

```ts
// packages/opencode/src/cli/cmd/serve.ts
// boot headless server
```

```ts
// packages/opencode/src/server/server.ts
// HTTP/SSE event stream + auth + CORS handling
```

This architecture is strong for teams that want both interactive terminal usage and controllable remote execution.

## Pi: Minimal Agent Core With Multi-Mode Surface

Pi exposes a shared `AgentSession` abstraction and multiple modes on top (`interactive`, print text/JSON, and RPC).

```ts
// packages/coding-agent/src/main.ts
if (mode === 'rpc') await runRpcMode(session)
else if (isInteractive) await new InteractiveMode(session, ...).run()
else await runPrintMode(session, { mode, ... })
```

```ts
// packages/agent/src/agent-loop.ts
export function agentLoop(...) {
  stream.push({ type: 'turn_start' })
  // stream LLM response -> execute tools -> emit tool result messages
}
```

Pi’s architecture is intentionally “small core + customizable surface,” with deep extension/package hooks.

## Claude Code Repo and Copilot CLI Repo

In the analyzed snapshots:

- `anthropics/claude-code` primarily exposes plugins, hooks, and operational assets.
- `github/copilot-cli` primarily exposes installer/update/docs surfaces.

These are useful repositories, but they do not expose a full runtime architecture equivalent to Codex/Gemini/OpenCode/Pi in this comparison.

## Practical Engineering Implication

If you are embedding an agent into CI, automation, or internal developer platforms:

1. Prefer repos that expose runtime loop and tool orchestration code directly.
2. Verify non-interactive protocol details in code, not only docs.
3. Treat extension-only repos as ecosystem assets, not full harness internals.
