# Capability Matrix (Code-Verified)

This matrix is a navigation aid, not the full story. Use it to orient quickly, then read the corresponding deep-dive section before making decisions.

| Dimension | Codex | Gemini CLI | OpenCode (`sst/opencode`) | Pi (`badlogic/pi-mono`) | Claude Code repo | Copilot CLI repo |
| --- | --- | --- | --- | --- | --- | --- |
| Core runtime source visible | Yes (Rust core + JS shim) | Yes (TS monorepo) | Yes (TS/Bun runtime) | Yes (TS monorepo runtime) | No (plugin/hook surface) | No (installer/docs surface) |
| Explicit policy or permission enforcement code | Yes | Yes | Yes | Partial (tool/runtime controls visible; full policy engine less centralized) | Not visible in this repo | Not visible in this repo |
| Sandbox implementation visible in analyzed runtime path | Yes | Yes | Permission-centric runtime controls | Visible in `mom` package (`host` / `docker`) | Not visible in this repo | Not visible in this repo |
| MCP integration code visible | Yes | Yes | Yes | Not first-class in analyzed core path | Mentioned via plugin ecosystem | Mentioned in docs |
| Structured non-interactive output | App-server/headless path | `json` + `stream-json` | `run` + server/attach flows | `--mode json` + RPC mode | Not visible in this repo | Not visible in this repo |
| Session persistence internals visible | Yes | Yes | Yes | Yes (JSONL + branch tree) | Not visible in this repo | Not visible in this repo |
| Extensibility mechanism in code | Skills + MCP + dynamic tools | Extensions + hooks + skills + MCP | MCP + plugins + command synthesis | Extensions + skills + prompt templates + themes + packages | Strong plugin assets, core runtime loader not visible | Runtime plugin internals not visible |

## How To Interpret “Not Visible in this repo”

It means this specific repository snapshot does not provide enough implementation evidence for architecture-level verification. It does **not** necessarily mean the product lacks that feature.

## Fast Takeaway

If your team requires full source-level inspection of the harness internals, the strongest candidates in this data set are:

1. Codex
2. Gemini CLI
3. OpenCode
4. Pi

Use [Runtime Architecture](/comparative-analysis/runtime-architecture) next for practical design trade-offs.
