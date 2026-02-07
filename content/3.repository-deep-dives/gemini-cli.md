# Gemini CLI (`google-gemini/gemini-cli`) Deep Dive

Gemini CLI is a TypeScript monorepo with explicit service boundaries. It is one of the clearest codebases for understanding policy, scheduling, tools, and output protocol behavior end-to-end.

## Runtime Shape

High-level split:

- CLI/UI layer: `packages/cli/src/*`
- Core orchestration: `packages/core/src/*`

Representative entry and mode branching live in:

- `packages/cli/src/gemini.tsx`
- `packages/cli/src/nonInteractiveCli.ts`

## Policy + Scheduler Design

Gemini CLI treats policy as a first-class subsystem integrated with the scheduler.

Key evidence paths:

- `packages/core/src/policy/policy-engine.ts`
- `packages/core/src/policy/config.ts`
- `packages/core/src/scheduler/scheduler.ts`
- `packages/core/src/scheduler/tool-executor.ts`

This is an implementation style that scales well when teams need consistent behavior across interactive and scripted paths.

## Tooling and Extensibility

Tool and extension systems are explicit and modular:

- Tool registry: `packages/core/src/tools/tool-registry.ts`
- MCP lifecycle: `packages/core/src/tools/mcp-client-manager.ts`
- Extension loading: `packages/core/src/utils/extensionLoader.ts`
- Hooks: `packages/core/src/hooks/hookSystem.ts`
- Skills and agents: `packages/core/src/skills/skillManager.ts`, `packages/core/src/agents/*`

## Non-Interactive Protocols

Gemini CLI has strong machine-facing output formats:

```ts
// packages/cli/src/config/config.ts
outputFormat: 'text' | 'json' | 'stream-json'
```

```ts
// packages/core/src/output/stream-json-formatter.ts
// JSONL event-oriented formatting
```

This is especially useful for CI pipelines, wrappers, and telemetry-driven automation.

## Practical Read

Gemini CLI is a strong fit when you want:

1. Service-layer transparency.
2. Clear policy/scheduler composition.
3. First-class structured output for automation.
4. Rich extension hooks without leaving the core runtime architecture.
