# Safety, Permissions, and Sandbox Model

Safety is where implementation details matter most. Prompt instructions are not a safety model; execution controls are.

## Codex

Codex exposes explicit orchestration around approvals and sandboxing in core runtime code.

Key evidence paths:

- `codex-rs/core/src/tools/orchestrator.rs`
- `codex-rs/core/src/tools/sandboxing.rs`
- `codex-rs/core/src/exec_policy.rs`
- `codex-rs/core/src/exec.rs`

This is a formalized safety pipeline with platform-specific execution handling.

## Gemini CLI

Gemini CLI expresses safety through policy services and scheduler integration.

Key evidence paths:

- `packages/core/src/policy/policy-engine.ts`
- `packages/core/src/policy/config.ts`
- `packages/core/src/scheduler/scheduler.ts`
- `packages/cli/src/config/sandboxConfig.ts`
- `packages/cli/src/utils/sandbox.ts`

This gives Gemini CLI an explicit, inspectable policy path before tool execution.

## OpenCode

OpenCode ties permissions directly to tool actions using `allow`, `ask`, and `deny` flows.

```ts
// packages/opencode/src/permission/next.ts
// permission decision pipeline (allow / ask / deny)
```

```ts
// packages/opencode/src/cli/cmd/run.ts
// non-interactive run path rejects interactive permission prompts
```

Key evidence paths:

- `packages/opencode/src/permission/next.ts`
- `packages/opencode/src/tool/bash.ts`
- `packages/opencode/src/tool/write.ts`
- `packages/opencode/src/tool/edit.ts`

## Pi

Pi exposes runtime control points (tool set selection, session controls, abort paths) and a dedicated sandbox model in the `mom` package (`host` vs `docker`).

```ts
// packages/mom/src/sandbox.ts
export type SandboxConfig = { type: 'host' } | { type: 'docker'; container: string }
```

```md
# packages/mom/docs/sandbox.md
All tool execution (`bash`, `read`, `write`, `edit`) happens inside the container
```

Within `pi-coding-agent`, safety appears more compositional (tool surface and extension behavior) than a single centralized policy engine equivalent to Codex/Gemini/OpenCode.

## Claude Code repo and Copilot CLI repo

- Claude Code repo: hook examples and script-based guardrails are visible.
- Copilot CLI repo: installer/documentation surfaces are visible.

A full runtime safety engine is not directly auditable from these repository snapshots.

## Practical Advice

If you need strict enterprise controls, prefer harnesses with explicit policy/sandbox enforcement paths in core runtime code. In this comparison set, that signal is strongest in Codex, Gemini CLI, and OpenCode, with Pi offering a customizable model and sandbox patterns visible in adjacent runtime packages.
