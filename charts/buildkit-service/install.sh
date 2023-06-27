#!/bin/bash
set -e
helm upgrade --install --force buildkit-service . -n buildkit-service --create-namespace