# Exam Portal

A central hub for **11+, GCSE, and A Level** exam resources with a built-in student study planner.

## Features

- Browse exam resources by level (11+, GCSE, A Level), subject, and topic
- Student login and signup
- Personalised study planner — schedule topics, track progress
- Fully containerised — deploy on any cloud (AWS, GCP, Azure) or locally

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend & API | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL 16 |
| Auth | JWT (cookie-based) |
| Reverse Proxy | Nginx |
| Containers | Docker + Docker Compose |

## Project Structure

```
sn001/
├── app/                        # Next.js application
│   └── src/
│       ├── app/                # Routes (App Router)
│       │   ├── (auth)/         # Login / Signup pages
│       │   ├── resources/      # 11plus / gcse / alevel resource pages
│       │   ├── planner/        # Study planner (auth required)
│       │   └── api/            # API routes
│       ├── components/         # Reusable UI components
│       └── lib/                # DB client, types, auth helpers
├── db/
│   ├── migrations/             # SQL schema migrations
│   └── seeds/                  # Seed data (subjects, topics)
├── nginx/
│   └── nginx.conf              # Reverse proxy config
├── scripts/
│   ├── setup.sh                # One-shot VM setup (Node, Docker, Nginx, PG)
│   ├── db-setup.sh             # Create DB user, run migrations and seeds
│   └── deploy.sh               # Pull latest code and restart containers
├── Dockerfile
├── docker-compose.yml
└── .env.example
```

## Getting Started

### Local Development

```bash
git clone https://github.com/nakkasrini/sn001.git
cd sn001
cp .env.example .env          # fill in your values
docker compose up -d          # starts app + postgres + nginx
```

App is available at [http://localhost](http://localhost)

### Deploy to any Linux VM (AWS / GCP / Azure)

```bash
# 1. SSH into your server
ssh -i your-key.pem ubuntu@YOUR_SERVER_IP

# 2. Run the one-shot setup script (first time only)
bash <(curl -s https://raw.githubusercontent.com/nakkasrini/sn001/main/scripts/setup.sh)

# 3. Clone repo and configure
git clone https://github.com/nakkasrini/sn001.git ~/examportal
cd ~/examportal
cp .env.example .env
nano .env   # set DATABASE_URL, JWT_SECRET, etc.

# 4. Set up the database
bash scripts/db-setup.sh

# 5. Deploy
bash scripts/deploy.sh
```

### Subsequent deploys

```bash
bash scripts/deploy.sh
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Long random string for JWT signing |
| `NEXTAUTH_SECRET` | Long random string for NextAuth |
| `NEXTAUTH_URL` | Public URL of the app |

## Database

Schema is in [db/migrations/001_initial.sql](db/migrations/001_initial.sql).
Subjects seed data is in [db/seeds/subjects.sql](db/seeds/subjects.sql).

Tables: `users`, `subjects`, `topics`, `resources`, `study_plans`, `plan_items`

## Deployment Targets

This project is cloud-agnostic. The same Docker image runs on:

- AWS EC2 (current dev/test environment: `52.48.229.23`)
- GCP Compute Engine
- Azure VM
- Vercel (app) + Supabase (database) — for production
- Any Linux VM with Docker installed