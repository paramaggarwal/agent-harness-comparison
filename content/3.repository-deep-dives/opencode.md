# OpenCode (`sst/opencode`) Deep Dive

## Runtime Composition

OpenCode uses a hybrid packaging/runtime model:

- Node wrapper dispatches to platform-specific binary names: `packages/opencode/bin/opencode:1-84`
- Main implementation is Bun + TypeScript in `packages/opencode/src/*`: `packages/opencode/package.json:1-98`

## Entrypoints and Commands

- Top-level CLI parsing with `yargs`, command registration, middleware, strict failure handling: `packages/opencode/src/index.ts:1-159`
- Non-interactive command: `packages/opencode/src/cli/cmd/run.ts:1-582`
- Interactive TUI command thread model: `packages/opencode/src/cli/cmd/tui/thread.ts:1-150`

## Provider and Auth Design

- Provider abstraction and per-provider loader/auth behavior: `packages/opencode/src/provider/provider.ts:1-220`
- Auth file persistence with restrictive file mode: `packages/opencode/src/auth/index.ts:1-74`

## Permission and Safety Model

- Permission engine (`allow/ask/deny`) and async prompt/reply flow: `packages/opencode/src/permission/next.ts:1-176`
- `run` mode denies interactive-only actions (`question`, `plan_enter`, `plan_exit`) and auto-rejects permission prompts: `packages/opencode/src/cli/cmd/run.ts:327-510`
- Tool-level permission checks:
  - `edit`: `packages/opencode/src/tool/edit.ts:27-123`
  - `write`: `packages/opencode/src/tool/write.ts:14-66`
  - `bash`: `packages/opencode/src/tool/bash.ts:55-174`
  - external directory gating: `packages/opencode/src/tool/external-directory.ts:1-33`

## Tool Runtime and Extensibility

- Core tool definition abstraction and output truncation: `packages/opencode/src/tool/tool.ts:1-86`
- Tool registry (built-ins + experimental + plugins, model-aware tool gating): `packages/opencode/src/tool/registry.ts:1-112`
- Batch tool with parallel execution constraints: `packages/opencode/src/tool/batch.ts:1-176`
- MCP support for local stdio and remote streamable HTTP/SSE: `packages/opencode/src/mcp/index.ts:1-360`
- Command synthesis from MCP prompts: `packages/opencode/src/command/index.ts:56-138`

## Client/Server Architecture

- In-process app fetch path usable from `run`: `packages/opencode/src/cli/cmd/run.ts:575-582`
- Headless server mode (`serve`): `packages/opencode/src/cli/cmd/serve.ts:1-21`
- HTTP/SSE server, auth, CORS, event stream: `packages/opencode/src/server/server.ts:1-354`
- Remote attach flow for TUI to server: `packages/opencode/src/cli/cmd/tui/attach.ts:1-52`

## Agents and Session State

- Agent defaults + merged config permissions: `packages/opencode/src/agent/agent.ts:1-238`
- Session processing/streaming and loop handling: `packages/opencode/src/session/processor.ts:1-200`
- JSON-file storage and migration model: `packages/opencode/src/storage/storage.ts:1-166`
- Per-directory instance scoping: `packages/opencode/src/project/instance.ts:1-92`

## Distinctive Engineering Characteristics

1. Explicit client/server duality (local in-process + remote HTTP attach).
2. Permission model integrated directly into tool calls and run-loop behavior.
3. Provider-agnostic architecture with wide model backend coverage.
