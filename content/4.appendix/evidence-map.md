# Evidence Map

This appendix maps major claims to concrete repository files.

## Codex

- Native launcher model: `codex-cli/bin/codex.js:1-176`
- CLI flags + startup config mapping: `codex-rs/tui/src/cli.rs:7-115`, `codex-rs/tui/src/lib.rs:126-145`
- Tool orchestrator + sandbox policy: `codex-rs/core/src/tools/orchestrator.rs:1-169`, `codex-rs/core/src/tools/sandboxing.rs:52-180`
- Exec policy model: `codex-rs/core/src/exec_policy.rs:81-193`
- App-server headless boundary: `codex-rs/app-server/src/lib.rs:174-211`

## Gemini CLI

- Main entry + mode branching: `packages/cli/src/gemini.tsx:294-753`
- Non-interactive runtime: `packages/cli/src/nonInteractiveCli.ts:92-520`
- Policy engine + config precedence: `packages/core/src/policy/policy-engine.ts:29-218`, `packages/core/src/policy/config.ts:172-259`
- Tool registry + scheduler: `packages/core/src/tools/tool-registry.ts:126-370`, `packages/core/src/scheduler/scheduler.ts:60-430`
- Streaming output protocol: `packages/core/src/output/stream-json-formatter.ts:15-80`

## OpenCode

- CLI command framework: `packages/opencode/src/index.ts:1-159`
- Non-interactive run + permission handling: `packages/opencode/src/cli/cmd/run.ts:327-510`
- Permission system: `packages/opencode/src/permission/next.ts:1-176`
- MCP subsystem: `packages/opencode/src/mcp/index.ts:1-360`
- Server/event stream model: `packages/opencode/src/server/server.ts:1-354`

## Claude Code repo

- Marketplace + plugin surface: `.claude-plugin/marketplace.json:1-148`, `plugins/README.md:49-61`
- Hookify implementation: `plugins/hookify/hooks/pretooluse.py:35-60`, `plugins/hookify/core/rule_engine.py:35-90`
- Security hook: `plugins/security-guidance/hooks/security_reminder_hook.py:31-276`

## Copilot CLI repo

- Installer logic: `install.sh:14-166`
- Release packaging workflow: `.github/workflows/winget.yml:1-44`
- Feature statements and scope claims: `README.md`, `changelog.md`
