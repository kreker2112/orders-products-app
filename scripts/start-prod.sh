#!/bin/bash

# Переходим в корневую директорию проекта
cd "$(dirname "$0")/.."

# Устанавливаем переменные окружения для продакшена
export SERVER_PORT=3000
export WS_PORT=3001
export CLIENT_PORT=8080
export VUE_APP_API_URL=""  # Пустое значение
export VUE_APP_WS_URL=""   # Пустое значение
export VUE_APP_IMAGES_URL="/images"
export ENVIRONMENT=production  # Добавляем ENVIRONMENT

# Запускаем Docker Compose с использованием продакшен-конфигурации
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
