#!/bin/bash

# Переходим в корневую директорию проекта
cd "$(dirname "$0")/.."

# Устанавливаем переменные окружения для разработки
export ENVIRONMENT=development
export SERVER_PORT=3000
export WS_PORT=3001
export CLIENT_PORT=8080
export VUE_APP_API_URL=http://localhost:$SERVER_PORT
export VUE_APP_WS_URL=http://localhost:$WS_PORT
export VUE_APP_IMAGES_URL=http://localhost:$CLIENT_PORT/images

# Останавливаем и удаляем контейнеры
docker-compose -f docker-compose.yml down
