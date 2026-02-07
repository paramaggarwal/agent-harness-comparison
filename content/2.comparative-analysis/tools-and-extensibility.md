# Tools and Extensibility

Most teams outgrow default tool sets quickly. The real question is how each harness lets you add behavior without forking the runtime.

## Codex

Codex exposes extensibility through MCP integration, skill modeling, and tool orchestration boundaries in Rust.

Key evidence paths:

- `codex-rs/core/src/mcp_connection_manager.rs`
- `codex-rs/core/src/mcp_tool_call.rs`
- `codex-rs/core/src/skills/model.rs`
- `codex-rs/core/src/skills/env_var_dependencies.rs`

Codex’s model is protocol-heavy and centralized, which is good for predictable behavior at scale.

## Gemini CLI

Gemini CLI is extension-forward. Hooks, agents, skills, and MCP integrations all sit inside explicit TypeScript services.

Key evidence paths:

- `packages/core/src/tools/tool-registry.ts`
- `packages/core/src/hooks/hookSystem.ts`
- `packages/core/src/utils/extensionLoader.ts`
- `packages/core/src/agents/agentLoader.ts`
- `packages/core/src/skills/skillManager.ts`

This is one of the most composable designs in the set if your team plans to add custom behaviors frequently.

## OpenCode

OpenCode merges built-ins, experimental tools, and plugin/MCP surfaces with a pragmatic runtime registry.

Key evidence paths:

- `packages/opencode/src/tool/registry.ts`
- `packages/opencode/src/tool/tool.ts`
- `packages/opencode/src/mcp/index.ts`
- `packages/opencode/src/command/index.ts`

Its extensibility is tightly connected to execution modes (`run`, TUI, serve/attach), which makes automation customization practical.

## Pi

Pi treats extensibility as a first-class product shape: extensions, skills, prompt templates, themes, and package installation are built into the CLI workflow.

```ts
// packages/coding-agent/src/index.ts (excerpted surface)
export { discoverAndLoadExtensions, createExtensionRuntime } from './core/extensions/index.js'
export { loadSkills, loadSkillsFromDir } from './core/skills.js'
```

```ts
// packages/coding-agent/src/main.ts (package commands)
// install / remove / update / list extension packages
```

Key evidence paths:

- `packages/coding-agent/src/core/extensions/index.ts`
- `packages/coding-agent/src/core/skills.ts`
- `packages/coding-agent/src/main.ts`
- `packages/coding-agent/README.md`

Pi is a strong fit for teams that want “compose your own harness behavior” without maintaining a fork.

## Claude Code repo and Copilot CLI repo

Both repos expose meaningful integration surfaces, but the full runtime extension loader path is not fully visible in the analyzed snapshots.

- Claude Code repo: rich plugin/hook content.
- Copilot CLI repo: docs and distribution assets.

## Bottom Line

If extension depth and source-level control are priorities, Gemini CLI and Pi are especially strong in composability, while Codex and OpenCode provide robust extensibility with more explicit runtime guardrails.
