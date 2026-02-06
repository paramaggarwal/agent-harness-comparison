# Claude Code Repo (`anthropics/claude-code`) Deep Dive

## What Is Present

This repository snapshot primarily exposes:

- Plugin marketplace metadata: `.claude-plugin/marketplace.json:1-148`
- Plugin content (commands/agents/skills/hooks): `plugins/*`
- Example hooks/settings: `examples/*`
- Utility scripts (issue automation, maintenance): `scripts/*`

## What Is Not Present

No full core runtime implementation path was found for:

- Main CLI command loop
- Tool orchestration runtime
- Model execution scheduler
- Core state/session runtime internals

So this repo is best interpreted as an extension/content + operations surface, not a full runtime source tree.

## Proven Extensibility Surfaces in Code

### Hook execution examples

- Hookify event hooks (PreToolUse/PostToolUse/Stop/UserPromptSubmit): `plugins/hookify/hooks/hooks.json:1-48`
- Hookify pre-tool logic: `plugins/hookify/hooks/pretooluse.py:35-60`
- Hookify post-tool logic: `plugins/hookify/hooks/posttooluse.py:30-53`
- Rule loading/evaluation engine paths: `plugins/hookify/core/config_loader.py:198-275`, `plugins/hookify/core/rule_engine.py:35-90`

### Security guidance hook

- Hook registration for write/edit tools: `plugins/security-guidance/hooks/hooks.json:1-15`
- Security pattern checks and block response path: `plugins/security-guidance/hooks/security_reminder_hook.py:31-276`

### Other hook-driven behavior

- Explanatory output style session hook: `plugins/explanatory-output-style/hooks/hooks.json:1-14`
- Learning output style session hook: `plugins/learning-output-style/hooks/hooks.json:1-14`
- Ralph loop stop-hook behavior: `plugins/ralph-wiggum/hooks/stop-hook.sh:9-175`

## Conclusion

The Claude Code repository is rich for extension pattern analysis (plugins/hooks/skills), but does not provide enough core runtime code to perform a full internal architecture audit equivalent to Codex/Gemini/OpenCode.
