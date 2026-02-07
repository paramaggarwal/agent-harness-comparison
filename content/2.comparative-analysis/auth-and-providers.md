# Auth and Provider Model

Provider abstraction determines how portable a harness is across model vendors, subscription channels, and enterprise auth constraints.

## Codex

Codex separates local auth storage concerns from MCP OAuth lifecycle handling.

Key evidence paths:

- `codex-rs/core/src/auth/storage.rs`
- `codex-rs/rmcp-client/src/oauth.rs`

This separation is useful when local account auth and MCP server auth evolve independently.

## Gemini CLI

Gemini CLI explicitly supports multiple auth pathways (OAuth/API key/Vertex variants) and validates non-interactive auth behavior.

Key evidence paths:

- `packages/core/src/core/contentGenerator.ts`
- `packages/cli/src/config/auth.ts`
- `packages/cli/src/validateNonInterActiveAuth.ts`

Provider routing is explicit, making mode-specific behavior easier to reason about.

## OpenCode

OpenCode implements a provider-agnostic layer with credential precedence and local persistence behavior.

Key evidence paths:

- `packages/opencode/src/provider/provider.ts`
- `packages/opencode/src/auth/index.ts`

This is a practical multi-provider design with clear local credential handling.

## Pi

Pi has both provider registry and credential storage code visible in-repo.

```ts
// packages/ai/src/providers/register-builtins.ts
registerApiProvider({ api: 'openai-responses', ... })
registerApiProvider({ api: 'anthropic-messages', ... })
registerApiProvider({ api: 'google-gemini-cli', ... })
```

```ts
// packages/coding-agent/src/core/auth-storage.ts
writeFileSync(this.authPath, JSON.stringify(this.data, null, 2), 'utf-8')
chmodSync(this.authPath, 0o600)
```

Pi also includes OAuth flows in `packages/ai/src/cli.ts` and token-refresh locking in `auth-storage.ts`, which is a meaningful implementation detail for multi-process usage.

## Claude Code repo and Copilot CLI repo

Auth guidance is present in documentation surfaces, but complete internal auth orchestration is not fully visible in these repository snapshots.

## Practical Advice

If provider portability and source-level credential lifecycle visibility are core requirements, Codex, Gemini CLI, OpenCode, and Pi all provide materially inspectable auth/provider internals in this comparison.
