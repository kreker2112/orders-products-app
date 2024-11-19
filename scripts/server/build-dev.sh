#!/bin/bash

# Устанавливаем переменные для режима разработки
ENVIRONMENT=development
PORT=3000
WS_PORT=3001
IMAGE_NAME=orders-products-app-server-dev

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
  echo "Docker image '$IMAGE_NAME' built successfully in development mode."
else
  echo "Docker build failed."
  exit 1
fi
