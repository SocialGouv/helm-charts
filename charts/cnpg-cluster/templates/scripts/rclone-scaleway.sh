#!/bin/sh
set -o errexit
set -o nounset

echo '[INFO] starting backups upload to scaleway script'

export RCLONE_CRYPT_PASSWORD=$(rclone obscure $RCLONE_CRYPT_PASSWORD_PLAIN)

rclone sync --verbose --max-age ${max_age} --delete-excluded  <source>:<source-bucket> encrypted_scaleway:/${bucket}/

echo '[INFO] exiting backups upload to scaleway script'