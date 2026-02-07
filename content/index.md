---
seo:
  title: Agent Harness Comparison
  description: The best place to learn how popular coding-agent CLIs differ at the source-code level.
---

::u-page-hero
#title
Agent Harness Comparison

#description
**Mission:** become the best place to learn the real technical differences between today’s popular coding-agent CLIs.

This site compares implementation choices you can verify in code: runtime architecture, tool execution, permissions, auth models, extension systems, and non-interactive automation paths.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /overview/executive-summary
  trailing-icon: i-lucide-arrow-right
  ---
  Start With Executive Summary
  :::

  :::u-button
  ---
  color: neutral
  variant: outline
  size: xl
  to: /comparative-analysis/capability-matrix
  ---
  See Full Matrix
  :::
::

::u-page-section
#title
What You Will Learn

#description
We focus on **code-visible behavior**, not marketing checklists. Every major claim maps to a concrete file in the analyzed repositories.

#features
  :::u-page-feature
  ---
  title: Architecture, Not Hype
  description: Understand how each CLI is built internally, where policy is enforced, and what is truly inspectable.
  to: /comparative-analysis/runtime-architecture
  icon: i-lucide-cpu
  ---
  :::

  :::u-page-feature
  ---
  title: Automation Reality Check
  description: Compare text mode, JSON mode, RPC/server mode, and how each tool behaves in non-interactive workflows.
  to: /comparative-analysis/headless-and-automation
  icon: i-lucide-terminal-square
  ---
  :::

  :::u-page-feature
  ---
  title: Safety and Permissions
  description: See how approvals, sandboxing, and execution controls are actually modeled in source.
  to: /comparative-analysis/safety-and-permissions
  icon: i-lucide-shield-check
  ---
  :::

  :::u-page-feature
  ---
  title: Deep Dives Per Repo
  description: Jump into Codex, Gemini CLI, OpenCode, Pi, Claude Code repo, and Copilot CLI repo with file-level evidence.
  to: /repository-deep-dives/pi-mono
  icon: i-lucide-file-search
  ---
  :::
::

::u-page-section
#title
Compared Repositories

#description
The analysis currently covers these six repositories:

```text
openai/codex
google-gemini/gemini-cli
sst/opencode
badlogic/pi-mono
anthropics/claude-code
github/copilot-cli
```

Read [Methodology](/overview/methodology) for inclusion rules and [Evidence Map](/appendix/evidence-map) for source tracing.
::

::u-page-section
#title
How To Read This Site

#description
If you are evaluating an agent harness for your team, this sequence gives the fastest signal:

1. Read [Executive Summary](/overview/executive-summary) to understand the high-level split between fully inspectable runtimes and surface repos.
2. Use [Capability Matrix](/comparative-analysis/capability-matrix) to narrow candidates by required traits.
3. Go deep with [Runtime Architecture](/comparative-analysis/runtime-architecture) and [Safety and Permissions](/comparative-analysis/safety-and-permissions).
4. Validate assumptions in [Repository Deep Dives](/repository-deep-dives/codex) and [Evidence Map](/appendix/evidence-map).
::

::note
Snapshot window: **February 6-7, 2026**.
See [Repository Snapshots](/appendix/repo-snapshots) for exact SHAs.
::
