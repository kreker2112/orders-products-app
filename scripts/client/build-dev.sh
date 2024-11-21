#!/bin/bash

ENVIRONMENT=development
VUE_APP_API_URL=http://localhost:3000
VUE_APP_WS_URL=http://localhost:3000
VUE_APP_IMAGES_URL=http://localhost:8080/images
IMAGE_NAME=orders-products-app-client-dev

cd "$(dirname "$0")/../.."

docker build \
  --build-arg ENVIRONMENT=$ENVIRONMENT \
  --build-arg VUE_APP_API_URL=$VUE_APP_API_URL \
  --build-arg VUE_APP_WS_URL=$VUE_APP_WS_URL \
  --build-arg VUE_APP_IMAGES_URL=$VUE_APP_IMAGES_URL \
  -f ./client/Dockerfile \
  -t $IMAGE_NAME \
  ./client

if [ $? -eq 0 ]; then
  echo "Docker image '$IMAGE_NAME' built successfully in development mode."
else
  echo "Docker build failed."
  exit 1
fi
