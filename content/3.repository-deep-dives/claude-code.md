# Claude Code Repo (`anthropics/claude-code`) Deep Dive

The analyzed `claude-code` repository provides rich extension and hook artifacts, but does not expose a full core runtime implementation equivalent to the inspectable harness repos in this comparison.

## What Is Clearly Visible

The repo has strong plugin ecosystem signals:

- Marketplace metadata: `.claude-plugin/marketplace.json`
- Plugin bundles and content: `plugins/*`
- Hook examples and scripts: `examples/*`, `plugins/*/hooks/*`

Representative hook-related files:

- `plugins/hookify/hooks/hooks.json`
- `plugins/hookify/hooks/pretooluse.py`
- `plugins/hookify/hooks/posttooluse.py`
- `plugins/security-guidance/hooks/security_reminder_hook.py`

## What Is Not Equivalent To A Full Runtime Audit

In this snapshot, no complete implementation path was found for:

- Core agent loop orchestration.
- Tool scheduler/executor runtime.
- End-to-end policy/approval engine.
- Session/state persistence internals at the same depth as Codex/Gemini/OpenCode/Pi.

## Why This Still Matters

Even without full harness internals, this repo is still valuable for:

1. Understanding hook conventions and extension packaging.
2. Studying guardrail-style plugin patterns.
3. Learning ecosystem integration shape around Claude Code.

## Practical Read

Treat this repository as an extension and operations surface in this analysis, not as a fully inspectable runtime implementation source.
