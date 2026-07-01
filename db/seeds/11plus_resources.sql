-- Seed: 11+ past paper resource links, one topic per subject

-- Create one "Past Papers & Practice" topic per 11+ subject
INSERT INTO topics (subject_id, name, description, order_index)
SELECT id, 'Past Papers & Practice', 'Free past papers and online practice for ' || name, 1
FROM subjects
WHERE level = '11plus';

-- ── Mathematics ──────────────────────────────────────────────────────────────

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'GL Assessment: Free Maths Sample Papers', 'link',
  'https://11plus.gl-assessment.co.uk/pages/free-materials',
  'Official free familiarisation papers from GL Assessment — the main 11+ exam board for most grammar schools.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Mathematics' AND t.name = 'Past Papers & Practice';

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'CGP: Free 11+ Maths Practice Tests', 'link',
  'https://www.cgpbooks.co.uk/info/preparing-for-the-11-plus-with-cgp/free-11-plus-practice-tests',
  'Free downloadable Maths practice tests from CGP, covering all key 11+ topics.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Mathematics' AND t.name = 'Past Papers & Practice';

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'Free 11+ Maths Papers (sats-papers.co.uk)', 'link',
  'https://www.sats-papers.co.uk/11-plus-papers/maths/',
  'Large collection of free 11+ Maths past papers with mark schemes.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Mathematics' AND t.name = 'Past Papers & Practice';

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'Prep4All: Auto-marked Maths Practice', 'link',
  'https://prep4all.co.uk/11-plus-practice-tests',
  'Free online 11+ Maths tests with instant marking and explanations.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Mathematics' AND t.name = 'Past Papers & Practice';

-- ── English ───────────────────────────────────────────────────────────────────

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'GL Assessment: Free English Sample Papers', 'link',
  'https://11plus.gl-assessment.co.uk/pages/free-materials',
  'Official free English familiarisation papers from GL Assessment.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'English' AND t.name = 'Past Papers & Practice';

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'CGP: Free 11+ English Practice Tests', 'link',
  'https://www.cgpbooks.co.uk/info/preparing-for-the-11-plus-with-cgp/free-11-plus-practice-tests',
  'Free downloadable English comprehension and writing practice papers from CGP.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'English' AND t.name = 'Past Papers & Practice';

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'Free 11+ English Papers (sats-papers.co.uk)', 'link',
  'https://www.sats-papers.co.uk/11-plus-papers/english/',
  'Free 11+ English past papers covering comprehension and creative writing with answers.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'English' AND t.name = 'Past Papers & Practice';

-- ── Verbal Reasoning ──────────────────────────────────────────────────────────

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'GL Assessment: Free VR Sample Papers', 'link',
  'https://11plus.gl-assessment.co.uk/pages/free-materials',
  'Official free Verbal Reasoning familiarisation papers from GL Assessment.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Verbal Reasoning' AND t.name = 'Past Papers & Practice';

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'Free 11+ VR Papers (sats-papers.co.uk)', 'link',
  'https://www.sats-papers.co.uk/11-plus-papers/verbal-reasoning/',
  'Free 11+ Verbal Reasoning papers with answers — covers all VR question types.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Verbal Reasoning' AND t.name = 'Past Papers & Practice';

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  '11PlusEHelp: Online VR Practice', 'link',
  'https://www.11plusehelp.co.uk/',
  'Free online Verbal Reasoning practice tests with instant marking and progress tracking.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Verbal Reasoning' AND t.name = 'Past Papers & Practice';

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'CGP: Free 11+ VR Practice Tests', 'link',
  'https://www.cgpbooks.co.uk/info/preparing-for-the-11-plus-with-cgp/free-11-plus-practice-tests',
  'Free downloadable VR practice papers from CGP with answers.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Verbal Reasoning' AND t.name = 'Past Papers & Practice';

-- ── Non-Verbal Reasoning ──────────────────────────────────────────────────────

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'GL Assessment: Free NVR Sample Papers', 'link',
  'https://11plus.gl-assessment.co.uk/pages/free-materials',
  'Official free Non-Verbal Reasoning familiarisation papers from GL Assessment.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Non-Verbal Reasoning' AND t.name = 'Past Papers & Practice';

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'Free 11+ NVR Papers (sats-papers.co.uk)', 'link',
  'https://www.sats-papers.co.uk/11-plus-papers/non-verbal-reasoning/',
  'Free 11+ Non-Verbal Reasoning past papers with mark schemes.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Non-Verbal Reasoning' AND t.name = 'Past Papers & Practice';

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  '11PlusEHelp: Online NVR Practice', 'link',
  'https://www.11plusehelp.co.uk/',
  'Free online Non-Verbal Reasoning practice with auto-marking.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Non-Verbal Reasoning' AND t.name = 'Past Papers & Practice';

INSERT INTO resources (topic_id, title, type, url, content)
SELECT t.id,
  'CGP: Free 11+ NVR Practice Tests', 'link',
  'https://www.cgpbooks.co.uk/info/preparing-for-the-11-plus-with-cgp/free-11-plus-practice-tests',
  'Free downloadable NVR practice tests from CGP with full answers.'
FROM topics t JOIN subjects s ON t.subject_id = s.id
WHERE s.level = '11plus' AND s.name = 'Non-Verbal Reasoning' AND t.name = 'Past Papers & Practice';