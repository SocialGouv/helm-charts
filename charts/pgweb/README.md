# pgweb

A Helm chart for pgweb

![Version: 1.8.4](https://img.shields.io/badge/Version-1.8.4-informational?style=flat-square)

## Add repository

`helm repo add socialgouv https://socialgouv.github.ios/helm-charts`

## Install

```sh
helm install pgweb socialgouv/pgweb
```

## Helmfile

```yaml
releases:
- name: pgweb
  chart: socialgouv/pgweb
  namespace: default
  values:
  - ingress:
      enabled: true
      annotations:
        kubernetes.io/ingress.class: nginx
      hosts:
      - host: pgweb.your-domain.com
        paths:
        - path: /
          pathType: Prefix
      tls:
      - secretName: your-domain-com-tls
        hosts:
        - pgweb.your-domain.com
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| affinity | object | `{}` |  |
| autoscaling | object | `{"enabled":false,"maxReplicas":100,"minReplicas":1,"targetCPUUtilizationPercentage":80}` | Horizontal Pod autoscaler |
| env | list | `[]` |  |
| extraArgs | list | `[]` |  |
| fullnameOverride | string | `""` |  |
| image.pullPolicy | string | `"IfNotPresent"` |  |
| image.repository | string | `"sosedoff/pgweb"` |  |
| image.tag | string | `""` | Overrides the image tag whose default is the chart appVersion. |
| imagePullSecrets | list | `[]` |  |
| ingress.annotations | object | `{}` |  |
| ingress.className | string | `""` |  |
| ingress.enabled | bool | `false` |  |
| ingress.hosts[0].host | string | `"chart-example.local"` |  |
| ingress.hosts[0].paths[0].path | string | `"/"` |  |
| ingress.hosts[0].paths[0].pathType | string | `"ImplementationSpecific"` |  |
| ingress.tls | list | `[]` |  |
| nameOverride | string | `""` |  |
| nodeSelector | object | `{}` |  |
| podAnnotations | object | `{}` |  |
| podSecurityContext | object | `{}` |  |
| replicaCount | int | `1` | number of replicas in the pgweb deployment |
| resources | object | `{}` | custom resources |
| securityContext | object | `{}` |  |
| service | object | `{"port":80,"type":"ClusterIP"}` | customize pgweb service |
| serviceAccount.annotations | object | `{}` | Annotations to add to the service account |
| serviceAccount.create | bool | `true` | Specifies whether a service account should be created |
| serviceAccount.name | string | `""` | If not set and create is true, a name is generated using the fullname template |
| tolerations | list | `[]` |  |
