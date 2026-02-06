# Capability Matrix (From Repository Code)

| Dimension | Codex | Gemini CLI | OpenCode (`sst/opencode`) | Claude Code repo | Copilot CLI repo |
| --- | --- | --- | --- | --- | --- |
| Core runtime source in repo | Yes (Rust core + JS shim) | Yes (TS monorepo) | Yes (TS/Bun runtime + native packaging wrapper) | No (plugin/hooks/scripts surface) | No (installer/docs/workflows surface) |
| Explicit policy/approval engine | Yes | Yes | Yes | Not visible in this repo | Not visible in this repo |
| Sandbox primitives in runtime | Yes (platform-specific) | Yes (macOS + container options) | Permission model visible; sandboxing model mostly permission/tool based | Not visible in this repo | Not visible in this repo |
| MCP integration code | Yes | Yes | Yes | Plugin docs mention MCP patterns | README claims MCP support, runtime not shown |
| Subagent architecture in code | Yes | Yes | Yes (agent profiles/subagents) | Plugin content includes agents (markdown), runtime loader not shown | Not visible in this repo |
| Non-interactive structured output | Yes (app-server/headless path) | Yes (`json`, `stream-json`) | Yes (`run` and server/event flows) | Not visible in this repo | Not visible in this repo |
| Session persistence implementation visible | Yes | Yes | Yes | Not visible in this repo | Not visible in this repo |

## Notes

- “Not visible in this repo” means no checked-in implementation path was found for that subsystem.
- This is not a claim that the product lacks the feature; it only means the implementation is not exposed in the analyzed repository.
