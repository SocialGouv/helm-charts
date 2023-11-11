# SocialGouv Helm Charts Registry ☸️

This repo manage some of our shared [Helm](https://helm.sh) Charts.

See on [GitHub](https://github.com/SocialGouv/helm-charts).

## Helm charts

![GitHub tag (with filter)](https://img.shields.io/github/v/tag/socialgouv/helm-charts)

| chart                                         | descriptions                                                                              |
| --------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [cnpg-cluster](./charts/cnpg-cluster)         | [cloudnative-pg.io](https://cloudnative-pg.io) clusters                                   |
| [maildev](./charts/maildev)                   | [maildev](https://github.com/maildev/maildev) SMTP                                        |
| [buildkit-service](./charts/buildkit-service) | [buildkit](https://github.com/moby/buildkit)                                              |
| [pgweb](./charts/pgweb)                       | [pgweb](https://hub.docker.com/r/sosedoff/pgweb)                                          |
| [clamav](./charts/clamav)                     | [ClamAV](https://www.clamav.net/) + Rest API                                              |
| [vaultwarden](./charts/vaultwarden)           | [VaultWarden](https://github.com/dani-garcia/vaultwarden) a BitWarden rust implementation |

Issues and contributions welcome 🤗

## Lint

```
ct lint --all --config ct.yaml --validate-maintainers=false
```

## Testing

update unit-tests snapshots :

```
helm unittest charts/* -u
```
