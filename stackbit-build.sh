#!/usr/bin/env bash

set -e
set -o pipefail
set -v

npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://1fb79b2b.ngrok.io/pull/5d3872cbb66b1263d1b50f66
./ssg-build.sh
