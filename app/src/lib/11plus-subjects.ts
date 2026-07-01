export interface Board {
  id: string
  name: string
  usedBy: string
  format: 'Multiple choice' | 'Written' | 'Mixed'
  duration: string
  topics: string[]
  marking: string
  tip: string
  paperLink?: { label: string; url: string }
  color: { header: string; headerText: string; border: string }
}

export interface SubjectContent {
  slug: string
  name: string
  emoji: string
  tagline: string
  headerColor: string
  about: string
  boards: Board[]
  focusTopics: string[]
  practiceLinks: { label: string; url: string; note: string; board: string }[]
  topTips: string[]
}

export const SUBJECTS: SubjectContent[] = [
  // ─── MATHEMATICS ────────────────────────────────────────────────────────────
  {
    slug: 'maths',
    name: 'Mathematics',
    emoji: '🔢',
    tagline: 'Number, shape, data handling and word problems',
    headerColor: 'bg-blue-600',
    about:
      'The 11+ Maths paper tests KS2 maths skills with a heavy focus on speed and problem-solving. Most papers are multiple choice, but some schools use written formats where showing your working earns partial marks even for wrong answers.',
    boards: [
      {
        id: 'gl',
        name: 'GL Assessment',
        usedBy: 'Kent, Buckinghamshire, Hertfordshire, Gloucestershire, Wiltshire, Lincolnshire — the most widely used board in England',
        format: 'Multiple choice',
        duration: '50 minutes · 50 questions (approx. 1 minute per question)',
        topics: [
          'Number: fractions, decimals, percentages, ratio and proportion',
          'Shape & Space: area, perimeter, volume, angles, symmetry',
          'Data Handling: tables, bar charts, pie charts, averages (mean, median, mode)',
          'Problem Solving: multi-step word problems (most common question type)',
          'Algebra basics: sequences, missing numbers, simple equations',
        ],
        marking:
          'One mark per correct answer. No marks deducted for wrong answers — always make your best guess if you are unsure.',
        tip: 'Time management is critical. Aim for 1 minute per question. If stuck, circle the question, move on, and return at the end.',
        paperLink: {
          label: 'Free GL Maths Sample Paper',
          url: 'https://11plus.gl-assessment.co.uk/pages/free-materials',
        },
        color: { header: 'bg-violet-600', headerText: 'text-white', border: 'border-violet-200' },
      },
      {
        id: 'cem',
        name: 'CEM (Durham University)',
        usedBy: 'Some grammar schools in parts of the Midlands, Yorkshire, and other areas — always check your specific school',
        format: 'Multiple choice',
        duration: 'Usually two 45-minute papers (Maths merged with other subjects in the same paper)',
        topics: [
          'Numerical reasoning: spotting patterns and number logic',
          'Mental arithmetic: fast calculations without a calculator',
          'Data interpretation: extracting answers from charts and tables quickly',
          'Problem solving under tight time pressure',
        ],
        marking:
          'One mark per correct answer. No negative marking. The test is deliberately less predictable than GL to reduce over-coaching.',
        tip: 'CEM is faster-paced than GL — the biggest skill is speed not technique. Do daily timed mental maths drills (10 minutes) more than drilling past papers.',
        paperLink: {
          label: 'CEM-style Practice (Bond 11+)',
          url: 'https://www.bond11plus.co.uk/11-plus-test-papers/',
        },
        color: { header: 'bg-blue-600', headerText: 'text-white', border: 'border-blue-200' },
      },
      {
        id: 'csse',
        name: 'CSSE — Essex Consortium',
        usedBy: 'Colchester Royal Grammar, Chelmsford County High, King Edward VI Grammar (Chelmsford), Colchester County High, Westcliff High for Boys, Westcliff High for Girls',
        format: 'Written',
        duration: '60 minutes · approximately 25 questions — written answers, not multiple choice',
        topics: [
          'Full KS2 curriculum plus harder extension topics',
          'Multi-step word problems requiring full written solutions',
          'Fractions, decimals, percentages, ratio and proportion',
          'Shape, space, data handling and algebra',
        ],
        marking:
          'Method marks are awarded — you can earn partial credit for correct working even if your final answer is wrong. Always show every step.',
        tip: 'Always show your working — never just write the answer. Even a wrong final answer can earn marks if the method is correct. Read each question twice before answering.',
        paperLink: {
          label: 'CSSE Past Papers',
          url: 'https://www.csse.org.uk/',
        },
        color: { header: 'bg-teal-600', headerText: 'text-white', border: 'border-teal-200' },
      },
      {
        id: 'own',
        name: "School's Own Paper",
        usedBy: "Tiffin School, Wilson's School, Sutton Grammar, Nonsuch, Wallington schools, Henrietta Barnett, QE Barnet, St Olave's, Birmingham KE schools, Reading School, Kendrick",
        format: 'Mixed',
        duration: 'Varies — usually 45–75 minutes. Check the school website.',
        topics: [
          'Similar KS2 content to GL but often harder problem-solving',
          "Tiffin: highly challenging multi-step problems designed to sort top candidates",
          "Wilson's / Sutton group: extension problems, some logic puzzles",
          'Birmingham KE schools: standardised entrance paper set jointly',
        ],
        marking: 'Varies by school — check the school\'s published sample paper and mark scheme.',
        tip: "Download that school's own sample paper from their website first — the style can be very different from GL/CEM. Don't waste time on generic papers before you know the format.",
        color: { header: 'bg-amber-500', headerText: 'text-white', border: 'border-amber-200' },
      },
    ],
    focusTopics: [
      'Times tables up to 12×12 — instant recall',
      'Converting between fractions, decimals and percentages',
      'Long multiplication and division without a calculator',
      'Area and perimeter of rectangles, triangles and compound shapes',
      'Angles: on a line (180°), in a triangle (180°), in a quadrilateral (360°)',
      'Reading and interpreting graphs, tables and charts',
      'Multi-step word problems (the most common question type in all boards)',
      'Ratio and proportion',
      'Number sequences and simple algebra (find the missing number)',
      'Units of measure, time calculations and money problems',
    ],
    practiceLinks: [
      {
        label: 'GL Assessment: Free Maths Sample Papers',
        url: 'https://11plus.gl-assessment.co.uk/pages/free-materials',
        note: 'Official free familiarisation papers from GL Assessment',
        board: 'GL Assessment',
      },
      {
        label: 'CGP: Free 11+ Maths Practice Tests',
        url: 'https://www.cgpbooks.co.uk/info/preparing-for-the-11-plus-with-cgp/free-11-plus-practice-tests',
        note: 'Free downloadable Maths tests from CGP',
        board: 'GL Assessment / CEM',
      },
      {
        label: 'Free 11+ Maths Papers (sats-papers.co.uk)',
        url: 'https://www.sats-papers.co.uk/11-plus-papers/maths/',
        note: 'Large bank of free past papers with mark schemes',
        board: 'GL Assessment',
      },
      {
        label: 'Prep4All: Auto-marked Maths Practice',
        url: 'https://prep4all.co.uk/11-plus-practice-tests',
        note: 'Online practice with instant marking and explanations',
        board: 'All boards',
      },
    ],
    topTips: [
      'Master times tables first — instant recall up to 12×12 unlocks almost everything else in the Maths paper.',
      'Practise under timed conditions every session, even early on. Knowing the answer but being too slow still means lost marks.',
      'For GL and CEM (multiple choice): skip and come back — never spend more than 90 seconds on one question.',
      'For CSSE and written papers: always write every method step, even for "obvious" answers. Method marks are real.',
      "Learn to estimate quickly — if 6.3 × 8 should be 'around 50', a calculator answer of 5.04 is clearly a mistake.",
    ],
  },

  // ─── ENGLISH ────────────────────────────────────────────────────────────────
  {
    slug: 'english',
    name: 'English',
    emoji: '📝',
    tagline: 'Reading comprehension, vocabulary and written expression',
    headerColor: 'bg-amber-500',
    about:
      'English 11+ tests how well a child reads, understands and uses language. Every board includes reading comprehension. Some also test creative writing, spelling and grammar separately. Building a wide vocabulary is the single most valuable thing a child can do for their English score.',
    boards: [
      {
        id: 'gl',
        name: 'GL Assessment',
        usedBy: 'Kent, Buckinghamshire, Hertfordshire, Gloucestershire, Wiltshire, Lincolnshire',
        format: 'Multiple choice',
        duration: '50 minutes · comprehension passage with multiple choice questions',
        topics: [
          'Reading comprehension: literal questions (what it says) and inferential (what it means)',
          'Vocabulary in context: what a word means in the passage',
          'Author technique: why did the author use this word or phrase?',
          'Identifying fact vs opinion',
          'Spelling and grammar (in some versions)',
        ],
        marking:
          'One mark per correct answer. No negative marking — always answer every question.',
        tip: 'Read the questions before you read the passage. Then read the passage and answer as you go. For vocabulary questions, read the full sentence — the surrounding words give the answer.',
        paperLink: {
          label: 'Free GL English Sample Paper',
          url: 'https://11plus.gl-assessment.co.uk/pages/free-materials',
        },
        color: { header: 'bg-violet-600', headerText: 'text-white', border: 'border-violet-200' },
      },
      {
        id: 'cem',
        name: 'CEM (Durham University)',
        usedBy: 'Some grammar schools in the Midlands and other areas — check your school',
        format: 'Multiple choice',
        duration: 'Two 45-minute papers — English integrated with verbal reasoning',
        topics: [
          'Cloze tests: choose the correct word to fill a blank in a passage',
          'Comprehension: multiple choice questions on a reading passage',
          'Vocabulary: synonyms, antonyms, word meanings',
          'Verbal reasoning embedded in English sections',
        ],
        marking:
          'One mark per correct answer. Vocabulary knowledge is more heavily tested than in GL — wide reading is the best preparation.',
        tip: "CEM is deliberately unpredictable. The best preparation is reading — not just past papers. Read one challenging book per month above your year group level.",
        paperLink: {
          label: 'CEM-style English Practice (Bond 11+)',
          url: 'https://www.bond11plus.co.uk/11-plus-test-papers/',
        },
        color: { header: 'bg-blue-600', headerText: 'text-white', border: 'border-blue-200' },
      },
      {
        id: 'csse',
        name: 'CSSE — Essex Consortium',
        usedBy: 'Colchester Royal Grammar, Chelmsford County High, KEGS, Colchester County High, Westcliff High for Boys and Girls',
        format: 'Written',
        duration: 'Two 30-minute sections: comprehension (written answers) + creative writing essay',
        topics: [
          'Reading comprehension: written answers quoting from the text',
          'Creative writing: a structured essay or story (usually a choice of two prompts)',
          'Punctuation and grammar within the writing piece',
          'Ambitious vocabulary and varied sentence structures',
        ],
        marking:
          "Marks for comprehension answers reward using evidence from the text. Creative writing is marked on structure, vocabulary, accuracy and engagement. There is no multiple choice — your writing quality matters.",
        tip: 'The creative writing section separates candidates significantly. Practise writing opening paragraphs that hook the reader — a vivid opening scores well. Learn to plan (30 seconds) before you write.',
        paperLink: {
          label: 'CSSE Past Papers',
          url: 'https://www.csse.org.uk/',
        },
        color: { header: 'bg-teal-600', headerText: 'text-white', border: 'border-teal-200' },
      },
      {
        id: 'own',
        name: "School's Own Paper",
        usedBy: "Tiffin Girls', Wallington, Sutton schools, Birmingham KE schools, Henrietta Barnett, QE Barnet, Reading School, Kendrick",
        format: 'Mixed',
        duration: 'Varies — usually comprehension + writing in 45–60 minutes',
        topics: [
          'Detailed comprehension questions requiring evidence from the text',
          'Creative or discursive writing at a high standard',
          'Strong grammar and punctuation expected throughout',
          "Sophisticated vocabulary rewarded — examiners notice variety",
        ],
        marking: 'Varies. Download and read the specific school\'s sample mark scheme to understand what examiners look for.',
        tip: "Download the school's own sample paper and mark scheme. Some schools publish example answers — read these carefully to understand the expected standard.",
        color: { header: 'bg-amber-500', headerText: 'text-white', border: 'border-amber-200' },
      },
    ],
    focusTopics: [
      'Read for 20 minutes daily — fiction and non-fiction both',
      'Build vocabulary: note new words and their meanings in a notebook',
      'Comprehension technique: Point → Evidence (quote) → Explain',
      'Understand author intent: why this word? why this technique?',
      'Creative writing: strong opening, clear structure, satisfying ending',
      'Vary sentence lengths — mix short punchy sentences with longer ones',
      'Punctuation: full stops, commas, speech marks, semicolons, colons',
      'Spelling patterns: prefixes, suffixes, common tricky words',
      'Synonyms: find five alternatives for common words (said, big, happy, went)',
      'Grammar: active vs passive voice, types of noun, adjective placement',
    ],
    practiceLinks: [
      {
        label: 'GL Assessment: Free English Sample Papers',
        url: 'https://11plus.gl-assessment.co.uk/pages/free-materials',
        note: 'Official free GL comprehension papers',
        board: 'GL Assessment',
      },
      {
        label: 'CGP: Free 11+ English Practice Tests',
        url: 'https://www.cgpbooks.co.uk/info/preparing-for-the-11-plus-with-cgp/free-11-plus-practice-tests',
        note: 'Free CGP comprehension and writing papers',
        board: 'GL Assessment / CEM',
      },
      {
        label: 'Free 11+ English Papers (sats-papers.co.uk)',
        url: 'https://www.sats-papers.co.uk/11-plus-papers/english/',
        note: 'Free English past papers with answers',
        board: 'GL Assessment',
      },
    ],
    topTips: [
      'Wide reading is the highest-return activity in English prep — aim for one challenging book per month, above your year group.',
      'For comprehension: always quote from the text in your answers. Unsupported opinions score low.',
      "For multiple choice comprehension: read the questions first, then the passage, then answer as you go — don't read the whole passage before looking at questions.",
      'Build a vocabulary notebook. Learn 5 new words a week and use them in sentences.',
      'In creative writing, plan before you write — even 30 seconds of planning produces a much better structured piece.',
    ],
  },

  // ─── VERBAL REASONING ───────────────────────────────────────────────────────
  {
    slug: 'verbal-reasoning',
    name: 'Verbal Reasoning',
    emoji: '💬',
    tagline: 'Word patterns, letter codes, sequences and logic',
    headerColor: 'bg-green-600',
    about:
      "Verbal Reasoning (VR) tests a child's ability to work with words, patterns and codes under time pressure. GL Assessment uses 21 distinct question types that can all be learned and practised. CEM integrates VR into English sections. If your target school uses GL VR, learning all 21 question types is the single most important thing to do.",
    boards: [
      {
        id: 'gl',
        name: 'GL Assessment',
        usedBy: 'Kent, Buckinghamshire, Hertfordshire, Gloucestershire, Wiltshire, Lincolnshire',
        format: 'Multiple choice',
        duration: '50 minutes · 80 questions (approximately 37 seconds per question)',
        topics: [
          'Find the hidden word (e.g. "he came BACK" contains a hidden word)',
          'Letter series: find the next letter in a sequence (A, C, E, G, ?)',
          'Number-letter codes: crack the code and apply it to a new word',
          'Word connections: find the word that links two groups',
          'Analogies: "cat is to kitten as dog is to ___"',
          'Compound words, missing letters, word meanings',
          '21 question types in total — all learnable with practice',
        ],
        marking:
          'One mark per correct answer. No negative marking. At 37 seconds per question, speed is as important as accuracy.',
        tip: 'Buy or download a list of all 21 GL VR question types and learn them one by one. Once you know the type, questions become much easier. Timed drills matter more than untimed practice.',
        paperLink: {
          label: 'Free GL VR Sample Papers',
          url: 'https://11plus.gl-assessment.co.uk/pages/free-materials',
        },
        color: { header: 'bg-violet-600', headerText: 'text-white', border: 'border-violet-200' },
      },
      {
        id: 'cem',
        name: 'CEM (Durham University)',
        usedBy: 'Some schools in the Midlands and other areas — check your school',
        format: 'Multiple choice',
        duration: 'VR integrated into 45-minute English/VR combined papers',
        topics: [
          'Vocabulary: synonyms and antonyms (most common type)',
          'Cloze tests: choose the correct word to fill a gap in a passage',
          'Word meanings in context',
          'Verbal reasoning patterns embedded in comprehension passages',
        ],
        marking:
          'One mark per correct answer. Vocabulary is more central than in GL VR. Wide reading and a strong vocabulary are the best preparation.',
        tip: 'CEM VR is less about knowing 21 question types and more about having a wide vocabulary. Focus on reading widely and learning new words rather than drilling question types.',
        paperLink: {
          label: 'CEM-style VR Practice (Bond 11+)',
          url: 'https://www.bond11plus.co.uk/11-plus-test-papers/',
        },
        color: { header: 'bg-blue-600', headerText: 'text-white', border: 'border-blue-200' },
      },
      {
        id: 'own',
        name: "School's Own / Consortium Paper",
        usedBy: "Some London selective schools include verbal reasoning-style elements in their own papers",
        format: 'Mixed',
        duration: 'Varies — check your school',
        topics: [
          'Word logic and puzzles at a higher level than GL',
          'Vocabulary under time pressure',
          'Some schools combine VR with English in a single paper',
        ],
        marking: 'Varies by school.',
        tip: "Check whether your target school tests VR as a separate paper or within their English paper. Download their published sample papers to see the exact format.",
        color: { header: 'bg-amber-500', headerText: 'text-white', border: 'border-amber-200' },
      },
    ],
    focusTopics: [
      'Learn all 21 GL Assessment VR question types (essential for GL schools)',
      'Letter series: A, C, E, G → spot the pattern (skip 1 letter)',
      'Number codes: if A=1, B=2 → decode and recode new words',
      'Hidden words in sentences: "the caMELeon" contains CAMEL',
      'Word analogies: cat → kitten, dog → ? (puppy)',
      'Synonyms and antonyms: daily vocabulary building',
      'Compound words: what word joins OVER and BOARD?',
      'Timed practice: 80 questions in 50 minutes requires 37 seconds per question',
      'Pattern recognition in word sequences',
      'Double meanings: words that can mean two different things',
    ],
    practiceLinks: [
      {
        label: 'Free GL VR Sample Papers',
        url: 'https://11plus.gl-assessment.co.uk/pages/free-materials',
        note: 'Official GL VR familiarisation papers',
        board: 'GL Assessment',
      },
      {
        label: 'Free 11+ VR Papers (sats-papers.co.uk)',
        url: 'https://www.sats-papers.co.uk/11-plus-papers/verbal-reasoning/',
        note: 'Free VR past papers covering all 21 GL question types',
        board: 'GL Assessment',
      },
      {
        label: '11PlusEHelp: Online VR Practice',
        url: 'https://www.11plusehelp.co.uk/',
        note: 'Free online VR practice with instant marking',
        board: 'GL Assessment',
      },
      {
        label: 'CGP: Free 11+ VR Practice Tests',
        url: 'https://www.cgpbooks.co.uk/info/preparing-for-the-11-plus-with-cgp/free-11-plus-practice-tests',
        note: 'Free CGP VR papers with answers',
        board: 'GL Assessment',
      },
    ],
    topTips: [
      'Learn all 21 GL question types systematically before drilling mixed papers — knowing the type makes the answer much faster to find.',
      'Do 10 minutes of timed VR practice every day. Consistency beats long weekend sessions.',
      'Improve vocabulary constantly — synonyms, antonyms and word roots help with multiple question types at once.',
      'For letter series questions, write out A=1, B=2… on rough paper until you can do it in your head.',
      'For GL VR, never spend more than 40 seconds on a question — an educated guess and move on is always better than getting stuck.',
    ],
  },

  // ─── NON-VERBAL REASONING ───────────────────────────────────────────────────
  {
    slug: 'non-verbal-reasoning',
    name: 'Non-Verbal Reasoning',
    emoji: '🔷',
    tagline: 'Shapes, patterns, rotations and spatial thinking',
    headerColor: 'bg-purple-600',
    about:
      "Non-Verbal Reasoning (NVR) tests a child's ability to identify patterns, relationships and rules using shapes and pictures rather than words. It is often described as a test of natural ability because it's harder to coach than Maths or VR — but the question types are still learnable and pattern recognition improves significantly with practice.",
    boards: [
      {
        id: 'gl',
        name: 'GL Assessment',
        usedBy: 'Kent, Buckinghamshire, Hertfordshire, Gloucestershire, Wiltshire, Lincolnshire',
        format: 'Multiple choice',
        duration: '50 minutes · 50–80 questions depending on the school',
        topics: [
          'Matrices: find what fits in the missing square of a pattern grid',
          'Series: find the next shape in a sequence',
          'Similarities and differences: which shape is the odd one out?',
          'Reflections: mirror image of a shape',
          'Rotations: shape turned 90°, 180° or 270°',
          'Nets: which net folds to make this 3D shape?',
          '3D shapes and views from different angles',
          'Shape analogies: first shape relates to second as third relates to ?',
        ],
        marking:
          'One mark per correct answer. No negative marking. Always answer every question.',
        tip: 'Draw on the question paper when allowed — trace rotations and reflections on paper until you can do them in your head. Physically drawing helps more than staring.',
        paperLink: {
          label: 'Free GL NVR Sample Papers',
          url: 'https://11plus.gl-assessment.co.uk/pages/free-materials',
        },
        color: { header: 'bg-violet-600', headerText: 'text-white', border: 'border-violet-200' },
      },
      {
        id: 'cem',
        name: 'CEM (Durham University)',
        usedBy: 'Some schools in the Midlands and other areas — check your school',
        format: 'Multiple choice',
        duration: 'Spatial/NVR questions mixed into combined papers',
        topics: [
          'Spatial reasoning: rotating and reflecting shapes',
          'Pattern completion: matrices and series',
          'Shape codes and analogies',
          'Fewer dedicated NVR questions than GL — mixed in with other sections',
        ],
        marking:
          'One mark per correct answer. Spatial awareness improves with hands-on practice — building 3D puzzles and working with tangrams helps.',
        tip: 'Since CEM mixes NVR in with other subjects, practise switching between question types quickly — spending too long on one type when the paper moves on costs marks.',
        paperLink: {
          label: 'CEM-style NVR Practice (Bond 11+)',
          url: 'https://www.bond11plus.co.uk/11-plus-test-papers/',
        },
        color: { header: 'bg-blue-600', headerText: 'text-white', border: 'border-blue-200' },
      },
      {
        id: 'own',
        name: "School's Own Paper",
        usedBy: "Some London and Birmingham selective schools include spatial reasoning in their own papers",
        format: 'Mixed',
        duration: 'Varies — check your school',
        topics: [
          "Tiffin School: has a significant NVR/spatial component in their paper",
          'Other schools: NVR-style questions within a combined reasoning paper',
          'Check whether NVR is tested separately or within a reasoning paper',
        ],
        marking: 'Varies. Check the school\'s sample paper.',
        tip: "If your target school has a significant NVR component, buy physical shape puzzles and tangrams — hands-on 3D practice builds spatial reasoning faster than paper-only drills.",
        color: { header: 'bg-amber-500', headerText: 'text-white', border: 'border-amber-200' },
      },
    ],
    focusTopics: [
      'Matrices: find the rule across rows and columns, then apply it to the missing cell',
      'Rotations: practice turning shapes 90°, 180° and 270° clockwise and anticlockwise',
      'Reflections: mirror images across vertical, horizontal and diagonal lines',
      'Series: spot what changes each step (size, shading, shape, position, number of sides)',
      'Odd-one-out: find what property makes one shape different from the others',
      'Nets of 3D shapes: cube, cuboid, tetrahedron, cylinder — which net folds up correctly?',
      'Analogies: shape A relates to shape B the same way shape C relates to ?',
      'Codes: shapes with letters/numbers assigned — crack the code, find the answer',
      'Shape similarities: find two shapes that share the same properties',
      'Views: what does this 3D shape look like from the side / top / front?',
    ],
    practiceLinks: [
      {
        label: 'Free GL NVR Sample Papers',
        url: 'https://11plus.gl-assessment.co.uk/pages/free-materials',
        note: 'Official GL NVR familiarisation papers',
        board: 'GL Assessment',
      },
      {
        label: 'Free 11+ NVR Papers (sats-papers.co.uk)',
        url: 'https://www.sats-papers.co.uk/11-plus-papers/non-verbal-reasoning/',
        note: 'Free NVR past papers with mark schemes',
        board: 'GL Assessment',
      },
      {
        label: '11PlusEHelp: Online NVR Practice',
        url: 'https://www.11plusehelp.co.uk/',
        note: 'Free online NVR tests with auto-marking',
        board: 'GL Assessment',
      },
      {
        label: 'CGP: Free 11+ NVR Practice Tests',
        url: 'https://www.cgpbooks.co.uk/info/preparing-for-the-11-plus-with-cgp/free-11-plus-practice-tests',
        note: 'Free downloadable NVR tests from CGP',
        board: 'GL Assessment',
      },
    ],
    topTips: [
      'Learn the main question categories first: matrices, series, reflections, rotations, nets, odd-one-out, analogies. Once you know the category, you know what to look for.',
      'Physical practice builds spatial reasoning faster than paper drills — use tangrams, Rubik\'s cubes, jigsaw puzzles and 3D building toys.',
      'For matrices, check every row and every column for the rule before answering — sometimes the rule runs diagonally.',
      'For rotations and reflections, draw a single reference point (like one corner) and track where it moves — this is faster than rotating the whole shape mentally.',
      'NVR improves more slowly than Maths or VR — start early (at least 6 months before the exam) and practise consistently.',
    ],
  },
]

export const SUBJECT_CARDS = [
  { slug: 'maths', name: 'Mathematics', emoji: '🔢', tagline: 'Number, shape, data & word problems', bg: 'bg-blue-50', border: 'border-blue-200', heading: 'text-blue-700' },
  { slug: 'english', name: 'English', emoji: '📝', tagline: 'Comprehension, vocabulary & writing', bg: 'bg-amber-50', border: 'border-amber-200', heading: 'text-amber-700' },
  { slug: 'verbal-reasoning', name: 'Verbal Reasoning', emoji: '💬', tagline: 'Word patterns, letter codes & logic', bg: 'bg-green-50', border: 'border-green-200', heading: 'text-green-700' },
  { slug: 'non-verbal-reasoning', name: 'Non-Verbal Reasoning', emoji: '🔷', tagline: 'Shapes, patterns & spatial thinking', bg: 'bg-purple-50', border: 'border-purple-200', heading: 'text-purple-700' },
]