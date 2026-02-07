# Evidence Map

This appendix maps major claims to concrete repository files.

## Codex

- Launcher and native handoff: `codex-cli/bin/codex.js`
- TUI/app-server entrypoints: `codex-rs/tui/src/main.rs`, `codex-rs/app-server/src/main.rs`
- Tool orchestration and sandboxing: `codex-rs/core/src/tools/orchestrator.rs`, `codex-rs/core/src/tools/sandboxing.rs`
- Execution policy model: `codex-rs/core/src/exec_policy.rs`
- MCP integration: `codex-rs/core/src/mcp_tool_call.rs`, `codex-rs/core/src/mcp_connection_manager.rs`

## Gemini CLI

- CLI and non-interactive paths: `packages/cli/src/gemini.tsx`, `packages/cli/src/nonInteractiveCli.ts`
- Policy subsystem: `packages/core/src/policy/policy-engine.ts`, `packages/core/src/policy/config.ts`
- Scheduler/tool execution: `packages/core/src/scheduler/scheduler.ts`, `packages/core/src/scheduler/tool-executor.ts`
- Tool and extension loading: `packages/core/src/tools/tool-registry.ts`, `packages/core/src/utils/extensionLoader.ts`
- Structured output: `packages/core/src/output/json-formatter.ts`, `packages/core/src/output/stream-json-formatter.ts`

## OpenCode

- CLI command framework: `packages/opencode/src/index.ts`
- Non-interactive run behavior: `packages/opencode/src/cli/cmd/run.ts`
- Permission engine: `packages/opencode/src/permission/next.ts`
- Tool registry and built-ins: `packages/opencode/src/tool/registry.ts`, `packages/opencode/src/tool/*.ts`
- Server/attach runtime: `packages/opencode/src/server/server.ts`, `packages/opencode/src/cli/cmd/tui/attach.ts`

## Pi

- Main mode switching: `packages/coding-agent/src/main.ts`
- CLI flags and mode definitions: `packages/coding-agent/src/cli/args.ts`
- Print/json mode: `packages/coding-agent/src/modes/print-mode.ts`
- RPC protocol and runtime: `packages/coding-agent/src/modes/rpc/rpc-mode.ts`, `packages/coding-agent/src/modes/rpc/rpc-types.ts`
- Agent loop internals: `packages/agent/src/agent-loop.ts`, `packages/agent/src/agent.ts`
- Provider registry: `packages/ai/src/providers/register-builtins.ts`
- Auth storage and OAuth refresh locking: `packages/coding-agent/src/core/auth-storage.ts`
- Session persistence model: `packages/coding-agent/src/core/session-manager.ts`, `packages/coding-agent/src/core/agent-session.ts`
- Sandbox executor model (`mom` package): `packages/mom/src/sandbox.ts`, `packages/mom/docs/sandbox.md`

## Claude Code repo

- Plugin marketplace metadata: `.claude-plugin/marketplace.json`
- Hook/plugin assets: `plugins/*`
- Hookify internals: `plugins/hookify/hooks/pretooluse.py`, `plugins/hookify/core/rule_engine.py`
- Security guidance hook: `plugins/security-guidance/hooks/security_reminder_hook.py`

## Copilot CLI repo

- Installer/runtime distribution path: `install.sh`
- Release packaging workflow: `.github/workflows/winget.yml`
- Public feature and release surface: `README.md`, `changelog.md`
