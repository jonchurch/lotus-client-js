#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

docker run --rm -dit --name lotus-client-dev \
	-v $SCRIPT_DIR:/lotus-client-js \
	-v $SCRIPT_DIR/.lotus:/root/.lotus \
	-v $SCRIPT_DIR/.lotus:/root/.lotusstorage \
	lotus-client
