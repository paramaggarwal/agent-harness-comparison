# Pi (`badlogic/pi-mono`) Deep Dive

Pi is built as a TypeScript monorepo with a deliberately small agent core and a strong customization surface. Its philosophy is visible in code: keep the runtime understandable, then compose behavior via extensions, skills, templates, themes, and packages.

## Monorepo Composition

The repository separates concerns into focused packages:

- `packages/coding-agent` (CLI and session orchestration)
- `packages/agent` (agent loop and tool-call handling)
- `packages/ai` (provider registry, auth/OAuth helpers)
- `packages/mom` (Slack bot + sandbox executor patterns)

This structure makes it easy to audit the harness in layers.

## Multi-Mode Runtime

Pi supports interactive, single-shot print/json, and RPC workflows in one runtime.

```ts
// packages/coding-agent/src/main.ts
if (mode === 'rpc') {
  await runRpcMode(session)
} else if (isInteractive) {
  await new InteractiveMode(session, ...).run()
} else {
  await runPrintMode(session, { mode, ... })
}
```

CLI mode definitions are explicit:

- `packages/coding-agent/src/cli/args.ts`
- `packages/coding-agent/src/modes/print-mode.ts`
- `packages/coding-agent/src/modes/rpc/rpc-mode.ts`
- `packages/coding-agent/src/modes/rpc/rpc-types.ts`

## Agent Loop and Tool Execution

Pi’s loop implementation is visible and event-driven.

```ts
// packages/agent/src/agent-loop.ts (shape)
// stream assistant response -> extract tool calls -> execute tools -> emit tool result messages
```

Core evidence paths:

- `packages/agent/src/agent-loop.ts`
- `packages/agent/src/agent.ts`
- `packages/agent/src/types.ts`

This makes operational behavior (interrupts, follow-ups, retries, tool sequencing) auditable directly in source.

## Auth and Provider Layer

Pi exposes both provider registration and credential management logic.

```ts
// packages/ai/src/providers/register-builtins.ts
registerApiProvider({ api: 'anthropic-messages', ... })
registerApiProvider({ api: 'openai-responses', ... })
registerApiProvider({ api: 'google-gemini-cli', ... })
```

```ts
// packages/coding-agent/src/core/auth-storage.ts
chmodSync(this.authPath, 0o600)
// OAuth refresh path guarded by file locking
```

Key evidence paths:

- `packages/ai/src/providers/register-builtins.ts`
- `packages/ai/src/cli.ts`
- `packages/coding-agent/src/core/auth-storage.ts`
- `packages/coding-agent/src/core/model-registry.ts`

## Session Model and Persistence

Pi persists session history with explicit tree semantics and migration support.

- `packages/coding-agent/src/core/session-manager.ts`
- `packages/coding-agent/src/core/agent-session.ts`

This is useful for resume/fork/branch workflows and programmatic control via RPC.

## Extensibility Strategy

Pi’s extensibility surface is unusually broad and code-backed.

- Extensions: `packages/coding-agent/src/core/extensions/*`
- Skills: `packages/coding-agent/src/core/skills.ts`
- Prompt templates/themes/resources: resource loader and settings management modules
- Package lifecycle commands: `install`, `remove`, `update`, `list` in `main.ts`

## Sandbox and Isolation Signal

In `packages/mom`, Pi includes a concrete host-vs-docker sandbox executor model:

- `packages/mom/src/sandbox.ts`
- `packages/mom/docs/sandbox.md`

That code is not the same runtime path as `pi-coding-agent`, but it is relevant evidence of how sandbox isolation is modeled within the monorepo ecosystem.

## Practical Read

Pi is a strong candidate when you want:

1. A transparent TypeScript agent core.
2. Built-in JSON/RPC integration modes.
3. Heavy customization without maintaining a fork.
4. Session-centric workflows with branchable history.
