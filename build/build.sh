#!/bin/bash
# build.sh V.1.1
# Description: Build Docker image based on Dockerfile and tags it.

# Source configuration
source ./BUILD_CONFIG

# Build Docker image
cd ../ || exit
#docker build  -f ../Dockerfile -t ${DOCKER_IMAGE} .
docker build  -f build/Dockerfile -t ${DOCKER_IMAGE} .

