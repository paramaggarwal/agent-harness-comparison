# OpenCode (`sst/opencode`) Deep Dive

OpenCode combines a terminal-first UX with an explicit server/attach model. The result is a runtime that works as both a local coding harness and a remotely controllable service.

## Runtime Shape

OpenCode packages as a CLI wrapper while keeping runtime logic in TypeScript modules under `packages/opencode/src`.

Key evidence paths:

- `packages/opencode/bin/opencode`
- `packages/opencode/src/index.ts`
- `packages/opencode/src/cli/cmd/*`

## Permission Model

Permissions are integrated into tool execution with explicit `allow/ask/deny` semantics.

```ts
// packages/opencode/src/permission/next.ts
// permission decision lifecycle
```

```ts
// packages/opencode/src/cli/cmd/run.ts
// non-interactive run path denies interactive-only flows
```

Tool-level permission checks are visible across built-ins:

- `packages/opencode/src/tool/bash.ts`
- `packages/opencode/src/tool/write.ts`
- `packages/opencode/src/tool/edit.ts`
- `packages/opencode/src/tool/external-directory.ts`

## Extensibility and MCP

OpenCode merges built-ins, plugins, and MCP-backed capabilities.

Key evidence paths:

- `packages/opencode/src/tool/registry.ts`
- `packages/opencode/src/mcp/index.ts`
- `packages/opencode/src/command/index.ts`

## Server and Remote Control

OpenCode’s client/server duality is a defining trait.

- Serve mode: `packages/opencode/src/cli/cmd/serve.ts`
- Server runtime (HTTP/SSE/auth): `packages/opencode/src/server/server.ts`
- Remote TUI attach: `packages/opencode/src/cli/cmd/tui/attach.ts`

This gives OpenCode a practical path for remote orchestration without abandoning local CLI ergonomics.

## Practical Read

OpenCode is strongest when you want:

1. Direct tool permission handling in runtime code.
2. Both local and remote execution modes.
3. A provider-agnostic architecture with explicit extensibility modules.
