#!/bin/bash

# Переходим в корневую директорию проекта
cd "$(dirname "$0")/.."

# Останавливаем контейнеры
docker-compose down

# Запускаем Docker Compose (выберите нужную среду)
if [ "$1" == "prod" ]; then
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
else
  docker-compose up --build
fi
