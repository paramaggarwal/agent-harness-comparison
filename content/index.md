---
seo:
  title: CLI Agent Internals Comparison (Code-Level)
  description: Source-level technical comparison of Codex, Gemini CLI, OpenCode, Claude Code repo, and Copilot CLI repo.
---

::u-page-hero
#title
CLI Agent Internals Comparison (Code-Level)

#description
Source-level technical comparison of what these repositories actually expose in code:
`openai/codex`, `google-gemini/gemini-cli`, `sst/opencode`, `anthropics/claude-code`, and `github/copilot-cli`.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /overview/executive-summary
  trailing-icon: i-lucide-arrow-right
  ---
  Read Executive Summary
  :::

  :::u-button
  ---
  color: neutral
  variant: outline
  size: xl
  to: /comparative-analysis/capability-matrix
  ---
  View Capability Matrix
  :::
::

::u-page-section
#title
What this documentation covers

#description
This report is structured for fast technical review, from high-level outcomes to file-level evidence.

#features
  :::u-page-feature
  ---
  title: Overview
  description: Start with the executive summary and methodology to understand scope, evidence standards, and assumptions.
  to: /overview/executive-summary
  icon: i-lucide-compass
  ---
  :::

  :::u-page-feature
  ---
  title: Comparative Analysis
  description: Compare runtime architecture, auth/provider models, safety systems, tools, and automation paths side by side.
  to: /comparative-analysis/runtime-architecture
  icon: i-lucide-git-compare
  ---
  :::

  :::u-page-feature
  ---
  title: Repository Deep Dives
  description: Inspect per-repository technical details for Codex, Gemini CLI, OpenCode, Claude Code repo, and Copilot CLI repo.
  to: /repository-deep-dives/codex
  icon: i-lucide-file-code
  ---
  :::

  :::u-page-feature
  ---
  title: Appendix and Evidence
  description: Trace claims to concrete files, snapshot SHAs, and explicit limitations of repository-only visibility.
  to: /appendix/evidence-map
  icon: i-lucide-folder-open
  ---
  :::
::

::note
Analysis snapshot date: **February 6, 2026**.
See [Repository Snapshots](/appendix/repo-snapshots) for exact commit SHAs.
::
