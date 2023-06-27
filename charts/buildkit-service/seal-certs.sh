#!/bin/sh
set -e
CERT=${CERT:-"$1"}
CERT=${CERT:-"https://kubeseal.dev2.fabrique.social.gouv.fr/v1/cert.pem"}

kubeseal \
  --cert $CERT \
  --scope cluster-wide \
  -f .certs/buildkit-client-certs.yaml \
  -w .certs/buildkit-client-certs.sealedsecret.yaml

kubeseal \
  --cert $CERT \
  --scope cluster-wide \
  -f .certs/buildkit-daemon-certs.yaml \
  -w .certs/buildkit-daemon-certs.sealedsecret.yaml