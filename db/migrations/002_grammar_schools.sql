CREATE TABLE IF NOT EXISTS grammar_schools (
    id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name             TEXT NOT NULL,
    address          TEXT,
    postcode         TEXT NOT NULL,
    lat              DOUBLE PRECISION NOT NULL,
    lng              DOUBLE PRECISION NOT NULL,
    local_authority  TEXT,
    gender           TEXT CHECK (gender IN ('Boys', 'Girls', 'Mixed')),
    website          TEXT
);