#!/bin/bash

pnpm i
pnpm build

aws --endpoint-url https://sfo3.digitaloceanspaces.com s3 sync --delete dist/ s3://site-dist/
