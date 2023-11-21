# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## 1.18.4 (2023-11-21)

## 1.18.3 (2023-11-16)


### Bug Fixes

* **cnpg:** upgrade s3-client image to abort on dump error ([b7b85fe](https://github.com/SocialGouv/helm-charts/commit/b7b85fe01dd04483eb47aaae9c4d31a5b22b8a62))

## 1.18.2 (2023-11-14)


### Bug Fixes

* service name ([d21971a](https://github.com/SocialGouv/helm-charts/commit/d21971ad4723627eda84fbcd1b6d953ae1091bbe))

## 1.18.1 (2023-11-14)


### Bug Fixes

* clusterIP svc for clamav ([#56](https://github.com/SocialGouv/helm-charts/issues/56)) ([682a56c](https://github.com/SocialGouv/helm-charts/commit/682a56c96926db66d70ac0a105d83b295acfbd00))

## 1.18.0 (2023-11-12)


### Features

* **cnpg-cluster:** add Values.logLevel ([#55](https://github.com/SocialGouv/helm-charts/issues/55)) ([8c58c3e](https://github.com/SocialGouv/helm-charts/commit/8c58c3e5153c028a1d086ca11e64d5f307275102))

## 1.17.5 (2023-11-11)

## 1.17.4 (2023-11-11)

## 1.17.3 (2023-11-10)


### Bug Fixes

* **bitwarden:** upgrade chart and remove websockets ([77e1715](https://github.com/SocialGouv/helm-charts/commit/77e17158a2cc6f44dca9f5c5a4b9928900b3aa79))

## 1.17.2 (2023-11-10)


### Bug Fixes

* **vaultwarden:** fix directory structure ([e91f452](https://github.com/SocialGouv/helm-charts/commit/e91f4524bc43907663f6d108b2ee8434e64feb51))

## 1.17.1 (2023-11-10)


### Bug Fixes

* **vaulwarden:** run as non root ([b4d3498](https://github.com/SocialGouv/helm-charts/commit/b4d3498069906ca2b37e2fbc12e961b80fa37dc1))

## 1.17.0 (2023-11-10)


### Features

* **vaulwarden:** add helm chart for vaulwarden (fork) ([e7cbc42](https://github.com/SocialGouv/helm-charts/commit/e7cbc42621953447476aa84bc5155be7c5d09a1d))

## 1.16.3 (2023-11-09)

## 1.16.2 (2023-11-09)


### Bug Fixes

* fix postInitApplicationSQL ([#54](https://github.com/SocialGouv/helm-charts/issues/54)) ([851b33e](https://github.com/SocialGouv/helm-charts/commit/851b33eca7eeaa8fc9f23cac7a16ab850b3bda8f))

## 1.16.1 (2023-11-09)


### Bug Fixes

* description ([6539982](https://github.com/SocialGouv/helm-charts/commit/65399829638129138cf99142cb7d7a7239e530b6))

## 1.16.0 (2023-11-09)


### Features

* clamav ([#53](https://github.com/SocialGouv/helm-charts/issues/53)) ([92bc89e](https://github.com/SocialGouv/helm-charts/commit/92bc89e23a1f013e6133051c6c3f3056620067dd))

## 1.15.1 (2023-10-17)


### Bug Fixes

* **cnpg:** force retention days to string ([976044d](https://github.com/SocialGouv/helm-charts/commit/976044d8c8ee23eb9f052d8b5b298127a384f4a6))

## 1.15.0 (2023-10-16)


### Features

* **cnpg:** Add new sqlDumpRetentionDays option to rotate dumps ([#52](https://github.com/SocialGouv/helm-charts/issues/52)) ([26bf012](https://github.com/SocialGouv/helm-charts/commit/26bf01239d25b9f87645ac04370a5659fac880b2))

## 1.14.3 (2023-09-26)


### Bug Fixes

* compat kyverno runAsNonRoot ([#51](https://github.com/SocialGouv/helm-charts/issues/51)) ([7ab4be5](https://github.com/SocialGouv/helm-charts/commit/7ab4be5ca0f4e18afb9c4fba3ff32a45a1630800))

## 1.14.2 (2023-09-26)


### Bug Fixes

* buildkit default storage ReadWriteOnce ([#49](https://github.com/SocialGouv/helm-charts/issues/49)) ([3c0eb76](https://github.com/SocialGouv/helm-charts/commit/3c0eb76125638a00faf7cba0b90db443e02c3566))

## 1.14.1 (2023-09-26)


### Bug Fixes

* tests ([#50](https://github.com/SocialGouv/helm-charts/issues/50)) ([e9ca149](https://github.com/SocialGouv/helm-charts/commit/e9ca14917a03a1ae97727e9e4b7f7f5ce36a932f))

## 1.14.0 (2023-09-25)


### Features

* **cnpg:** add values.priorityClassName ([#48](https://github.com/SocialGouv/helm-charts/issues/48)) ([2d31b01](https://github.com/SocialGouv/helm-charts/commit/2d31b01d66f0cb0389f735a113b130d4675ede5f))

## 1.13.0 (2023-09-25)


### Features

* **cnpg:** add values.resources ([#47](https://github.com/SocialGouv/helm-charts/issues/47)) ([3481e53](https://github.com/SocialGouv/helm-charts/commit/3481e53edf0927a449f9161a08189b2001ab002e))

## 1.12.6 (2023-09-19)


### Bug Fixes

* securityContext maildev ([#46](https://github.com/SocialGouv/helm-charts/issues/46)) ([ff8786b](https://github.com/SocialGouv/helm-charts/commit/ff8786bf6d300bbf13d05ced708470dedb866f87))

## 1.12.5 (2023-09-19)


### Bug Fixes

* **cnpg:** no default targetTime ([#45](https://github.com/SocialGouv/helm-charts/issues/45)) ([21d8e98](https://github.com/SocialGouv/helm-charts/commit/21d8e989f7bbd53b4152508b03bc66689016cbe7))

## 1.12.4 (2023-09-19)


### Bug Fixes

* **cnpg:** immediate is boolean ([#44](https://github.com/SocialGouv/helm-charts/issues/44)) ([aaa151e](https://github.com/SocialGouv/helm-charts/commit/aaa151e33caef481a40b787f9bdd919a7a8eaccf))

## 1.12.3 (2023-09-19)


### Bug Fixes

* **cnpg:** add immediate base backup ([#43](https://github.com/SocialGouv/helm-charts/issues/43)) ([8c47c7b](https://github.com/SocialGouv/helm-charts/commit/8c47c7bdb47e8a5ff9ff3b7a84b1379582381dfb))

## 1.12.2 (2023-09-08)


### Bug Fixes

* **s3-client:** docker image tag ([8524534](https://github.com/SocialGouv/helm-charts/commit/852453400f73ecd6808c00b0efbdb82ae9288747))

## 1.12.1 (2023-09-06)


### Bug Fixes

* **cnpg-cluster:** add pooler.monitoring.enabledPodMonitor ([#42](https://github.com/SocialGouv/helm-charts/issues/42)) ([e412ac5](https://github.com/SocialGouv/helm-charts/commit/e412ac5ca8955d1e92079a508acc0172f12a6ead))

## 1.12.0 (2023-09-06)


### Features

* update pg_dump for pg 15 ([#41](https://github.com/SocialGouv/helm-charts/issues/41)) ([862ba82](https://github.com/SocialGouv/helm-charts/commit/862ba82fcabd8a5991caade19b67ae17e7f20113))

## 1.11.6 (2023-09-05)


### Bug Fixes

* **cnpg-cluster:** fix pooler monitoring ([#40](https://github.com/SocialGouv/helm-charts/issues/40)) ([5aa2805](https://github.com/SocialGouv/helm-charts/commit/5aa28052bb33327b6cfcaed803b56d0245719077))

## 1.11.5 (2023-09-04)


### Bug Fixes

* schema $ids ([#39](https://github.com/SocialGouv/helm-charts/issues/39)) ([7d31481](https://github.com/SocialGouv/helm-charts/commit/7d314814bf49d75fab15116dc07a1bd054586944))

## 1.11.4 (2023-09-01)


### Bug Fixes

* **buildkit-service:** dont recurse chown/chmod on init ([#38](https://github.com/SocialGouv/helm-charts/issues/38)) ([0d6ef05](https://github.com/SocialGouv/helm-charts/commit/0d6ef051473eaf0f0cd460608706a18110a1fbd0))

## 1.11.3 (2023-08-30)

## 1.11.2 (2023-08-30)

## 1.11.1 (2023-08-30)

## 1.11.0 (2023-08-29)


### Features

* allow simple pg_basebackup ([#35](https://github.com/SocialGouv/helm-charts/issues/35)) ([445ce56](https://github.com/SocialGouv/helm-charts/commit/445ce5678020e6526efd7519d6ec3f01e121a054))

## 1.10.0 (2023-08-11)


### Features

* **cnpg-cluster:** add replication values ([#34](https://github.com/SocialGouv/helm-charts/issues/34)) ([3930869](https://github.com/SocialGouv/helm-charts/commit/393086979a4190322519826549934dc790551768))

## 1.9.13 (2023-08-06)


### Bug Fixes

* **daily:** daily cron backups ([#33](https://github.com/SocialGouv/helm-charts/issues/33)) ([d561ffb](https://github.com/SocialGouv/helm-charts/commit/d561ffbc1406713cd3e39ebc2f56d9173468b699))

## 1.9.12 (2023-08-03)


### Bug Fixes

* **cnpg:** use superuser secret for backups ([#32](https://github.com/SocialGouv/helm-charts/issues/32)) ([510f603](https://github.com/SocialGouv/helm-charts/commit/510f603cfce6e6b0330299d4ee44202dbc7fb673))

## 1.9.11 (2023-08-02)


### Bug Fixes

* **maildev:** add ingress.enabled ([#27](https://github.com/SocialGouv/helm-charts/issues/27)) ([f53bc06](https://github.com/SocialGouv/helm-charts/commit/f53bc0615f1cb38a8437c57728a5d7e55ece13f3))

## 1.9.10 (2023-08-02)


### Bug Fixes

* pgweb ([4f50363](https://github.com/SocialGouv/helm-charts/commit/4f503634e986b52160f4469caba672b314e17e6e))

## 1.9.9 (2023-08-02)


### Bug Fixes

* **pgweb:** serviceaccount.create=false ([#31](https://github.com/SocialGouv/helm-charts/issues/31)) ([bb41e20](https://github.com/SocialGouv/helm-charts/commit/bb41e20bf911dbb551cd2f934105bd7e825a8afd))

## 1.9.8 (2023-08-02)


### Bug Fixes

* **cnpg:** enable multiple-crons ([#30](https://github.com/SocialGouv/helm-charts/issues/30)) ([4e1ef6f](https://github.com/SocialGouv/helm-charts/commit/4e1ef6fc48810aa918b67b633efdc0df5d5cc57a))

## 1.9.7 (2023-08-02)


### Bug Fixes

* enable pg_dump cron ([#22](https://github.com/SocialGouv/helm-charts/issues/22)) ([61f4300](https://github.com/SocialGouv/helm-charts/commit/61f43006dbf4b09b359dcd7e4df0de308d8c5dec))

## 1.9.6 (2023-08-02)


### Bug Fixes

* do not snapshot metadata ([#29](https://github.com/SocialGouv/helm-charts/issues/29)) ([e1fc13e](https://github.com/SocialGouv/helm-charts/commit/e1fc13e66b483b08d97e48e2278dbefd924000dc))

## 1.9.5 (2023-08-02)


### Bug Fixes

* **pgweb:** fix service ([#26](https://github.com/SocialGouv/helm-charts/issues/26)) ([fb6cba5](https://github.com/SocialGouv/helm-charts/commit/fb6cba5fb26b61016b90c43cf2c129f4dce970cc))

## 1.9.4 (2023-08-01)

## 1.9.3 (2023-08-01)


### Bug Fixes

* pgweb ([#24](https://github.com/SocialGouv/helm-charts/issues/24)) ([200ff7a](https://github.com/SocialGouv/helm-charts/commit/200ff7ab6ad2ae88dcc0bb5d9d0b64fd76c08fd7))

## 1.9.2 (2023-08-01)


### Bug Fixes

* snapshot tests ([#23](https://github.com/SocialGouv/helm-charts/issues/23)) ([4c24b10](https://github.com/SocialGouv/helm-charts/commit/4c24b1094726c5fd1686fa769976435534c6e307))

## 1.9.1 (2023-07-29)


### Bug Fixes

* pin used docker images ([#19](https://github.com/SocialGouv/helm-charts/issues/19)) ([0b7e383](https://github.com/SocialGouv/helm-charts/commit/0b7e383e24746a581037063f19ca70c04a0ed2f3))

## 1.9.0 (2023-07-28)


### Features

* pgweb ([#18](https://github.com/SocialGouv/helm-charts/issues/18)) ([809bf4c](https://github.com/SocialGouv/helm-charts/commit/809bf4c849119ff6223d9013a59f1b66f24a023c))

## 1.8.4 (2023-07-28)

## 1.8.3 (2023-07-26)


### Bug Fixes

* rename backup store key ([#11](https://github.com/SocialGouv/helm-charts/issues/11)) ([4093b81](https://github.com/SocialGouv/helm-charts/commit/4093b812bdcf1433995f3af095ecddd3359fefd1))

## 1.8.2 (2023-07-24)


### Bug Fixes

* **cnpg-cluster:** add Values.annotations ([#15](https://github.com/SocialGouv/helm-charts/issues/15)) ([3baf7ac](https://github.com/SocialGouv/helm-charts/commit/3baf7ac94e96274de530324de5dc421384d586fe))

## 1.8.1 (2023-07-24)

## 1.8.0 (2023-07-24)


### Features

* **cnpg-cluster:** add postInitApplicationSQL ([#13](https://github.com/SocialGouv/helm-charts/issues/13)) ([8868ae8](https://github.com/SocialGouv/helm-charts/commit/8868ae8ee9a05574781e8375c53144649700780b))

## 1.7.3 (2023-06-30)


### Bug Fixes

* **cnpg-cluster:** fix PodMonitor ([234851f](https://github.com/SocialGouv/helm-charts/commit/234851fa8dd7943b6a77797a6c1095dcd5f16d70))

## 1.7.2 (2023-06-30)


### Bug Fixes

* **cnpg-cluster:** fix PodMonitor ([#9](https://github.com/SocialGouv/helm-charts/issues/9)) ([128b2eb](https://github.com/SocialGouv/helm-charts/commit/128b2eb96d10703bc3fadc70eb46452ec6ed5857))

## 1.7.1 (2023-06-29)


### Bug Fixes

* **cnpg-cluster:** allow customize recovery.externalClusterName ([#10](https://github.com/SocialGouv/helm-charts/issues/10)) ([fcf7f12](https://github.com/SocialGouv/helm-charts/commit/fcf7f123be58714baa0ee9007289ce3fd66211be))

## 1.7.0 (2023-06-28)


### Features

* **cpng-cluster:** activating podmonitor ([#7](https://github.com/SocialGouv/helm-charts/issues/7)) ([fd15ab0](https://github.com/SocialGouv/helm-charts/commit/fd15ab0b37cef49b3ebf4491c7a66760a1f1422f))

## 1.6.0 (2023-06-27)


### Features

* buildkit-service chart ([a26feb4](https://github.com/SocialGouv/helm-charts/commit/a26feb4fafacc7729f499487c892c9a2fdce624e))

## 1.5.7 (2023-06-21)


### Bug Fixes

* **cnpg-cluster:** use backup.secretName ([#5](https://github.com/SocialGouv/helm-charts/issues/5)) ([d7636b9](https://github.com/SocialGouv/helm-charts/commit/d7636b9b27f2a1daf8d9df97d832f7daca2de484))

## 1.5.6 (2023-05-11)


### Bug Fixes

* cluster name for recovery ([5a2b999](https://github.com/SocialGouv/helm-charts/commit/5a2b999fb693bd380f4cea12ba8be6e032b0966b))

## 1.5.5 (2023-04-26)


### Bug Fixes

* default recovery ([d99df21](https://github.com/SocialGouv/helm-charts/commit/d99df211a98059661ff5f29b63a88ea44afb855f))

## 1.5.4 (2023-04-25)


### Bug Fixes

* test ([7e161cc](https://github.com/SocialGouv/helm-charts/commit/7e161cc7c704bd17f7cb480cb271a7e198eef82a))

## 1.5.3 (2023-04-25)


### Bug Fixes

* quotes ([af4ac76](https://github.com/SocialGouv/helm-charts/commit/af4ac7621b782e97ecc617004f60da98be735173))

## 1.5.2 (2023-04-25)


### Bug Fixes

* externalCluster only if recovery ([2e46905](https://github.com/SocialGouv/helm-charts/commit/2e469058fb3c166efb212bcf99f1eae4761eef76))

## 1.5.1 (2023-04-25)


### Bug Fixes

* allow targetTime ([f0353b6](https://github.com/SocialGouv/helm-charts/commit/f0353b6eabb8403d5e2d5506ea2767e96e9324d9))

## 1.5.0 (2023-04-25)


### Features

* bootstrap from backup ([ed23356](https://github.com/SocialGouv/helm-charts/commit/ed23356e0e71875f68db57808d7cb68f773a17ea))

## 1.4.6 (2023-04-24)


### Bug Fixes

* azureCredentials ([1b392b8](https://github.com/SocialGouv/helm-charts/commit/1b392b8ec43550058540f828f83e80733ad87660))

## 1.4.5 (2023-04-20)


### Bug Fixes

* quotes ([a36d635](https://github.com/SocialGouv/helm-charts/commit/a36d6358dca913db18e6430e32f55fa3854d5bef))

## 1.4.4 (2023-04-20)


### Bug Fixes

* CNPG ScheduledBackups ([46f34cc](https://github.com/SocialGouv/helm-charts/commit/46f34ccd37ead3b6e551f0b3d922a214d718d2ff))

## 1.4.3 (2023-03-28)

## 1.4.2 (2023-03-14)


### Bug Fixes

* empty dbSecretName ([95882e8](https://github.com/SocialGouv/helm-charts/commit/95882e8c366153e8614def2ad870f50d256c1b4d))

## 1.4.1 (2023-03-13)


### Bug Fixes

* cnpg include scope ([28e01ee](https://github.com/SocialGouv/helm-charts/commit/28e01ee78f7161937a1e9498a2971dac7a18e84f))

## 1.4.0 (2023-03-13)


### Features

* cnpg add superuserSecretName option ([f07521c](https://github.com/SocialGouv/helm-charts/commit/f07521c1e01ce2dabc1f85e38773a06a3cb2d406))

## 1.3.0 (2023-03-13)


### Features

* add some cnpg parameters ([c978ccf](https://github.com/SocialGouv/helm-charts/commit/c978ccf449c7195e6f8fe6a05c09837a31bc6ad6))

## 1.2.0 (2023-03-13)


### Features

* cnpg no-plain secret ([ff290e1](https://github.com/SocialGouv/helm-charts/commit/ff290e1b25c3cccba84345ab40d69660f90ed63f))

## 1.1.0 (2023-03-13)


### Features

* import enix cnpg-cluster chart ([dd9f1cf](https://github.com/SocialGouv/helm-charts/commit/dd9f1cff4248225fbbffd924633d1772bcd60c8d))

## 1.0.5 (2023-03-06)

## 1.0.4 (2023-03-06)


### Bug Fixes

* wip ([25e6ed0](https://github.com/SocialGouv/helm-charts/commit/25e6ed09a1e4ca4dddc81dd227ce24522d15da7a))

## 1.0.3 (2023-03-06)


### Bug Fixes

* wip ([a9a04d9](https://github.com/SocialGouv/helm-charts/commit/a9a04d9f4193f3b5459a2d1bf2817fb7e1c8c342))

## 1.0.2 (2023-03-06)


### Bug Fixes

* wip ([28fdb66](https://github.com/SocialGouv/helm-charts/commit/28fdb66fe64f93d79d35508fc2c03b5b0198b0b1))

## 1.0.2 (2023-03-06)


### Bug Fixes

* try new release ([953b9eb](https://github.com/SocialGouv/helm-charts/commit/953b9eb604d184925de0cd8a4de0ae9c54ebd2b7))

## 1.0.2 (2023-03-06)


### Bug Fixes

* wip ([2ec557a](https://github.com/SocialGouv/helm-charts/commit/2ec557a369870bc981d39887ac0f1b0d8f0e4407))

## 1.0.1 (2023-03-06)


### Bug Fixes

* sync gh-pages readme ([abb03d2](https://github.com/SocialGouv/helm-charts/commit/abb03d26d517e44595dc70adc159d36f96fcd4d6))

## 1.0.1 (2023-03-06)


### Bug Fixes

* sync gh-pages readme ([72fb044](https://github.com/SocialGouv/helm-charts/commit/72fb0444206d6388f16049d748b7444e5500df91))

## 1.0.1 (2023-03-06)


### Bug Fixes

* sync gh-pages readme ([262838d](https://github.com/SocialGouv/helm-charts/commit/262838dba6b6e0116485901775bf068f41356529))

## 1.0.1 (2023-03-06)


### Bug Fixes

* add sync readme.md ([7937a22](https://github.com/SocialGouv/helm-charts/commit/7937a221c6cda947be06adb124c94a1008392044))

## 1.0.1 (2023-03-06)


### Bug Fixes

* yaml ([daadbf3](https://github.com/SocialGouv/helm-charts/commit/daadbf3809d4315a1afefdd75e60f8d40d359d44))

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)

## 1.0.1 (2023-03-06)


### Bug Fixes

* wip ([9d34d20](https://github.com/SocialGouv/helm-charts/commit/9d34d20de8e19b6a6333506ad8781602e9002371))
