-- Seed core subjects for each level

INSERT INTO subjects (name, level, description) VALUES
  ('Mathematics',        '11plus', 'Core maths for 11+ entrance exams'),
  ('English',            '11plus', 'Reading comprehension and writing skills'),
  ('Verbal Reasoning',   '11plus', 'Verbal reasoning and logic'),
  ('Non-Verbal Reasoning','11plus','Spatial and pattern reasoning'),

  ('Mathematics',        'gcse', 'GCSE Maths — all exam boards'),
  ('English Language',   'gcse', 'GCSE English Language'),
  ('English Literature', 'gcse', 'GCSE English Literature'),
  ('Biology',            'gcse', 'GCSE Biology'),
  ('Chemistry',          'gcse', 'GCSE Chemistry'),
  ('Physics',            'gcse', 'GCSE Physics'),
  ('History',            'gcse', 'GCSE History'),
  ('Geography',          'gcse', 'GCSE Geography'),
  ('Computer Science',   'gcse', 'GCSE Computer Science'),

  ('Mathematics',        'alevel', 'A Level Maths'),
  ('Further Maths',      'alevel', 'A Level Further Mathematics'),
  ('Biology',            'alevel', 'A Level Biology'),
  ('Chemistry',          'alevel', 'A Level Chemistry'),
  ('Physics',            'alevel', 'A Level Physics'),
  ('Economics',          'alevel', 'A Level Economics'),
  ('Psychology',         'alevel', 'A Level Psychology'),
  ('History',            'alevel', 'A Level History'),
  ('Computer Science',   'alevel', 'A Level Computer Science')
ON CONFLICT DO NOTHING;