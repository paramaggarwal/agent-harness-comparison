# Executive Summary

## Bottom Line

For engineering organizations that care about inspectability and local control of agent behavior, the repositories split into:

- **Inspectable runtime implementations**: Codex, Gemini CLI, OpenCode
- **Surface-level/open wrapper repos**: Claude Code repo, Copilot CLI repo

## Most Material Technical Differences

1. **Runtime implementation depth exposed in source**
- Codex: large Rust core plus thin JS launcher.
- Gemini CLI: TypeScript monorepo with explicit scheduler/policy/hook/agent modules.
- OpenCode: TypeScript/Bun runtime with CLI, server, MCP, provider abstractions.
- Claude/Copilot repos: no full core runtime in the analyzed repos.

2. **Execution safety model expression**
- Codex: explicit sandbox + approval orchestration and exec policy machinery.
- Gemini CLI: policy engine + sandbox config + confirmation bus and scheduler enforcement.
- OpenCode: permission-rule model integrated into tools/session execution.

3. **Headless and integration posture**
- Codex: TUI + app-server mode.
- Gemini CLI: first-class non-interactive JSON and streaming JSON event output.
- OpenCode: `run` + `serve` + attach/client-server model.

4. **Extensibility primitives**
- Codex: MCP, dynamic tools, skills, app-server tooling boundaries.
- Gemini CLI: MCP + extension manager + hooks + subagents + skills.
- OpenCode: MCP (remote/local), skills as commands/tooling, configurable agents.

## Practical Takeaway

If your priority is source-level auditability of agent internals, the strongest evidence comes from Codex, Gemini CLI, and OpenCode. Claude Code and Copilot CLI repos still provide useful integration surfaces, but the full runtime internals are not available in those specific repositories.
