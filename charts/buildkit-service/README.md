# buildkit service on kubernetes

## generate certficates for mTLS

```sh
./create-certs.sh
```

## integrate certificates

### method 1: transform certificates as sealed-secrets

need kubeseal installed on your machine

```sh
export CERT=https://kubeseal.dev2.fabrique.social.gouv.fr/v1/cert.pem
./seal-certs.sh
cp .certs/buildkit-daemon-certs.sealedsecret.yaml templates
```

### method 2: import certificate as legacy secrets

```sh
cp .certs/buildkit-daemon-certs.yaml templates
```

## install

### install from terminal

just run from your laptop

```sh
./install.sh
```

this script is only sugar around helm install

### install with argocd

integrate as subchart into argocd
[example](examples/argocd/my-buildkit-service)

you'll need to put the certificate secret (or sealed-secret) into the template folder of your chart.


## related links:

- https://github.com/moby/buildkit/tree/master/examples/kubernetes
- https://github.com/moby/buildkit/blob/master/docs/buildkitd.toml.md
- https://github.com/moby/buildkit/tree/master#expose-buildkit-as-a-tcp-service
- https://www.slideshare.net/ntt-sic/building-images-efficiently-and-securely-on-kubernetes-with-buildkit
- https://www.sliceofexperiments.com/p/a-comprehensive-guide-for-the-fastest
- https://github.com/andrcuns/charts/tree/master/charts/buildkit-service