# Copilot CLI Repo (`github/copilot-cli`) Deep Dive

## What Is Present

This repository snapshot is mainly:

- User docs and changelog
- Installer script
- Packaging/update workflow metadata

Key files:

- `README.md`
- `changelog.md`
- `install.sh`
- `.github/workflows/winget.yml`

## Installer and Update Behavior (Code-Visible)

- Platform detection and Windows winget fallback: `install.sh:14-27`
- Arch detection (x64/arm64): `install.sh:30-35`
- Version resolution behavior (`latest`, `prerelease`, explicit): `install.sh:37-63`
- Download, checksum validation, install, PATH guidance: `install.sh:66-166`
- WinGet publish/update automation on release: `.github/workflows/winget.yml:1-44`

## What Is Not Present

No full runtime implementation files were found for:

- Agent loop internals
- Tool invocation orchestration
- Permission/sandbox machinery
- Session state engine
- Plugin/MCP loader internals

## Conclusion

From this repository alone, architecture-level claims about Copilot CLI internals cannot be directly code-verified beyond installation/distribution/update mechanics and feature statements in documentation.
