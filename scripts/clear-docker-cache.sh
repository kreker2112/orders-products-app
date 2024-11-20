#!/bin/bash

echo "Stopping all running containers..."
docker stop $(docker ps -q) 2>/dev/null || echo "No running containers to stop."

echo "Removing all stopped containers..."
docker rm $(docker ps -aq) 2>/dev/null || echo "No stopped containers to remove."

echo "Removing all images..."
docker rmi $(docker images -q) --force 2>/dev/null || echo "No images to remove."

echo "Removing all unused volumes..."
docker volume prune -f || echo "No unused volumes to remove."

echo "Removing all unused networks..."
docker network prune -f || echo "No unused networks to remove."

echo "Removing all build cache..."
docker builder prune --all -f || echo "No build cache to remove."

echo "Removing all dangling layers and caches..."
docker system prune -a --volumes -f || echo "No dangling layers or caches to remove."

echo "Checking remaining Docker objects..."
docker system df

echo "Docker cache cleared successfully!"
