-- 003: Add exam_board to grammar_schools; create 11+ subject resource topics

ALTER TABLE grammar_schools
  ADD COLUMN IF NOT EXISTS exam_board TEXT;

-- Seed exam boards by local authority / known consortium
UPDATE grammar_schools SET exam_board = 'Kent Test (GL Assessment)'
  WHERE local_authority = 'Kent';

UPDATE grammar_schools SET exam_board = 'Bucks 11+ (GL Assessment)'
  WHERE local_authority = 'Buckinghamshire';

UPDATE grammar_schools SET exam_board = 'CSSE — consortium own papers'
  WHERE name IN (
    'King Edward VI Grammar School',
    'Chelmsford County High School for Girls',
    'Colchester Royal Grammar School',
    'Colchester County High School for Girls',
    'Westcliff High School for Boys',
    'Westcliff High School for Girls'
  );

UPDATE grammar_schools SET exam_board = 'BMAT / school entrance paper'
  WHERE local_authority = 'Birmingham';

UPDATE grammar_schools SET exam_board = 'London borough consortium — own papers'
  WHERE name IN (
    'Tiffin School',
    'Tiffin Girls'' School',
    'Wilson''s School',
    'Wallington County Grammar School',
    'Wallington High School for Girls',
    'Sutton Grammar School',
    'Nonsuch High School for Girls'
  );

UPDATE grammar_schools SET exam_board = 'Barnet — own papers'
  WHERE name IN ('Henrietta Barnett School', 'Queen Elizabeth''s School Barnet');

UPDATE grammar_schools SET exam_board = 'Bromley — own papers'
  WHERE name IN ('St Olave''s Grammar School', 'Newstead Wood School');

UPDATE grammar_schools SET exam_board = 'Berkshire Grammar Consortium'
  WHERE local_authority = 'Berkshire';

UPDATE grammar_schools SET exam_board = 'Hertfordshire 11+ (GL Assessment)'
  WHERE local_authority = 'Hertfordshire';

UPDATE grammar_schools SET exam_board = 'Gloucestershire 11+'
  WHERE local_authority = 'Gloucestershire';

UPDATE grammar_schools SET exam_board = 'Wiltshire 11+'
  WHERE local_authority = 'Wiltshire';

UPDATE grammar_schools SET exam_board = 'Lincolnshire 11+'
  WHERE local_authority = 'Lincolnshire';