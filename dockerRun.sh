#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

docker run --rm -dit --name lotus-client-dev \
	-v $SCRIPT_DIR:/lotus-client-js \
	-v ~/.lotus:/root/.lotus \
	-v ~/.lotusstorage:/root/.lotusstorage \
	lotus-client
