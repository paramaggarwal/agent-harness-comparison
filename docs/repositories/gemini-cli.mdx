# Gemini CLI (`google-gemini/gemini-cli`) Deep Dive

## Runtime Composition

Gemini CLI is a TypeScript monorepo with clear separation between CLI and core:

- CLI app: `packages/cli/src/gemini.tsx:294-753`
- Core runtime services across policy, scheduler, tools, hooks, agents: `packages/core/src/*`

## Entrypoints and Modes

- Main bootstrap path and mode selection: `packages/cli/src/gemini.tsx:294-753`
- Non-interactive execution path: `packages/cli/src/gemini.tsx:668-749`
- Non-interactive command loop implementation: `packages/cli/src/nonInteractiveCli.ts:92-520`
- CLI output format option (`text|json|stream-json`): `packages/cli/src/config/config.ts:246-307`

## Auth and Provider Flows

- Auth type model (OAuth/API key/Vertex/etc.): `packages/core/src/core/contentGenerator.ts:51-57`
- Non-interactive auth validation behavior: `packages/cli/src/validateNonInterActiveAuth.ts:20-76`
- Auth mode checks for API key/Vertex requirements: `packages/cli/src/config/auth.ts:10-45`
- Provider routing in content generator: `packages/core/src/core/contentGenerator.ts:66-188`

## Safety and Policy

- Policy engine matching/precedence logic: `packages/core/src/policy/policy-engine.ts:29-218`
- Policy config precedence definitions: `packages/core/src/policy/config.ts:172-259`
- Scheduler confirmation/policy gate path: `packages/core/src/scheduler/scheduler.ts:60-430`
- Sandbox settings and strategy: `packages/cli/src/config/sandboxConfig.ts:36-108`
- Sandbox execution helpers (macOS/container variants): `packages/cli/src/utils/sandbox.ts:38-240`

## Tool System and Extensibility

- Tool registry (built-in, discovered, MCP): `packages/core/src/tools/tool-registry.ts:126-370`
- Discovered tool execution and error shaping: `packages/core/src/tools/tool-registry.ts:28-123`
- Tool executor lifecycle and output handling: `packages/core/src/scheduler/tool-executor.ts:36-200`
- MCP client manager lifecycle: `packages/core/src/tools/mcp-client-manager.ts:36-385`
- Extension loading and refresh sequencing: `packages/core/src/utils/extensionLoader.ts:46-186`
- Hook system event pipeline: `packages/core/src/hooks/hookSystem.ts:41-360`

## Agents and Skills

- Agent markdown loader and validation: `packages/core/src/agents/agentLoader.ts:33-214`
- Local subagent executor with recursion prevention: `packages/core/src/agents/local-executor.ts:58-154`
- Skills precedence and trust-folder behavior: `packages/core/src/skills/skillManager.ts:39-121`

## Non-Interactive Output Protocol

- Output event/schema types: `packages/core/src/output/types.ts:7-90`
- JSON formatter: `packages/core/src/output/json-formatter.ts:14-60`
- Streaming JSON formatter: `packages/core/src/output/stream-json-formatter.ts:15-80`

## Distinctive Engineering Characteristics

1. Service-oriented TypeScript architecture with explicit scheduler/policy separation.
2. First-class structured stream output for automation (`stream-json`).
3. Broad extensibility mesh (extensions + hooks + skills + MCP + subagents).
