# Headless and Automation Paths

For CI/CD and scripted workflows, interactive UX matters less than protocol clarity. This section focuses on what you can reliably automate from source-visible behavior.

## Codex

Codex provides an app-server boundary alongside the interactive TUI.

Key evidence paths:

- `codex-rs/app-server/src/main.rs`
- `codex-rs/app-server/src/lib.rs`

This is useful when you want a stable integration boundary separate from terminal rendering.

## Gemini CLI

Gemini CLI has one of the clearest structured output stories in this set.

- `text`
- `json`
- `stream-json` (event stream)

Key evidence paths:

- `packages/cli/src/nonInteractiveCli.ts`
- `packages/cli/src/config/config.ts`
- `packages/core/src/output/json-formatter.ts`
- `packages/core/src/output/stream-json-formatter.ts`

## OpenCode

OpenCode offers multiple automation entrypoints:

- `run` for non-interactive execution
- `serve` for headless server mode
- `attach` for remote interaction

Key evidence paths:

- `packages/opencode/src/cli/cmd/run.ts`
- `packages/opencode/src/cli/cmd/serve.ts`
- `packages/opencode/src/server/server.ts`
- `packages/opencode/src/cli/cmd/tui/attach.ts`

## Pi

Pi exposes three concrete non-interactive/integration surfaces in code:

1. Print mode (single shot) with text or JSON output.
2. JSON event output in print mode.
3. RPC mode over JSON lines on stdin/stdout.

```ts
// packages/coding-agent/src/cli/args.ts
--mode <mode> // text | json | rpc
--print       // non-interactive
```

```ts
// packages/coding-agent/src/modes/rpc/rpc-mode.ts
// JSON commands on stdin, responses/events on stdout
```

```ts
// packages/coding-agent/src/modes/print-mode.ts
if (mode === 'json') console.log(JSON.stringify(event))
```

This makes Pi particularly attractive for embedding into editor plugins, custom wrappers, or orchestration services.

## Claude Code repo and Copilot CLI repo

In the analyzed snapshots, full non-interactive runtime internals are not directly visible.

## Engineering Impact

If machine-consumable event streams and embedded operation are a hard requirement, Gemini CLI, OpenCode, and Pi expose especially explicit protocols, with Codex app-server also a strong integration surface.
