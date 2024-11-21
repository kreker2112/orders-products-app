#!/bin/bash

cd "$(dirname "$0")/.."

echo "Clearing Docker caches before starting production environment..."
./scripts/clear-docker-cache.sh

export SERVER_PORT=3000
export WS_PORT=3001
export CLIENT_PORT=8080
export VUE_APP_API_URL=""
export VUE_APP_WS_URL=""
export VUE_APP_IMAGES_URL=http://localhost:$CLIENT_PORT/images
export ENVIRONMENT=production

docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
