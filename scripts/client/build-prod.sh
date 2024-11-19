#!/bin/bash

# Устанавливаем переменные окружения для режима продакшена
ENVIRONMENT=production
VUE_APP_API_URL=
VUE_APP_WS_URL=
VUE_APP_IMAGES_URL=/images
IMAGE_NAME=orders-products-app-client-prod

# Переходим в корневую директорию проекта
cd "$(dirname "$0")/../.."

# Сборка Docker-образа
docker build \
  --build-arg ENVIRONMENT=$ENVIRONMENT \
  --build-arg VUE_APP_API_URL="$VUE_APP_API_URL" \
  --build-arg VUE_APP_WS_URL="$VUE_APP_WS_URL" \
  --build-arg VUE_APP_IMAGES_URL=$VUE_APP_IMAGES_URL \
  -f ./client/Dockerfile \
  -t $IMAGE_NAME \
  ./client

# Проверка успешности сборки
if [ $? -eq 0 ]; then
  echo "Docker image '$IMAGE_NAME' built successfully in production mode."
else
  echo "Docker build failed."
  exit 1
fi
