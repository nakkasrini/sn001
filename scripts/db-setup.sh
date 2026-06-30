#!/bin/bash
# Set up PostgreSQL database and user for the exam portal
set -e

DB_NAME="examportal"
DB_USER="examportal"
DB_PASS="${DB_PASSWORD:-examportal123}"

echo "=== Creating database user and database ==="
sudo -u postgres psql <<SQL
DO \$\$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '${DB_USER}') THEN
    CREATE ROLE ${DB_USER} WITH LOGIN PASSWORD '${DB_PASS}';
  END IF;
END
\$\$;

CREATE DATABASE ${DB_NAME} OWNER ${DB_USER};
GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};
SQL

echo "=== Running migrations ==="
PGPASSWORD=$DB_PASS psql -U $DB_USER -d $DB_NAME -f "$(dirname "$0")/../db/migrations/001_initial.sql"

echo "=== Seeding subjects ==="
PGPASSWORD=$DB_PASS psql -U $DB_USER -d $DB_NAME -f "$(dirname "$0")/../db/seeds/subjects.sql"

echo "=== Database ready ==="