-- Initial schema for Exam Portal

CREATE TABLE IF NOT EXISTS users (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email       TEXT UNIQUE NOT NULL,
    password    TEXT NOT NULL,
    full_name   TEXT,
    role        TEXT NOT NULL DEFAULT 'student',
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS subjects (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name        TEXT NOT NULL,
    level       TEXT NOT NULL CHECK (level IN ('11plus', 'gcse', 'alevel')),
    description TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS topics (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_id  UUID REFERENCES subjects(id) ON DELETE CASCADE,
    name        TEXT NOT NULL,
    description TEXT,
    order_index INTEGER DEFAULT 0,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS resources (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    topic_id    UUID REFERENCES topics(id) ON DELETE CASCADE,
    title       TEXT NOT NULL,
    type        TEXT NOT NULL CHECK (type IN ('pdf', 'video', 'quiz', 'note', 'link')),
    url         TEXT,
    content     TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS study_plans (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID REFERENCES users(id) ON DELETE CASCADE,
    name        TEXT NOT NULL,
    target_date DATE,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS plan_items (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    plan_id     UUID REFERENCES study_plans(id) ON DELETE CASCADE,
    topic_id    UUID REFERENCES topics(id),
    scheduled_date DATE NOT NULL,
    duration_mins INTEGER,
    completed   BOOLEAN DEFAULT FALSE,
    notes       TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);