#!/bin/bash
# Run on a fresh Ubuntu 22.04+ VM to install all dependencies
set -e

echo "=== Installing Node.js 20 ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs

echo "=== Installing Git ==="
sudo apt-get install -y git

echo "=== Installing Nginx ==="
sudo apt-get install -y nginx

echo "=== Installing PostgreSQL ==="
sudo apt-get install -y postgresql postgresql-contrib

echo "=== Installing Docker ==="
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu noble stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update -y
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo usermod -aG docker $USER
sudo systemctl enable docker && sudo systemctl start docker
sudo systemctl enable nginx && sudo systemctl start nginx
sudo systemctl enable postgresql && sudo systemctl start postgresql

echo "=== Done ==="
node --version && npm --version && docker --version && psql --version