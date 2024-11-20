#!/bin/bash

echo "Stopping all running containers..."
docker stop $(docker ps -q) 2>/dev/null || echo "No running containers to stop."

echo "Removing all stopped containers..."
docker container prune -f

echo "Removing all dangling images..."
docker image prune -f

echo "Removing all unused volumes..."
docker volume prune -f

echo "Removing all unused networks..."
docker network prune -f

echo "Removing all build cache..."
docker builder prune -f

echo "Listing remaining Docker objects..."
docker system df

echo "Docker cache cleared!"
