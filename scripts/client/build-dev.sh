#!/bin/bash

# Устанавливаем переменные окружения для режима разработки
ENVIRONMENT=development
VUE_APP_API_URL=http://localhost:3000
VUE_APP_WS_URL=http://localhost:3000
VUE_APP_IMAGES_URL=http://localhost:8080/images
IMAGE_NAME=orders-products-app-client-dev

# Переходим в корневую директорию проекта
cd "$(dirname "$0")/../.."

# Сборка Docker-образа
docker build \
  --build-arg ENVIRONMENT=$ENVIRONMENT \
  --build-arg VUE_APP_API_URL=$VUE_APP_API_URL \
  --build-arg VUE_APP_WS_URL=$VUE_APP_WS_URL \
  --build-arg VUE_APP_IMAGES_URL=$VUE_APP_IMAGES_URL \
  -f ./client/Dockerfile \
  -t $IMAGE_NAME \
  ./client

# Проверка успешности сборки
if [ $? -eq 0 ]; then
  echo "Docker image '$IMAGE_NAME' built successfully in development mode."
else
  echo "Docker build failed."
  exit 1
fi
