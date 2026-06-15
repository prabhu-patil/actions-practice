# GitHub Actions — Hands-On Lesson Index

A from-scratch to advanced path. Each lesson = one new concept, built into this repo.

## Basics ✅
| # | Lesson | Key concept |
|---|--------|-------------|
| 1 | First workflow | `name`, `on`, `jobs`, `steps`, runners |
| 2 | Anatomy + triggers + real CI | `uses:` vs `run:`, checkout, setup-node, `npm ci` |
| 3 | Break a test | exit code 0 = pass, non-zero = fail |
| 4 | Pull Requests | branches, PR checks, `paths` filters |
| 5 | Matrix builds | `strategy.matrix`, run across versions |
| 6 | Secrets | `secrets.NAME`, masking, `env:` |
| 7 | Caching & artifacts | `cache: 'npm'`, upload/download files |

## Core CI/CD
| # | Lesson | Key concept |
|---|--------|-------------|
| 8 | Multi-job pipelines | `needs:`, jobs depending on each other |
| 9 | Conditionals | `if:`, `success()`/`failure()`, skip logic |
| 10 | Reusable workflows | `workflow_call`, call one workflow from another |
| 11 | Composite actions | build your own action from steps |
| 12 | Environments + deploy (CD) | `environment:`, approval gates, real deploy |
| 13 | Scheduled & manual | `schedule:` (cron), `workflow_dispatch` inputs |
| 14 | Permissions & security | `permissions:`, `GITHUB_TOKEN`, pinning by SHA |
| 15 | Capstone | full CI/CD: test → build → deploy to GitHub Pages |

## Advanced / Professional
| # | Lesson | Key concept |
|---|--------|-------------|
| 16 | Self-hosted runners | Run jobs on your own machine/server |
| 17 | Docker jobs & services | `container:`, `services:` (real Postgres/Redis in tests) |
| 18 | Build & push Docker images | `docker/build-push-action`, publish to GHCR/Docker Hub |
| 19 | Advanced matrices | `include`/`exclude`, `fail-fast`, OS × version combos |
| 20 | Concurrency & cancellation | `concurrency:` — auto-cancel old runs |
| 21 | Caching deep-dive | Custom `actions/cache`, cache keys, layer cache |
| 22 | OIDC / keyless deploy | Deploy to AWS/Azure/GCP with no stored secrets |
| 23 | Releases & versioning | Auto-create Releases, tags, changelogs |
| 24 | Monorepo strategies | Path-based jobs, build only what changed |
| 25 | Reusable workflow libraries | Org-wide shared workflows, versioning actions |
| 26 | Security hardening | SHA-pinning, least-privilege, `pull_request_target` |
| 27 | Debugging & optimization | `ACTIONS_STEP_DEBUG`, speeding up pipelines |
| 28 | Marketplace actions | Publish your own action publicly |

---
**Progress: 15 / 28 complete.** 🎉 Core CI/CD done — site live at https://prabhu-patil.github.io/actions-practice/
