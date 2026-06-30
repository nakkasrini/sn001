#!/bin/bash
# Deploy or update the app on any Linux server
# Usage: ./scripts/deploy.sh
set -e

APP_DIR="/home/ubuntu/examportal"
REPO_URL="https://github.com/nakkasrini/sn001.git"

echo "=== Deploying Exam Portal ==="

if [ -d "$APP_DIR" ]; then
  echo "Pulling latest code..."
  git -C $APP_DIR pull origin main
else
  echo "Cloning repo..."
  git clone $REPO_URL $APP_DIR
fi

cd $APP_DIR

if [ ! -f ".env" ]; then
  echo "ERROR: .env file not found. Copy .env.example to .env and fill in values."
  exit 1
fi

echo "=== Building and starting containers ==="
docker compose pull
docker compose up -d --build

echo "=== Deploy complete. App running at http://$(curl -s ifconfig.me) ==="