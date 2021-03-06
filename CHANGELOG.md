# [6.1.0-alpha.1](https://github.com/SocialGouv/helm-charts/compare/v6.0.0...v6.1.0-alpha.1) (2020-04-08)
# [6.2.0](https://github.com/SocialGouv/helm-charts/compare/v6.1.0...v6.2.0) (2020-06-15)


### Features

* **just:** increase test timeout ([#62](https://github.com/SocialGouv/helm-charts/issues/62)) ([90b4c6b](https://github.com/SocialGouv/helm-charts/commit/90b4c6bd7c89e11612c11a3bf4f3f23b8d4f5efa))
* **managed-db:** simpler ([#65](https://github.com/SocialGouv/helm-charts/issues/65)) ([23c7168](https://github.com/SocialGouv/helm-charts/commit/23c71687f310a5eab33e46181ace85c0257aaf73))
* **app:** add deployment.volumes ([#79](https://github.com/SocialGouv/helm-charts/issues/79)) ([b5957f4](https://github.com/SocialGouv/helm-charts/commit/b5957f4c2f08d489a9a3ece0fbc1135fb73055fe))

# [6.1.0](https://github.com/SocialGouv/helm-charts/compare/v6.0.0...v6.1.0) (2020-04-20)


### Features

* **app:** add deployment.envFrom ([#68](https://github.com/SocialGouv/helm-charts/issues/68)) ([fe27155](https://github.com/SocialGouv/helm-charts/commit/fe27155f48e7ada9dcd89f1e7e962c56a8a318fe))
* **just:** increase test timeout ([#62](https://github.com/SocialGouv/helm-charts/issues/62)) ([90b4c6b](https://github.com/SocialGouv/helm-charts/commit/90b4c6bd7c89e11612c11a3bf4f3f23b8d4f5efa))

# [6.0.0](https://github.com/SocialGouv/helm-charts/compare/v5.2.2...v6.0.0) (2020-04-06)


* feat(app)!: socialgouv apps can change the port (#66) ([197f3d4](https://github.com/SocialGouv/helm-charts/commit/197f3d42623900209d6a96f5f921314ce533c99f)), closes [#66](https://github.com/SocialGouv/helm-charts/issues/66)


### BREAKING CHANGES

* **feat(app)!: socialgouv apps can change the port**
    `PORT` variable is now required to use the `values.socialgouv.yaml`

    **Before**

    ```yaml
    - envsubst < ./charts/app/values.socialgouv.yaml > /tmp/values.socialgouv.yaml
    ```

    **After**

    ```yaml
    - export PORT=80
    - envsubst < ./charts/app/values.socialgouv.yaml > /tmp/values.socialgouv.yaml
    ```

    Or 

    ```yaml
    - export PORT=8080
    - envsubst < ./charts/app/values.socialgouv.yaml > /tmp/values.socialgouv.yaml
    ```

## [5.2.2](https://github.com/SocialGouv/helm-charts/compare/v5.2.1...v5.2.2) (2020-04-02)


### Bug Fixes

* **app:** add missing extra labels again ([#64](https://github.com/SocialGouv/helm-charts/issues/64)) ([648e381](https://github.com/SocialGouv/helm-charts/commit/648e3813137ed2e956e43e4643e38732bc84f4c9))

## [5.2.1](https://github.com/SocialGouv/helm-charts/compare/v5.2.0...v5.2.1) (2020-04-02)


### Bug Fixes

* **app:** add missing extra labels ([#63](https://github.com/SocialGouv/helm-charts/issues/63)) ([c3897cc](https://github.com/SocialGouv/helm-charts/commit/c3897cc0446e8743596ab5104631b1fe72df8d55))

# [5.2.0](https://github.com/SocialGouv/helm-charts/compare/v5.1.0...v5.2.0) (2020-04-01)


### Features

* **managed-pg:** migrate/seed-db commands ([#61](https://github.com/SocialGouv/helm-charts/issues/61)) ([c6daf5f](https://github.com/SocialGouv/helm-charts/commit/c6daf5ff2e98184462453b815ccc83c9b726370b))

# [5.1.0](https://github.com/SocialGouv/helm-charts/compare/v5.0.0...v5.1.0) (2020-03-25)


### Features

* **app:** add gitlab deploy boards annotations ([#52](https://github.com/SocialGouv/helm-charts/issues/52)) ([ba9a075](https://github.com/SocialGouv/helm-charts/commit/ba9a07535066980b4c11c62a1adb8cd548e34482))

# [5.0.0](https://github.com/SocialGouv/helm-charts/compare/v4.1.0...v5.0.0) (2020-03-20)


* refactor(app)!: unify socialgouv app charts (#46) ([69322b1](https://github.com/SocialGouv/helm-charts/commit/69322b11bf849548908831331e57fecfb23fd0aa)), closes [#46](https://github.com/SocialGouv/helm-charts/issues/46) [socialgouv/nodejs#4](https://github.com/socialgouv/nodejs/issues/4) [socialgouv/app#5](https://github.com/socialgouv/app/issues/5) [socialgouv/hpa#4](https://github.com/socialgouv/hpa/issues/4) [socialgouv/app#5](https://github.com/socialgouv/app/issues/5) [#44](https://github.com/SocialGouv/helm-charts/issues/44)


### BREAKING CHANGES

* **Unify socialgouv app charts**
    - As the `website`, `nodejs`and `hpa` charts are shockingly similar, we decided to merge them to an `app` chart that does all they do.

      For `socialgouv/nodejs` charts nothing really change. The default values are similar.

      ```diff
      - helm just fetch socialgouv/nodejs#4.0.0
      + helm just fetch socialgouv/app#5.0.0
      ```

      For `socialgouv/hpa` charts **the autoscaling is disabled by default**

      ```diff
      - helm just fetch socialgouv/hpa#4.0.0
      + helm just fetch socialgouv/app#5.0.0
      ```
      

# [4.1.0](https://github.com/SocialGouv/helm-charts/compare/v4.0.1...v4.1.0) (2020-03-20)


### Features

* **managed-pg:** add  managed-pg chart ([#49](https://github.com/SocialGouv/helm-charts/issues/49)) ([0efb76b](https://github.com/SocialGouv/helm-charts/commit/0efb76b6c3863d21ff36e0fd6273db7012728932))

## [4.0.1](https://github.com/SocialGouv/helm-charts/compare/v4.0.0...v4.0.1) (2020-03-13)


### Bug Fixes

* **hpa:** change default targetPort to 80 ([#50](https://github.com/SocialGouv/helm-charts/issues/50)) ([3ef1829](https://github.com/SocialGouv/helm-charts/commit/3ef1829d1391979b989008cd8a06d31d70eda8d9))
* **nodejs:** change default targetPort to 80 ([#51](https://github.com/SocialGouv/helm-charts/issues/51)) ([7b70897](https://github.com/SocialGouv/helm-charts/commit/7b708975634e25a14960d3e52d8067de45a6e559))

# [4.0.0](https://github.com/SocialGouv/helm-charts/compare/v3.0.1...v4.0.0) (2020-03-03)


* refactor(certificate)!: remove certificate chart (#43) ([2d487f5](https://github.com/SocialGouv/helm-charts/commit/2d487f5b0ceb516dd8307c692d8ee91b1143c569)), closes [#43](https://github.com/SocialGouv/helm-charts/issues/43) [#23](https://github.com/SocialGouv/helm-charts/issues/23)


### BREAKING CHANGES

* remove certificate chart

## [3.0.1](https://github.com/SocialGouv/helm-charts/compare/v3.0.0...v3.0.1) (2020-01-22)


### Bug Fixes

* add missing probe port in examples values files ([#37](https://github.com/SocialGouv/helm-charts/issues/37)) ([eb2b4bf](https://github.com/SocialGouv/helm-charts/commit/eb2b4bfe8040f3a5f64de4bf7732e7d1d806d9f3))
* fix healthcheck probes port (replace name by port) ([#36](https://github.com/SocialGouv/helm-charts/issues/36)) ([bcb4adc](https://github.com/SocialGouv/helm-charts/commit/bcb4adc804f3cd7934cbc42b0fddc97d4f45624a))

# [3.0.0](https://github.com/SocialGouv/helm-charts/compare/v2.14.0...v3.0.0) (2020-01-10)


* feat(nodejs)!: set variable for backend.servicePort in ingress template ([9fa47cc](https://github.com/SocialGouv/helm-charts/commit/9fa47cc663966ce6a5c0de6e7bb3ab13d1dd2204))
* feat(hpa)!: set variable for backend.servicePort in ingress template ([8452729](https://github.com/SocialGouv/helm-charts/commit/84527297d3ac15972377bdd758dc0ac07d36e434))


### BREAKING CHANGES

* set variable for backend.servicePort in ingress template

In the value file, the `ingress.hosts[].paths` accepts an array of object

Before

```yaml
ingress:
  hosts:
    - host: test.dev.fabrique.social.gouv.fr
      paths:
        - /
```

After

```yaml
ingress:
  hosts:
    - host: test.dev.fabrique.social.gouv.fr
      paths:
        - path: /
```

The `servicePort`, default to `80`, can be overridden there

```yaml
ingress:
  hosts:
    - host: test.dev.fabrique.social.gouv.fr
      paths:
        - path: /
          servicePort: 8080
```
* set variable for backend.servicePort in ingress template

In the value file, the `ingress.hosts[].paths` accepts an array of object

Before

```yaml
ingress:
  hosts:
    - host: test.dev.fabrique.social.gouv.fr
      paths:
        - /
```

After

```yaml
ingress:
  hosts:
    - host: test.dev.fabrique.social.gouv.fr
      paths:
        - path: /
```

The `servicePort`, default to `80`, can be overridden there

```yaml
ingress:
  hosts:
    - host: test.dev.fabrique.social.gouv.fr
      paths:
        - path: /
          servicePort: 8080
```

# ~~[2.14.0](https://github.com/SocialGouv/helm-charts/compare/v2.13.0...v2.14.0) (2020-01-09)~~

**DEPRECATED** : Contains breaking changes

### Features

* set variable for backend.servicePort in ingress template ([#34](https://github.com/SocialGouv/helm-charts/issues/34)) ([d3929bd](https://github.com/SocialGouv/helm-charts/commit/d3929bd99f99f015e0f9e68220c8e0202b43f6eb))

# [2.13.0](https://github.com/SocialGouv/helm-charts/compare/v2.12.0...v2.13.0) (2019-12-30)


### Features

* **nodejs:** add annotations to deploy pod too ([#32](https://github.com/SocialGouv/helm-charts/issues/32)) ([69c4864](https://github.com/SocialGouv/helm-charts/commit/69c48641cd1fab9be1011bcdb2589a5099a5ef4b))

# [2.12.0](https://github.com/SocialGouv/helm-charts/compare/v2.11.0...v2.12.0) (2019-12-23)


### Features

* **just:** add directory change options ([#29](https://github.com/SocialGouv/helm-charts/issues/29)) ([98cfaee](https://github.com/SocialGouv/helm-charts/commit/98cfaee5e01bf1c2e94ecc38ef04f5eeadfe4fbc))
* **nodejs:** add labels variable ([#30](https://github.com/SocialGouv/helm-charts/issues/30)) ([bdb43aa](https://github.com/SocialGouv/helm-charts/commit/bdb43aab26459f65a78e249ed999fb7c4c253c9a))

# [2.11.0](https://github.com/SocialGouv/helm-charts/compare/v2.10.0...v2.11.0) (2019-12-19)


### Features

* add variable for service targetPort ([#27](https://github.com/SocialGouv/helm-charts/issues/27)) ([e12538a](https://github.com/SocialGouv/helm-charts/commit/e12538ac4d9aebea1aa357c793a933d2666cd653))

# [2.10.0](https://github.com/SocialGouv/helm-charts/compare/v2.9.0...v2.10.0) (2019-12-18)


### Features

* variabilize port for Probe in hpa charts + update memory limits ([#26](https://github.com/SocialGouv/helm-charts/issues/26)) ([deaadbd](https://github.com/SocialGouv/helm-charts/commit/deaadbdec769147892402cdbc6cf024f05d964c9))

# [2.9.0](https://github.com/SocialGouv/helm-charts/compare/v2.8.0...v2.9.0) (2019-12-06)


### Bug Fixes

* allow override failureThreshold and timeoutSeconds ([#20](https://github.com/SocialGouv/helm-charts/issues/20)) ([eccff42](https://github.com/SocialGouv/helm-charts/commit/eccff42df7901c3af7f46a724deb058ee38977a5))


### Features

* add chart to use Horizontal Pod Autoscaler ([#22](https://github.com/SocialGouv/helm-charts/issues/22)) ([5050753](https://github.com/SocialGouv/helm-charts/commit/5050753716e1e367b4db0732de81af7f2baa4675))

# [2.8.0](https://github.com/SocialGouv/helm-charts/compare/v2.7.0...v2.8.0) (2019-11-25)


### Features

* **nodejs:** add deployment.annotations variable ([#18](https://github.com/SocialGouv/helm-charts/issues/18)) ([9ef532c](https://github.com/SocialGouv/helm-charts/commit/9ef532cd75bd64c47b6cd41c65f76d553c8004f0))
* **nodejs:** add deployment.initContainers variable ([#19](https://github.com/SocialGouv/helm-charts/issues/19)) ([57c61eb](https://github.com/SocialGouv/helm-charts/commit/57c61eb95b06f42e3d957e74ba13174266001008))

# [2.7.0](https://github.com/SocialGouv/helm-charts/compare/v2.6.0...v2.7.0) (2019-11-18)


### Features

* **nodejs:** add deployment.port variable ([#17](https://github.com/SocialGouv/helm-charts/issues/17)) ([d031006](https://github.com/SocialGouv/helm-charts/commit/d031006008cf2a005e723a4aaa2764a8a12bbe68))

# [2.6.0](https://github.com/SocialGouv/helm-charts/compare/v2.5.0...v2.6.0) (2019-11-06)


### Features

* **just:** add just plugin ([#14](https://github.com/SocialGouv/helm-charts/issues/14)) ([f1dd4ed](https://github.com/SocialGouv/helm-charts/commit/f1dd4ed420be7628fc2f172d300ce6bd5f177a18))

# [2.5.0](https://github.com/SocialGouv/helm-charts/compare/v2.4.2...v2.5.0) (2019-10-29)


### Features

* **nodejs:** add path variable for liveness and readiness ([0464d87](https://github.com/SocialGouv/helm-charts/commit/0464d87d198790a758255af817be53ec73728ea6))

## [2.4.2](https://github.com/SocialGouv/helm-charts/compare/v2.4.1...v2.4.2) (2019-10-28)


### Bug Fixes

* **nodejs:** use longer periods by default ([369f940](https://github.com/SocialGouv/helm-charts/commit/369f94007ab7c48a008f9106326e063dfb745b37))

## [2.4.1](https://github.com/SocialGouv/helm-charts/compare/v2.4.0...v2.4.1) (2019-10-28)


### Bug Fixes

* **nodejs:** change period ([c1c3964](https://github.com/SocialGouv/helm-charts/commit/c1c3964361602d20a66c1fa0f2a10492d121cc36))

# [2.4.0](https://github.com/SocialGouv/helm-charts/compare/v2.3.0...v2.4.0) (2019-10-28)


### Features

* **nodejs:** add liveness and readiness values ([9adcd59](https://github.com/SocialGouv/helm-charts/commit/9adcd592dba388731de7b3bbbf51d88c895bb01c))

# [2.3.0](https://github.com/SocialGouv/helm-charts/compare/v2.2.0...v2.3.0) (2019-10-28)


### Features

* **nodejs:** add nodejs charts ([8320df8](https://github.com/SocialGouv/helm-charts/commit/8320df839b0a1f37fc0067c95ee3a374d05a881a))

# [2.2.0](https://github.com/SocialGouv/helm-charts/compare/v2.1.0...v2.2.0) (2019-10-24)


### Features

* **certificate:** create socialgouv/certificate chart ([#10](https://github.com/SocialGouv/helm-charts/issues/10)) ([8c06e54](https://github.com/SocialGouv/helm-charts/commit/8c06e5446b75016460b90c4c8d12e9981aa0aefd))

# [2.1.0](https://github.com/SocialGouv/helm-charts/compare/v2.0.3...v2.1.0) (2019-10-08)


### Features

* add ingress annotation to redirect http to https ([9765f39](https://github.com/SocialGouv/helm-charts/commit/9765f39))
* add ingress annotation to redirect http to https ([76e4d2f](https://github.com/SocialGouv/helm-charts/commit/76e4d2f))

## [2.0.3](https://github.com/SocialGouv/helm-charts/compare/v2.0.2...v2.0.3) (2019-10-08)


### Bug Fixes

* wrong identation for resources limits ([917ceb0](https://github.com/SocialGouv/helm-charts/commit/917ceb0))
* wrong identation resources ([3ef74ab](https://github.com/SocialGouv/helm-charts/commit/3ef74ab))

## [2.0.2](https://github.com/SocialGouv/helm-charts/compare/v2.0.1...v2.0.2) (2019-10-08)


### Bug Fixes

* misspelling release ([4e71b16](https://github.com/SocialGouv/helm-charts/commit/4e71b16))
* misspelling release ([fff5c6a](https://github.com/SocialGouv/helm-charts/commit/fff5c6a))

## [2.0.1](https://github.com/SocialGouv/helm-charts/compare/v2.0.0...v2.0.1) (2019-09-30)


### Bug Fixes

* force bump to test release process ([d549779](https://github.com/SocialGouv/helm-charts/commit/d549779))

# [2.0.0](https://github.com/SocialGouv/helm-charts/compare/v1.0.8...v2.0.0) (2019-09-10)


### Bug Fixes

* **index:** correct urls ([74dfb15](https://github.com/SocialGouv/helm-charts/commit/74dfb15))
* **webapp:** use port 80 as default deployment and service port ([2fbe4e6](https://github.com/SocialGouv/helm-charts/commit/2fbe4e6))


### Code Refactoring

* mode all charts to charts folder ([83f1b90](https://github.com/SocialGouv/helm-charts/commit/83f1b90))


### BREAKING CHANGES

* might affect the build process

## [1.0.8](https://github.com/SocialGouv/helm-charts/compare/v1.0.7...v1.0.8) (2019-09-08)


### Bug Fixes

* **release:** use gitTag instead of version in github url ([60d4a12](https://github.com/SocialGouv/helm-charts/commit/60d4a12))

## [1.0.7](https://github.com/SocialGouv/helm-charts/compare/v1.0.6...v1.0.7) (2019-09-08)


### Bug Fixes

* **ci:** force bump to test release process ([593f64f](https://github.com/SocialGouv/helm-charts/commit/593f64f))

## [1.0.6](https://github.com/SocialGouv/helm-charts/compare/v1.0.5...v1.0.6) (2019-09-08)


### Bug Fixes

* **ci:** force bump to test release process ([6c13db8](https://github.com/SocialGouv/helm-charts/commit/6c13db8))

## [1.0.5](https://github.com/SocialGouv/helm-charts/compare/v1.0.4...v1.0.5) (2019-09-08)


### Bug Fixes

* **ci:** force bump to test release process ([719152f](https://github.com/SocialGouv/helm-charts/commit/719152f))

## [1.0.4](https://github.com/SocialGouv/helm-charts/compare/v1.0.3...v1.0.4) (2019-09-08)


### Bug Fixes

* **ci:** force bump to test release process ([c05d7d8](https://github.com/SocialGouv/helm-charts/commit/c05d7d8))
* **ci:** force bump to test release process ([5026c80](https://github.com/SocialGouv/helm-charts/commit/5026c80))
* **ci:** force bump to test release process (2) ([2971fa1](https://github.com/SocialGouv/helm-charts/commit/2971fa1))

## [1.0.3](https://github.com/SocialGouv/helm-charts/compare/v1.0.2...v1.0.3) (2019-09-08)


### Bug Fixes

* **ci:** force bump to test release process ([c988319](https://github.com/SocialGouv/helm-charts/commit/c988319))
* **ci:** force bump to test release process ([562e203](https://github.com/SocialGouv/helm-charts/commit/562e203))

## [1.0.2](https://github.com/SocialGouv/helm-charts/compare/v1.0.1...v1.0.2) (2019-09-08)


### Bug Fixes

* **ci:** force bump to test release process ([ddf59e7](https://github.com/SocialGouv/helm-charts/commit/ddf59e7))

## [1.0.1](https://github.com/SocialGouv/helm-charts/compare/v1.0.0...v1.0.1) (2019-09-06)


### Bug Fixes

* **ci:** force bump to test release process ([23972bd](https://github.com/SocialGouv/helm-charts/commit/23972bd))

# 1.0.0 (2019-09-06)


### Bug Fixes

* chart ingress ([16fd2a5](https://github.com/SocialGouv/helm-charts/commit/16fd2a5))
* set variable for app name ([03effa1](https://github.com/SocialGouv/helm-charts/commit/03effa1))


### Features

* add env variable for deployment ([f689774](https://github.com/SocialGouv/helm-charts/commit/f689774))
* add helm chart to deploy incubateur mas webapp ([0f968c5](https://github.com/SocialGouv/helm-charts/commit/0f968c5))
* create helm repo ([056dade](https://github.com/SocialGouv/helm-charts/commit/056dade))
* package webapp chart ([030aea2](https://github.com/SocialGouv/helm-charts/commit/030aea2))
