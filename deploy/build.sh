#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Define variables
COMPOSE_FILE="docker-compose.yml"

# Check if docker-compose.yml exists
if [[ ! -f "$COMPOSE_FILE" ]]; then
    echo "Error: $COMPOSE_FILE not found in the current directory."
    exit 1
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Error: Docker is not running. Please start Docker and try again."
    exit 1
fi

# Stop and remove containers
echo "Stopping and removing containers..."
docker-compose down

# Force remove containers
echo "Forcing removal of containers..."
docker-compose rm -f

# Remove dangling images
echo "Removing dangling images..."
docker rmi $(docker images -f "dangling=true" -q) || true


# Remove unused volumes only this project
# echo "Removing unused volumes..."
# docker volume rm $(docker volume ls -qf dangling=true) || true
# Remove unused networks
echo "Removing unused volumes..."
docker volume rm $(docker volume ls -qf dangling=true) || true


# Build and start containers in detached mode
echo "Building and starting containers..."
docker-compose up --build -d

echo "Docker Compose process completed successfully."

# echo "To view logs, run: docker-compose logs -f"
echo "View the Lohs o container logs"
docker-compose logs -f


