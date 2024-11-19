#!/bin/bash

# Устанавливаем переменные для режима продакшена
ENVIRONMENT=production
PORT=3000
WS_PORT=3001
IMAGE_NAME=orders-products-app-server-prod

# Переходим в корневую директорию проекта
cd "$(dirname "$0")/../.."

# Сборка Docker-образа
docker build \
  --build-arg ENVIRONMENT=$ENVIRONMENT \
  --build-arg PORT=$PORT \
  --build-arg WS_PORT=$WS_PORT \
  -f ./server/Dockerfile \
  -t $IMAGE_NAME \
  ./server

# Проверка успешности сборки
if [ $? -eq 0 ]; then
  echo "Docker image '$IMAGE_NAME' built successfully in production mode."
else
  echo "Docker build failed."
  exit 1
fi
