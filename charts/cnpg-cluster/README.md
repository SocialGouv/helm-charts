# cnpg-cluster

A Helm chart to create cloudnative-pg.io clusters

originally based on [enix's cnpg-cluster helm chart](https://github.com/enix/helm-charts/tree/master/charts/cnpg-cluster)

## TL;DR;

```bash
$ helm repo add socialgouv https://socialgouv.github.io/helm-charts
$ helm install my-release socialgouv/cnpg-cluster
```

## Installing the Chart

To install the chart with the release name `my-release`:

```bash
$ helm install my-release socialgouv/cnpg-cluster
```

The command deploys a CNPG cluster on the Kubernetes cluster in the default configuration. The [Chart Values](#chart-values) section lists the parameters that can be configured during installation.

> **Tip**: List all releases using `helm list`

## Uninstalling the Chart

To uninstall/delete the `my-release` deployment:

```bash
$ helm delete my-release
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| backup.enabled | bool | `false` | Enable backups |
| backup.retentionPolicy | string | `"30d"` | RetentionPolicy is the retention policy to be used for backups and WALs (i.e. '60d'). The retention policy is expressed in the form of XXu where XX is a positive integer and u is in [dwm] - days, weeks, months. |
| backup.schedule | CRON string | `"0 0 0 * * 0"` | Scheduled backups CRON |
| backup.barmanObjectStore | object | `{}` | Object store credentials and access config. See: https://cloudnative-pg.io/documentation/1.20/backup_recovery/ |
| clusterExtraSpec | object | `{}` | Extra configuration for Cluster resource. See: https://cloudnative-pg.io/documentation/1.17/api_reference/#clusterspec |
| extraAffinity | object | `{}` | Extra configuration for Cluster's affinity resource, see: https://cloudnative-pg.io/documentation/1.17/api_reference/#AffinityConfiguration |
| fullnameOverride | string | `""` | String to fully override cnpg-cluster.fullname template with a string |
| image.pullPolicy | string | `"IfNotPresent"` | Postgres image pull policy |
| image.repository | string | `"ghcr.io/cloudnative-pg/postgresql"` | Postgres image repository. Keep empty to use operator's default image. See: https://cloudnative-pg.io/documentation/1.17/operator_capability_levels/#override-of-operand-images-through-the-crd |
| image.tag | string | `""` | Override the Postgres image tag |
| imagePullSecrets | list | `[]` | Docker-registry secret names as an array |
| nameOverride | string | `""` | String to partially override cnpg-cluster.fullname template with a string (will prepend the release name) |
| nodeSelector | object | `{}` | Postgres instances labels for pod assignment |
| persistence.pvcTemplate | object | `{}` | Template to be used to generate the Persistent Volume Claim |
| persistence.resizeInUseVolumes | string | `nil` | Resize existent PVCs, defaults to true	 |
| persistence.size | string | `"1Gi"` | Size of each instance storage volume |
| persistence.storageClass | string | `""` | StorageClass to use for database data, Applied after evaluating the PVC template, if available. If not specified, generated PVCs will be satisfied by the default storage class |
| poolers | object | `{}` | Poller resources to create for this Cluster resource See: https://cloudnative-pg.io/documentation/1.17/api_reference/#PoolerSpec |
| registryCredentials | string | `nil` | Create a docker-registry secret and use it as imagePullSecrets |
| instances | int | `1` | Number of Postgres instances in the cluster |
| resources | object | `{}` | CPU/Memory resource requests/limits |
| scheduledBackups | object | `{}` | ScheduledBackup resources to create for this Cluster resource See: https://cloudnative-pg.io/documentation/1.17/api_reference/#ScheduledBackupSpec |
| tolerations | list | `[]` | Postgres instances labels for tolerations pod assignment |

## License

Copyright (c) 2022 SocialGouv

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
