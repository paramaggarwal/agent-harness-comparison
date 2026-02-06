# Headless, Non-Interactive, and Automation Paths

## Codex

- Interactive TUI is primary.
- App-server binary provides a headless integration path over stdio or websocket transports.
- Supports automation embedding scenarios without requiring the terminal UI loop.

## Gemini CLI

- Explicit non-interactive flow with structured output options:
  - `text`
  - `json`
  - `stream-json` (JSONL event stream)
- Tool calls, errors, and terminal results can be consumed programmatically in scripts.

## OpenCode

- `run` command for non-interactive prompts and scripted operation.
- `serve` command runs a headless server; `attach` connects to remote servers.
- Internal architecture allows in-process fetch for local execution and HTTP/SSE for remote client scenarios.

## Claude Code repo / Copilot CLI repo

- These repositories do not expose full non-interactive runtime internals in code.
- Only extension/docs/installer surfaces are directly inspectable here.

## Practical Engineering Impact

If your team needs stable machine-consumable event pipelines, Gemini CLI and OpenCode expose explicit non-interactive protocols in source. Codex exposes a stronger app-server boundary. Claude/Copilot runtime automation internals cannot be fully validated from these specific repos.
