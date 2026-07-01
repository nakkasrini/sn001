export interface Board {
  id: string
  name: string
  specCode: string
  usedBy: string
  format: 'Written' | 'Mixed' | 'Multiple choice'
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

const AQA    = { header: 'bg-violet-600',  headerText: 'text-white', border: 'border-violet-200' }
const EDEXCEL = { header: 'bg-blue-600',   headerText: 'text-white', border: 'border-blue-200'   }
const OCR    = { header: 'bg-teal-600',    headerText: 'text-white', border: 'border-teal-200'   }

export const GCSE_SUBJECTS: SubjectContent[] = [
  // ─── MATHEMATICS ──────────────────────────────────────────────────────────
  {
    slug: 'maths',
    name: 'Mathematics',
    emoji: '🔢',
    tagline: 'Number, algebra, geometry, statistics and probability',
    headerColor: 'bg-blue-600',
    about:
      'GCSE Maths is sat at the end of Year 11 and is graded 1–9. All students sit either Foundation tier (grades 1–5) or Higher tier (grades 4–9). There is no coursework — your grade comes entirely from three written papers. The same core topics appear across all boards; the biggest differences are in question style and the layout of the mark scheme.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '8300',
        usedBy: 'The most popular GCSE Maths board in England — used by the majority of schools',
        format: 'Written',
        duration: '3 papers × 1h 30m (4h 30m total) · 80 marks each · 240 marks total',
        topics: [
          'Paper 1 (non-calculator): Number, ratio, algebra, geometry',
          'Papers 2 & 3 (calculator allowed): All topics including statistics and probability',
          'Higher only: Quadratics, surds, circle theorems, trigonometry (sine/cosine rule), vectors',
          'Foundation: Core number, basic algebra, fractions, percentages, simple geometry',
        ],
        marking:
          'Method marks (M marks) are awarded for correct working even with a wrong answer. Always show every step. A correct answer with no working shown can score 0 on multi-mark questions.',
        tip: 'Check your tier: Foundation caps at grade 5, Higher starts at grade 4. Most selective school students should be on Higher. Check past paper grade boundaries — they shift each year.',
        paperLink: { label: 'AQA GCSE Maths Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '1MA1',
        usedBy: 'Second most popular board — widely used across England',
        format: 'Written',
        duration: '3 papers × 1h 30m (4h 30m total) · 80 marks each · 240 marks total',
        topics: [
          'Same 3-paper structure as AQA: 1 non-calculator, 2 calculator',
          'Topics identical to AQA but question wording and diagrams differ',
          'Edexcel often includes more multi-step "show that" and proof questions at Higher',
          'Foundation tier includes problem-solving in real-life contexts',
        ],
        marking:
          'Method marks awarded throughout. Mark scheme wording differs from AQA — practise with Edexcel-specific mark schemes to understand the expected language.',
        tip: 'Edexcel has a reputation for trickier Higher tier questions at grades 8–9. If aiming for top grades, do extra Edexcel specimen and past papers from 2019 onwards.',
        paperLink: { label: 'Edexcel GCSE Maths Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR',
        specCode: 'J560',
        usedBy: 'Used by a significant number of schools, particularly in some regions',
        format: 'Written',
        duration: '3 papers × 1h 30m (4h 30m total) · 100 marks each',
        topics: [
          '6 strands: Number, Algebra, Geometry and Measures, Ratio, Statistics, Probability',
          'Same Foundation/Higher split — Foundation grades 1–5, Higher grades 4–9',
          'OCR includes more multi-step reasoning and problem-solving across both tiers',
          'Formulae provided in the exam (unlike AQA which expects some to be memorised)',
        ],
        marking:
          'Method marks and accuracy marks throughout. OCR sometimes provides formulae that AQA and Edexcel expect students to have memorised — check your board before revision.',
        tip: 'OCR provides a formulae sheet in the exam. Know which formulae are given and which you must memorise — this is a common trap when switching between boards.',
        paperLink: { label: 'OCR GCSE Maths Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Algebra: expanding brackets, factorising, solving equations and inequalities',
      'Fractions, decimals and percentages — including reverse percentage',
      'Ratio and proportion including best-value problems',
      'Angles, area, perimeter, volume — including composite shapes',
      'Pythagoras\' theorem and basic trigonometry (SOHCAHTOA)',
      'Scatter graphs, frequency tables, cumulative frequency, box plots',
      'Probability: tree diagrams, Venn diagrams, conditional probability',
      'Sequences: nth term for linear and quadratic (Higher)',
      'Graphs: straight lines, quadratics, transformations',
      'Surds, indices and standard form',
    ],
    practiceLinks: [
      { label: 'Maths Genie — Free GCSE Papers & Worked Solutions', url: 'https://www.mathsgenie.co.uk/', note: 'Excellent free past papers and topic-by-topic questions', board: 'All boards' },
      { label: 'Physics & Maths Tutor — GCSE Maths', url: 'https://www.physicsandmathstutor.com/maths-revision/gcse/', note: 'Free past papers and revision notes for all boards', board: 'All boards' },
      { label: 'AQA GCSE Maths Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official past papers and mark schemes from AQA', board: 'AQA' },
      { label: 'Edexcel GCSE Maths Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html', note: 'Official Edexcel past papers', board: 'Edexcel' },
      { label: 'BBC Bitesize GCSE Maths', url: 'https://www.bbc.co.uk/bitesize/examspecs/z8sg6fr', note: 'Free revision content and practice quizzes', board: 'All boards' },
    ],
    topTips: [
      'Past papers are the single best revision tool for GCSE Maths — aim to do at least 10 full papers under timed conditions in the final 3 months.',
      'Always show your working. A wrong answer with clear correct method can still earn 2–3 marks out of 4.',
      "Learn which tier you're sitting — Foundation and Higher have different content and different grade boundaries.",
      'For the calculator papers, know how to use your calculator for standard form, trigonometry and statistics functions — most students lose marks by not using the calculator efficiently.',
      'Targets by grade: Grade 5 = solid Foundation work + most Higher topics; Grade 7+ = Higher with problem-solving fluency; Grade 9 = consistent accuracy on the hardest questions.',
    ],
  },

  // ─── ENGLISH LANGUAGE ─────────────────────────────────────────────────────
  {
    slug: 'english-language',
    name: 'English Language',
    emoji: '📖',
    tagline: 'Reading, analysis and written communication',
    headerColor: 'bg-amber-500',
    about:
      "GCSE English Language tests how well students read and write, not their knowledge of set texts. Every board includes a reading paper (comprehension and analysis of unseen texts) and a writing paper. Strong vocabulary, clear structure and the ability to analyse language techniques are the most important skills. There is no coursework at most schools — all marks come from two exams.",
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '8700',
        usedBy: 'Most widely used English Language board in England',
        format: 'Written',
        duration: 'Paper 1: 1h 45m · Paper 2: 1h 45m (3h 30m total)',
        topics: [
          'Paper 1 — Explorations in Creative Reading and Writing: fiction extract comprehension (25 marks) + creative writing (40 marks)',
          'Paper 2 — Writers\' Viewpoints and Perspectives: two non-fiction texts, compare viewpoints (40 marks) + transactional writing (40 marks)',
          'Language analysis: effect of word choice, structure, tone on the reader',
          'Transactional writing formats: letter, article, speech, review, leaflet',
        ],
        marking:
          'AO1: Identify and interpret. AO2: Analyse language and structure. AO3: Compare. AO4: Evaluate. Each question targets specific AOs — learn which before answering.',
        tip: 'Paper 1 Q4 (evaluation) is worth 20 marks — most students lose marks by just agreeing with the statement. Include a counter-argument or qualification for the highest marks.',
        paperLink: { label: 'AQA English Language Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '1EN0',
        usedBy: 'Widely used across England, particularly common in London and the South East',
        format: 'Written',
        duration: 'Component 1: 1h 45m · Component 2: 1h 45m (3h 30m total)',
        topics: [
          'Component 1 — Fiction and Imaginative Writing: 19th-century fiction extract + creative writing',
          'Component 2 — Non-Fiction and Transactional Writing: two non-fiction texts + transactional writing',
          'Language and structure analysis across both components',
          'Transactional writing: speech, article, letter, report',
        ],
        marking:
          'Skills-based marking assessing reading and writing assessment objectives. Edexcel tends to ask for shorter, more focused analysis questions than AQA.',
        tip: 'Edexcel Component 2 includes a 19th-century non-fiction text. Practise reading Victorian-era writing — the style and vocabulary can trip students up under exam pressure.',
        paperLink: { label: 'Edexcel English Language Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR',
        specCode: 'J351',
        usedBy: 'Used by many schools, particularly strong in the Midlands and some regions',
        format: 'Written',
        duration: 'Component 1: 2h · Component 2: 2h (4h total)',
        topics: [
          'Component 1 — Communicating information and ideas: reading a media text + inform/explain/describe writing',
          'Component 2 — Exploring effects and impact: literary text reading + argue/persuade writing',
          'NEA (Spoken Language component): a prepared speech — assessed separately, does not affect written grade',
          'Language analysis focuses on impact on the reader and writer\'s purpose',
        ],
        marking:
          'OCR uses a levels-based mark scheme — responses are assessed holistically. The spoken language endorsement (Pass/Merit/Distinction) appears on the certificate but does not count toward the 1–9 grade.',
        tip: 'OCR gives a slightly longer exam time than other boards. Use the extra time to plan each writing task (2 minutes planning = significantly better structure).',
        paperLink: { label: 'OCR English Language Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Analysing language: word choice, connotation, figurative language (metaphor, simile, personification)',
      'Analysing structure: how a text is organised and why (opening, turning point, ending)',
      'Inference: reading between the lines — what is implied, not just what is stated',
      'Comparing writers\' viewpoints: similarities, differences, tone and purpose',
      'Creative writing: narrative voice, descriptive writing, engaging openings and endings',
      'Transactional writing: letter (formal/informal), article, speech, review — knowing each format',
      'Vocabulary: ambitious, precise word choices improve marks in both reading and writing',
      'Sentence variety: short punchy sentences for effect alongside complex sentences',
      'Punctuation for effect: dashes, colons, semicolons used deliberately',
      'Time management: planning each question and not overrunning on early questions',
    ],
    practiceLinks: [
      { label: 'Physics & Maths Tutor — GCSE English Language', url: 'https://www.physicsandmathstutor.com/english-language-revision/gcse/', note: 'Free past papers and revision resources for all boards', board: 'All boards' },
      { label: 'AQA English Language Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA papers and mark schemes', board: 'AQA' },
      { label: 'Edexcel English Language Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html', note: 'Official Edexcel past papers', board: 'Edexcel' },
      { label: 'BBC Bitesize — GCSE English Language', url: 'https://www.bbc.co.uk/bitesize/subjects/zr9d7ty', note: 'Free revision guides and practice questions', board: 'All boards' },
    ],
    topTips: [
      'Read the question before reading the text — this tells you what to look for and saves time.',
      'For analysis questions, use the Point → Evidence → Effect structure: make a point, quote, explain the effect on the reader.',
      'Never just identify a technique ("the writer uses a metaphor") — always explain why and what effect it creates.',
      'Creative writing is marked heavily on vocabulary and sentence variety. Avoid overused phrases (walked, said, went) — use a thesaurus in revision to build alternatives.',
      'For transactional writing, learn the conventions of each format: a speech needs direct address (you, we); an article needs a headline and subheadings; a letter needs correct opening and sign-off.',
    ],
  },

  // ─── ENGLISH LITERATURE ───────────────────────────────────────────────────
  {
    slug: 'english-literature',
    name: 'English Literature',
    emoji: '📚',
    tagline: 'Shakespeare, 19th-century novels, poetry and modern texts',
    headerColor: 'bg-orange-500',
    about:
      'GCSE English Literature tests close reading and critical analysis of set texts — a Shakespeare play, a 19th-century novel, a modern text and a poetry anthology. Exams are closed book (no texts allowed in most boards) so learning key quotes is essential. Context, language analysis and a clear argument are what separates high-grade answers from average ones.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '8702',
        usedBy: 'Most popular English Literature board in England',
        format: 'Written',
        duration: 'Paper 1: 1h 45m · Paper 2: 2h 15m (4h total)',
        topics: [
          'Paper 1: Shakespeare (Romeo & Juliet, Macbeth, Much Ado, Merchant of Venice, etc.) + 19th-century novel (Great Expectations, Jane Eyre, A Christmas Carol, etc.)',
          'Paper 2: Modern texts (An Inspector Calls, Lord of the Flies, etc.) + AQA poetry anthology + unseen poetry comparison',
          'Closed book: no texts allowed — must memorise key quotes',
          'Context marks: every essay requires relevant historical/social context',
        ],
        marking:
          'AO1: personal response and argument (35%). AO2: language, form and structure analysis (35%). AO3: context (20%). AO4: spelling, punctuation, grammar (10%). Context and language analysis matter equally.',
        tip: 'Memorise 8–10 short quotes per text (4–6 words each are more useful than long quotes). Explore the language within the quote rather than quoting at length.',
        paperLink: { label: 'AQA English Literature Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '1ET0',
        usedBy: 'Widely used, strong presence in London and South East England',
        format: 'Written',
        duration: 'Paper 1: 1h 45m · Paper 2: 2h 15m (4h total)',
        topics: [
          'Paper 1: Shakespeare + Post-1914 prose/drama (open book for the 19th-century text)',
          'Paper 2: 19th-century novel + poetry anthology + unseen poetry',
          'Open book for some texts — students can annotate their copy and bring it in',
          'Different set text options from AQA — check your school\'s chosen texts',
        ],
        marking:
          'Edexcel allows open book for the 19th-century text, which changes strategy: don\'t memorise as many quotes for that text, but use your time to annotate your copy effectively.',
        tip: 'For the open-book sections, pre-annotate your text clearly. Use sticky tabs for key passages. Don\'t rely on it for quotes though — examiners can tell when students are just copying from the text without analysis.',
        paperLink: { label: 'Edexcel English Literature Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR',
        specCode: 'J352',
        usedBy: 'Popular in many regions, particularly Midlands and South West',
        format: 'Written',
        duration: 'Component 1: 2h · Component 2: 2h · Component 3: 45m (4h 45m total)',
        topics: [
          'Component 1: Shakespeare (extract + full text question)',
          'Component 2: Post-1914 prose + 19th-century prose (open book) + poetry',
          'Component 3: Unseen poetry (two poems to compare)',
          'OCR uses open book for post-1914 and 19th-century texts in Component 2',
        ],
        marking:
          'OCR uses levels-based marking. The unseen poetry component (Component 3) is a standalone 45-minute paper — practise comparing unseen poems methodically.',
        tip: 'OCR\'s open-book approach means your annotation quality matters. Practise annotating texts with analysis (not just highlighting) — write brief analytical notes in margins.',
        paperLink: { label: 'OCR English Literature Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Memorise 8–10 short quotes per text (4–6 words is ideal)',
      'Context for each text: historical period, social issues, author\'s purpose',
      'Language analysis: connotation, imagery, tone, symbolism',
      'Form and structure: how the text is shaped and why',
      'Character development and relationships across each text',
      'Themes: power, gender, class, love, fate, appearance vs reality',
      'Comparison skills: for poetry, identify similarities AND differences in language and theme',
      'Essay structure: argument → evidence → analysis → context → evaluation',
      'Unseen poetry: read carefully, identify tone, voice, imagery, then compare',
      'SPaG (spelling, punctuation, grammar): worth 4% — proofread every essay',
    ],
    practiceLinks: [
      { label: 'Physics & Maths Tutor — GCSE English Literature', url: 'https://www.physicsandmathstutor.com/english-literature-revision/gcse/', note: 'Free past papers and essay plans for all boards', board: 'All boards' },
      { label: 'AQA English Literature Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA past papers and mark schemes', board: 'AQA' },
      { label: 'BBC Bitesize — GCSE English Literature', url: 'https://www.bbc.co.uk/bitesize/subjects/z8tn34j', note: 'Free text guides and practice questions', board: 'All boards' },
      { label: 'Edexcel English Literature Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html', note: 'Official Edexcel papers', board: 'Edexcel' },
    ],
    topTips: [
      'Learn short, sharp quotes — "nothing will come of nothing" is more useful than a three-line quote you can\'t embed naturally.',
      'Always analyse the language within your quote: why that specific word? What does it imply? What effect does it have on the reader?',
      'Context does not mean "the author lived in X century". It means explaining how historical/social context shapes the writer\'s choices in the specific moment you\'re analysing.',
      'For poetry comparison, spend 5 minutes planning before writing: list 3 similarities and 2 differences, then write about each one with evidence.',
      'Leave 5 minutes at the end of each paper to re-read your essay for SPaG — these marks are easy to secure with just a final check.',
    ],
  },

  // ─── SCIENCE ──────────────────────────────────────────────────────────────
  {
    slug: 'science',
    name: 'Science',
    emoji: '🔬',
    tagline: 'Biology, Chemistry and Physics — Combined or Triple Science',
    headerColor: 'bg-green-600',
    about:
      'GCSE Science comes in two routes: Combined Science (worth 2 GCSEs, grades from 1–1 to 9–9) and Triple Science / Separate Sciences (3 individual GCSEs: Biology, Chemistry, Physics). All boards have the same Required Practicals that can be directly examined. Theory and practical skills are both tested across the written papers.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '8464 (Combined) · 8461/8462/8463 (Triple)',
        usedBy: 'The most popular science board in England by a wide margin',
        format: 'Written',
        duration: 'Combined: 6 papers × 1h 15m | Triple: 6 papers × 1h 45m',
        topics: [
          'Biology: Cell biology, Organisation, Infection, Bioenergetics, Homeostasis, Inheritance, Ecology',
          'Chemistry: Atomic structure, Bonding, Quantitative, Chemical changes, Energy changes, Rate & equilibrium, Organic, Analysis',
          'Physics: Forces, Energy, Waves, Electricity, Magnetism, Particle model, Atomic structure, Space',
          '21 Required Practicals across all three sciences — any can be directly examined',
        ],
        marking:
          'Questions range from 1-mark recall to 6-mark extended writing. Six-mark questions are marked using a levels-based mark scheme — write in continuous prose and cover multiple points.',
        tip: 'Learn all 21 Required Practicals: the method, variables (independent, dependent, control), results and potential errors. These are guaranteed to appear every year.',
        paperLink: { label: 'AQA GCSE Science Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '1SC0 (Combined) · 1BI0/1CH0/1PH0 (Triple)',
        usedBy: 'Second most popular science board — widely used across England',
        format: 'Written',
        duration: 'Combined: 6 papers | Triple: 6 papers (varying lengths)',
        topics: [
          'Same three sciences as AQA but in a slightly different topic order',
          'Edexcel includes "Core Practicals" rather than Required Practicals — similar concept, different name',
          'Edexcel uses more "explain how" and "evaluate" questions than AQA',
          'Triple Science only: more detailed content in each subject than Combined',
        ],
        marking:
          'Method marks and accuracy marks for calculations. Six-mark questions require structured, multi-point answers. Learn the command word: describe = what happens; explain = why it happens.',
        tip: 'Learn the difference between "describe" and "explain" — these are the two most common command words and students regularly lose marks by giving one when the question asked for the other.',
        paperLink: { label: 'Edexcel GCSE Science Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR Gateway',
        specCode: 'J250 (Combined) · J257/J258/J259 (Triple)',
        usedBy: 'Popular particularly in parts of the Midlands and South West',
        format: 'Written',
        duration: 'Combined: 6 papers | Triple: 6 papers',
        topics: [
          'OCR offers two specifications: Gateway (most common) and 21st Century Science',
          'Same core content as AQA and Edexcel with different emphasis and question style',
          'Practical activities in OCR are called "Practical Activity Groups" (PAGs)',
          'OCR includes more everyday applications and real-world contexts in questions',
        ],
        marking:
          'OCR uses Quality of Written Communication (QWC) marks on extended answers — write in full sentences with scientific terminology for these questions.',
        tip: 'OCR questions tend to contextualise science in everyday situations. Practise reading unfamiliar scenarios and applying your knowledge to them — this is a skill that improves with past paper practice.',
        paperLink: { label: 'OCR GCSE Science Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'All Required Practicals: method, variables, results, errors and how to minimise them',
      'Biology: photosynthesis and respiration equations; cell cycle and mitosis; enzyme lock-and-key model',
      'Biology: homeostasis (thermoregulation, blood glucose, water balance); natural selection',
      'Chemistry: balancing equations; calculating moles (n = m ÷ Mr); rates of reaction factors',
      'Chemistry: electrolysis; pH and neutralisation; organic chemistry (alkanes, alkenes, polymers)',
      'Physics: F=ma, KE = ½mv², GPE = mgh — know all equations (or learn the formula sheet)',
      'Physics: wave calculations (v = fλ); electromagnetic spectrum; nuclear decay',
      'Graph skills: drawing and interpreting scatter graphs, bar charts, line graphs',
      'Six-mark question technique: plan before writing, cover multiple points, use scientific vocabulary',
      'Triple vs Combined: triple students need deeper content — e.g. more detailed genetics, more organic chemistry',
    ],
    practiceLinks: [
      { label: 'Physics & Maths Tutor — GCSE Science', url: 'https://www.physicsandmathstutor.com/', note: 'Free past papers, topic questions and revision notes for all boards', board: 'All boards' },
      { label: 'AQA GCSE Science Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA papers and mark schemes', board: 'AQA' },
      { label: 'Freesciencelessons (YouTube)', url: 'https://www.freesciencelessons.co.uk/', note: 'Free video lessons covering full AQA GCSE Science spec', board: 'AQA' },
      { label: 'BBC Bitesize GCSE Science', url: 'https://www.bbc.co.uk/bitesize/subjects/zrkw2hv', note: 'Free revision guides for all three sciences', board: 'All boards' },
    ],
    topTips: [
      'Learn the Required Practicals first — at least 2–3 questions per paper come directly from them, and they\'re predictable.',
      'For six-mark questions, bullet-point your answer mentally before writing — three distinct points, each explained, is usually enough for full marks.',
      'In Physics especially: always include units in numerical answers and use the correct number of significant figures (match the question data).',
      'Use mark schemes actively when reviewing past papers — understand exactly why each mark was awarded, not just whether your answer was "close enough".',
      'For Combined Science, practise papers from all three subjects — students often revise Biology heavily and neglect Physics, which is harder to improve quickly.',
    ],
  },

  // ─── HISTORY ──────────────────────────────────────────────────────────────
  {
    slug: 'history',
    name: 'History',
    emoji: '🏛️',
    tagline: 'Sources, significance, causation and historical interpretations',
    headerColor: 'bg-rose-600',
    about:
      'GCSE History is studied across multiple periods and is assessed through source analysis, extended essay writing and evaluating historical interpretations. Schools choose which topics to study — common choices include Germany 1890–1945, Cold War, Medicine Through Time and the American West. Strong essay technique and specific factual knowledge are both essential.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '8145',
        usedBy: 'Most popular History board in England',
        format: 'Written',
        duration: 'Paper 1: 1h 45m · Paper 2: 1h 45m (3h 30m total)',
        topics: [
          'Paper 1: Period study (e.g. Germany 1890–1945) + British depth study (e.g. Elizabethan England)',
          'Paper 2: Wider world depth study (e.g. Cold War 1941–91) + Thematic study (e.g. Medicine 500 AD to present)',
          'Source analysis: utility, reliability, purpose, content and provenance',
          'Historical interpretations: why do historians disagree? Which view is more convincing?',
        ],
        marking:
          'AQA uses a levels-based mark scheme. Higher marks require specific knowledge (dates, names, events), analysis of why things happened, and in higher-mark questions, evaluation of different interpretations.',
        tip: 'Learn the PHAT framework for sources: Provenance (who wrote it, when, why), How it is used (what it says), Accuracy (compare to your own knowledge), Tone (language used). Apply this to utility questions.',
        paperLink: { label: 'AQA GCSE History Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '1HI0',
        usedBy: 'Widely used, particularly popular for Medicine Through Time and Weimar Germany topics',
        format: 'Written',
        duration: 'Paper 1: 1h 15m · Paper 2: 1h 45m · Paper 3: 1h 20m (4h 20m total)',
        topics: [
          'Paper 1: Thematic study + historic environment (e.g. Medicine Through Time + a specific site)',
          'Paper 2: Period study + British depth study (e.g. Cold War + Elizabethan England)',
          'Paper 3: Modern depth study (e.g. Weimar and Nazi Germany)',
          'Edexcel\'s historic environment question requires site-specific knowledge (e.g. a specific battlefield or location)',
        ],
        marking:
          'Three separate papers with different time allocations — practise time management per paper. Paper 3 has the highest-mark extended writing questions.',
        tip: 'The Edexcel historic environment question (Paper 1) is unique — you need specific knowledge of a real site. Revise the site, not just the period. Many students ignore this and lose easy marks.',
        paperLink: { label: 'Edexcel GCSE History Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR',
        specCode: 'J410',
        usedBy: 'Popular in many schools, strong option for schools wanting more topic variety',
        format: 'Written',
        duration: 'Component 1: 1h 30m · Component 2: 1h 30m (3h total)',
        topics: [
          'Component 1: British History and Historical Environment (depth study + site)',
          'Component 2: European and World History (period study + thematic study)',
          'OCR includes a mix of source questions and essay writing in each component',
          'Broader range of topic choices than AQA or Edexcel',
        ],
        marking:
          'OCR uses a levels-based mark scheme assessing knowledge, understanding, analysis and judgement. Extended writing requires a clear argument sustained throughout.',
        tip: 'For OCR\'s higher-mark questions, make sure your answer has a clear argument from the introduction — don\'t just describe events. "To what extent..." questions require a judgement, not just a list.',
        paperLink: { label: 'OCR GCSE History Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Source analysis: content, provenance, tone, purpose, usefulness, limitations',
      'Causation: short-term triggers vs long-term causes — learn to explain links between causes',
      'Consequences: immediate, medium-term and long-term effects of events',
      'Change and continuity: what changed, what stayed the same and why',
      'Significance: why does this event/person matter? What were its consequences?',
      'Historical interpretations: why do historians disagree about this? (use of sources, perspective, time of writing)',
      'Essay structure: introduction with argument → PEEL paragraphs → conclusion with judgement',
      'Specific factual knowledge: dates, names, statistics, turning points',
      'Command words: describe (what happened), explain (why), evaluate (how far, to what extent)',
      'Know your set topics thoroughly — breadth AND depth',
    ],
    practiceLinks: [
      { label: 'Physics & Maths Tutor — GCSE History', url: 'https://www.physicsandmathstutor.com/history-revision/gcse/', note: 'Free past papers and revision notes for all boards', board: 'All boards' },
      { label: 'AQA GCSE History Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA papers and mark schemes', board: 'AQA' },
      { label: 'BBC Bitesize GCSE History', url: 'https://www.bbc.co.uk/bitesize/subjects/zk26n39', note: 'Free topic guides and revision quizzes', board: 'All boards' },
      { label: 'Edexcel GCSE History Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html', note: 'Official Edexcel past papers', board: 'Edexcel' },
    ],
    topTips: [
      'History essays are won or lost on specific knowledge — generic answers score Level 2 at best. Learn precise dates, names, statistics and turning points for your chosen topics.',
      'For source utility questions: always explain why the provenance (who created it, when, why) makes it more or less useful — not just what the source says.',
      'For interpretation questions: explain the historian\'s viewpoint, support it with your knowledge, then evaluate whether you agree and why.',
      'Never leave a blank — even a partially correct answer on essay questions can earn 1–2 marks per paragraph.',
      'Practise writing timed essays without notes: take 1 minute to bullet-point your argument, then write continuously. Untimed revision essays teach you nothing about exam performance.',
    ],
  },

  // ─── GEOGRAPHY ────────────────────────────────────────────────────────────
  {
    slug: 'geography',
    name: 'Geography',
    emoji: '🌍',
    tagline: 'Physical and human geography, fieldwork and geographical skills',
    headerColor: 'bg-emerald-600',
    about:
      'GCSE Geography covers physical geography (rivers, coasts, climate, natural hazards) and human geography (urban issues, development, resources, economic change). All boards require compulsory fieldwork — two investigations that can be examined directly. Case studies and geographical skills (map reading, graph interpretation, statistical techniques) are essential across all papers.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '8035',
        usedBy: 'Most popular Geography board in England',
        format: 'Written',
        duration: 'Paper 1: 1h 30m · Paper 2: 1h 30m · Paper 3: 1h (4h total)',
        topics: [
          'Paper 1 — Living with the Physical Environment: Tectonic hazards, weather & climate, ecosystems, UK rivers/coasts',
          'Paper 2 — Challenges in the Human Environment: Urban issues, economic development, resource management',
          'Paper 3 — Geographical Applications: Issue evaluation (pre-release resource booklet) + fieldwork',
          'Two compulsory fieldwork investigations (human and physical) — directly examined in Paper 3',
        ],
        marking:
          'Mix of 1-mark to 9-mark questions. Nine-mark questions (includes SPaG marks) are levels-based — cover multiple points, use case study data and write in full sentences.',
        tip: 'Paper 3 has a pre-release resource booklet sent to schools 12 weeks before the exam. Read it carefully and research the topic it introduces — this is free marks if you prepare.',
        paperLink: { label: 'AQA GCSE Geography Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel B (Pearson)',
        specCode: '1GB0',
        usedBy: 'Widely used, popular in many regions across England',
        format: 'Written',
        duration: 'Paper 1: 1h 30m · Paper 2: 1h 30m · Paper 3: 1h 30m (4h 30m total)',
        topics: [
          'Paper 1 — Global Geographical Issues: Hazardous Earth, development, challenges for UK',
          'Paper 2 — UK Geographical Issues: UK in the 21st century + fieldwork questions',
          'Paper 3 — People and Environment Issues: synoptic paper applying knowledge across topics',
          'Edexcel B has a more thematic/issues-based approach than AQA',
        ],
        marking:
          'Paper 3 is synoptic — it requires linking ideas across topics. Students who revise isolated topics struggle with this; practise making cross-topic connections.',
        tip: 'Edexcel B\'s synoptic paper (Paper 3) rewards students who can link physical and human geography. When revising, practise connecting topics: how does climate change affect development? How does urbanisation cause natural hazards?',
        paperLink: { label: 'Edexcel Geography Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR B (Geography for Enquiring Minds)',
        specCode: 'J384',
        usedBy: 'Popular, particularly with schools wanting a more enquiry-based approach',
        format: 'Written',
        duration: 'Component 1: 1h 30m · Component 2: 1h 30m · Component 3: 1h (4h total)',
        topics: [
          'Component 1: Our Natural World (physical geography)',
          'Component 2: People and Society (human geography)',
          'Component 3: Geographical Exploration (synoptic skills + fieldwork)',
          'OCR focuses strongly on enquiry skills and evaluating geographic information',
        ],
        marking:
          'Component 3 draws on all prior knowledge and fieldwork. OCR rewards clear geographical thinking and the ability to evaluate evidence.',
        tip: 'OCR places heavy emphasis on evaluating and questioning geographical information. Practise saying "however" and "on the other hand" — balanced answers consistently score higher than one-sided ones.',
        paperLink: { label: 'OCR GCSE Geography Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Case studies: know at least one named example per major topic (with data, statistics, place names)',
      'Tectonic hazards: earthquake and volcano causes, effects, responses, monitoring',
      'Rivers: hydrographs, erosion processes, flood management strategies',
      'Coasts: erosion landforms (cliffs, bays, headlands), management approaches (hard/soft engineering)',
      'Climate change: causes, effects on ecosystems and people, mitigation vs adaptation',
      'Urban issues: urbanisation causes, challenges in LICs vs HICs, urban regeneration',
      'Development: measuring development (HDI, GDP), Rostow\'s model, aid vs trade debate',
      'Map skills: 6-figure grid references, contour interpretation, OS map symbols',
      'Graph skills: climate graphs, population pyramids, scatter graphs, choropleth maps',
      'Fieldwork: know your two investigations — data collection methods, analysis, evaluation',
    ],
    practiceLinks: [
      { label: 'Physics & Maths Tutor — GCSE Geography', url: 'https://www.physicsandmathstutor.com/geography-revision/gcse/', note: 'Free past papers and revision notes for all boards', board: 'All boards' },
      { label: 'AQA GCSE Geography Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA papers and mark schemes', board: 'AQA' },
      { label: 'BBC Bitesize GCSE Geography', url: 'https://www.bbc.co.uk/bitesize/subjects/zrw76sg', note: 'Free topic guides and case study summaries', board: 'All boards' },
      { label: 'Cool Geography', url: 'https://www.coolgeography.co.uk/', note: 'Free case studies, revision notes and past papers', board: 'All boards' },
    ],
    topTips: [
      'Case studies are the most reliable way to boost your grade — examiners reward named places and specific statistics. Learn at least one detailed case study per major topic.',
      'For 9-mark questions (AQA), plan before writing: identify 3 points, each supported by evidence and explained in terms of impact or cause.',
      'Map skills appear on every paper — practice reading OS maps, drawing cross-sections and interpreting graph data. These are marks many students give away.',
      'Fieldwork questions are predictable — you\'ll always be asked about your methodology, data collection, analysis and evaluation. Prepare these as written answers in advance.',
      'Use specific data wherever possible: "flooding affected 400,000 people" scores higher than "flooding affected many people".',
    ],
  },

  // ─── COMPUTER SCIENCE ─────────────────────────────────────────────────────
  {
    slug: 'computer-science',
    name: 'Computer Science',
    emoji: '💻',
    tagline: 'Programming, algorithms, systems and computational thinking',
    headerColor: 'bg-indigo-600',
    about:
      'GCSE Computer Science has two written papers (systems theory + algorithms/programming) and a programming project (controlled assessment or NEA) that counts for 20% of the final grade. You can write code in any language in the NEA but must understand and write pseudocode or flowcharts in the exam. Programming practice is essential even for students not sitting NEA.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '8525',
        usedBy: 'Most popular Computer Science board in England',
        format: 'Written',
        duration: 'Paper 1: 2h 30m · Paper 2: 1h 30m · NEA: 20% (controlled assessment)',
        topics: [
          'Paper 1 — Computer Systems: Hardware (CPU, memory, storage), Software (OS, compilers), Networks, Security, Ethical/legal issues',
          'Paper 2 — Algorithms & Programming: Computational thinking, algorithms, searching/sorting, programming concepts',
          'NEA: A practical programming project completed during Year 10/11 — worth 20%',
          'AQA uses its own pseudocode — you must learn AQA pseudocode syntax',
        ],
        marking:
          'Paper 1 has many 1–4 mark questions requiring precise technical definitions. Paper 2 includes algorithm tracing and code writing — practice both reading and writing code.',
        tip: 'Learn AQA pseudocode syntax — it is tested directly. Trace algorithms step-by-step in the exam (write the variable values in a table). Many marks are lost by students who skip the trace.',
        paperLink: { label: 'AQA GCSE Computer Science Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '1CP0',
        usedBy: 'Widely used, particularly popular in schools with strong programming curricula',
        format: 'Written',
        duration: 'Component 1: 1h 30m · Component 2: 1h 30m · Component 3: 20% (NEA)',
        topics: [
          'Component 1 — Principles of Computer Science: Systems, data, networks, algorithms',
          'Component 2 — Application of Computational Thinking: programming problems, data structures',
          'Component 3: Programming Project NEA (same concept as AQA)',
          'Edexcel uses Python or a language of your choice in the NEA but tests pseudocode in the exam',
        ],
        marking:
          'Edexcel\'s Component 2 focuses on applying computational thinking to new problems — practise writing solutions to unseen programming scenarios.',
        tip: 'For Component 2, practise writing pseudocode solutions to unfamiliar problems. The skill of breaking a problem into steps is what\'s tested — not memorised algorithms.',
        paperLink: { label: 'Edexcel GCSE Computer Science Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR',
        specCode: 'J277',
        usedBy: 'Very popular for Computer Science, OCR is a leading board for this subject',
        format: 'Written',
        duration: 'Component 1: 1h 30m · Component 2: 1h 30m · Programming Project: 20%',
        topics: [
          'Component 1 — Computer Systems: CPU (fetch-execute cycle), memory hierarchy, storage, networks, protocol stacks, security, systems software',
          'Component 2 — Computational Thinking, Algorithms and Programming: decomposition, abstraction, sorting/searching algorithms, programming in Python or pseudocode',
          'Programming Project: task-based assessment in Python (or other language) — worth 20%',
          'OCR has very detailed CPU and network content — the most technical board for theory',
        ],
        marking:
          'OCR tests technical precision on theory questions. For the CPU, know the fetch-execute cycle in detail, the roles of MAR, MDR, PC and CU. For networks, know TCP/IP, HTTP, FTP and encryption.',
        tip: 'OCR\'s theory papers reward precise definitions. For key terms (RAM, ROM, algorithm, decomposition), write a revision card with the exact definition — vague answers score 0 for definition questions.',
        paperLink: { label: 'OCR GCSE Computer Science Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Programming fundamentals: variables, data types, selection (if/else), iteration (while/for), functions',
      'Data structures: arrays/lists, 2D arrays, strings and string manipulation',
      'Sorting algorithms: Bubble sort, Merge sort, Insertion sort — trace each step-by-step',
      'Searching algorithms: Linear search, Binary search — when to use each and why',
      'CPU: fetch-execute cycle, role of ALU, MAR, MDR, PC; clock speed and cores',
      'Memory: RAM vs ROM; cache; virtual memory; secondary storage (HDD vs SSD)',
      'Networks: LAN vs WAN; star vs mesh topology; TCP/IP stack; protocols (HTTP, HTTPS, FTP)',
      'Security: hacking threats (phishing, SQL injection, malware); encryption; firewalls',
      'Boolean logic: AND, OR, NOT gates; truth tables; simplifying expressions',
      'Number systems: binary, denary, hexadecimal; conversion between all three; binary arithmetic',
    ],
    practiceLinks: [
      { label: 'Physics & Maths Tutor — GCSE Computer Science', url: 'https://www.physicsandmathstutor.com/computer-science-revision/gcse/', note: 'Free past papers and topic-by-topic revision for all boards', board: 'All boards' },
      { label: 'AQA GCSE Computer Science Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA past papers', board: 'AQA' },
      { label: 'OCR GCSE Computer Science Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/', note: 'Official OCR past papers and mark schemes', board: 'OCR' },
      { label: 'CS Field Guide', url: 'https://www.csfieldguide.org.nz/', note: 'Free interactive guide to CS concepts including algorithms and data structures', board: 'All boards' },
    ],
    topTips: [
      'Practise writing code by hand — in the exam you write pseudocode or code on paper without a computer. What is easy to type becomes harder to write.',
      'Trace algorithms manually on every past paper algorithm question — write out variable values in a table for each iteration. This is where most marks in Paper 2 are won or lost.',
      'Learn binary-denary-hexadecimal conversions until they are automatic — number base questions appear on every paper.',
      'For the NEA, write clean, well-commented code with clear evidence of testing. Even if your project is incomplete, thorough documentation and testing evidence can still score well.',
      'Network and security definitions are highly predictable and testable — learn exact definitions of key protocols and attack types.',
    ],
  },

  // ─── FRENCH ───────────────────────────────────────────────────────────────
  {
    slug: 'french',
    name: 'French',
    emoji: '🇫🇷',
    tagline: 'Listening, speaking, reading and writing in French',
    headerColor: 'bg-cyan-600',
    about:
      "GCSE French (and other MFL subjects) tests four skills: Listening, Speaking, Reading and Writing — each worth 25% of the final grade. The Speaking exam is conducted with your teacher and takes place before the written papers. Vocabulary is the foundation of everything — the more words you know, the better you perform across all four skills.",
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '8658',
        usedBy: 'Most popular MFL board in England',
        format: 'Mixed',
        duration: 'Speaking: 10–12 mins | Listening: 35–45 mins | Reading: 45–60 mins | Writing: 1h 15m',
        topics: [
          'Speaking: Photo card discussion + general conversation on two themes',
          'Listening: Multiple choice, gap fills and short-answer questions on audio clips',
          'Reading: Comprehension, translation from French and grammar-in-context',
          'Writing: Short answer + open-ended writing tasks + translation into French',
          'Themes: Identity, Local/national/global environment, Current and future study/employment',
        ],
        marking:
          'Foundation tier: grades 1–5 · Higher tier: grades 4–9. Speaking is marked by your teacher against AQA mark criteria. Listening and Reading are marked by AQA. Writing is sent away for marking.',
        tip: 'The Speaking photo card is predictable — you know the theme in advance. Prepare varied sentence structures, opinions with justifications and time frames (past, present, future) for your known themes.',
        paperLink: { label: 'AQA GCSE French Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '1FR0',
        usedBy: 'Widely used, common across England particularly in cities',
        format: 'Mixed',
        duration: 'Same four-skills structure as AQA with similar time allocations',
        topics: [
          'Same four skills and similar themes to AQA',
          'Edexcel Speaking: role play + photo card + general conversation',
          'Edexcel includes a role play in the speaking exam (AQA does not)',
          'Different vocabulary lists and topic emphases — check your board\'s word list',
        ],
        marking:
          'Edexcel speaking includes a role play where you are given a card and must complete specified tasks in French. This is predictable and practicable with specific preparation.',
        tip: 'The Edexcel role play tests specific functional language (asking for something, giving information, expressing a problem). Practise the most common role play scenarios from past papers until they feel natural.',
        paperLink: { label: 'Edexcel GCSE French Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR',
        specCode: 'J243',
        usedBy: 'Popular in many schools, particularly strong in some regions',
        format: 'Mixed',
        duration: 'Same four-skills structure with slight variation in task types',
        topics: [
          'Four skills tested across similar themes to AQA and Edexcel',
          'OCR Speaking: general conversation and discussion of a theme',
          'OCR Reading and Listening: similar format to other boards with some task differences',
          'OCR Writing includes a translation task into French',
        ],
        marking:
          'OCR uses a similar levels-based approach across all four skills. Grade boundaries and task types vary slightly from AQA and Edexcel — always practise with OCR-specific past papers.',
        tip: 'For OCR and all boards, translations into English test your reading and vocabulary precision. When translating French into English, match the tense exactly — students often convert past tense to present and lose marks.',
        paperLink: { label: 'OCR GCSE French Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Vocabulary: learn the core 1200+ word list for your board — high-frequency words appear constantly',
      'Verb conjugation: present, past (passé composé + imparfait), future, conditional tenses',
      'Speaking: structure answers with opinion + justification + example + alternative view',
      'Use time frames in speaking: mention past experience, present habit AND future plan',
      'Listening: train your ear — watch French TV, films or YouTube with French subtitles',
      'Reading: read the questions first, then the text — look for cognates (similar words to English)',
      'Writing: include complex structures (relative clauses, subjunctive at Higher) for top marks',
      'Translation into French: learn set phrases, avoid word-for-word English → French translation',
      'Gender agreement: adjectives must agree with noun gender — a common error that costs marks',
      'Negatives: ne...pas, ne...jamais, ne...rien, ne...plus — use these to add sophistication',
    ],
    practiceLinks: [
      { label: 'AQA GCSE French Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA listening, reading and writing papers', board: 'AQA' },
      { label: 'BBC Bitesize GCSE French', url: 'https://www.bbc.co.uk/bitesize/subjects/zgdqxnb', note: 'Free revision guides covering all four skills', board: 'All boards' },
      { label: 'Linguascope (free access via many schools)', url: 'https://www.linguascope.com/', note: 'Interactive vocabulary games and listening practice', board: 'All boards' },
      { label: 'French Listening Practice (Language Graded Readers)', url: 'https://www.languagegraders.com/', note: 'Free graded reading and listening resources', board: 'All boards' },
    ],
    topTips: [
      'Vocabulary is the foundation of all four skills — use spaced repetition flashcards (Anki, Quizlet) to build and retain vocabulary systematically.',
      'Speak out loud every day, even if just reading text aloud. Pronunciation and fluency are only built through speaking practice, not reading about it.',
      'For the photo card/speaking task, prepare a bank of opinion phrases, time expressions and discourse markers — using these makes your speaking sound fluent and gains marks.',
      'In the writing exam, avoid overly ambitious sentences that you might get wrong — a correctly written simpler sentence scores better than a complex sentence with errors throughout.',
      'For listening, do not panic if you miss something — carry on and catch what you can. Students who stop and dwell on one missed answer miss the next three answers too.',
    ],
  },
]

export const GCSE_SUBJECT_CARDS = [
  { slug: 'maths',              name: 'Mathematics',       emoji: '🔢', tagline: 'Number, algebra, geometry & statistics',        bg: 'bg-blue-50',   border: 'border-blue-200',   heading: 'text-blue-700'   },
  { slug: 'english-language',   name: 'English Language',  emoji: '📖', tagline: 'Reading, analysis & written communication',     bg: 'bg-amber-50',  border: 'border-amber-200',  heading: 'text-amber-700'  },
  { slug: 'english-literature', name: 'English Literature',emoji: '📚', tagline: 'Shakespeare, novels & poetry analysis',         bg: 'bg-orange-50', border: 'border-orange-200', heading: 'text-orange-700' },
  { slug: 'science',            name: 'Science',           emoji: '🔬', tagline: 'Biology, Chemistry & Physics',                  bg: 'bg-green-50',  border: 'border-green-200',  heading: 'text-green-700'  },
  { slug: 'history',            name: 'History',           emoji: '🏛️', tagline: 'Sources, essays & historical interpretations', bg: 'bg-rose-50',   border: 'border-rose-200',   heading: 'text-rose-700'   },
  { slug: 'geography',          name: 'Geography',         emoji: '🌍', tagline: 'Physical & human geography with fieldwork',     bg: 'bg-emerald-50',border: 'border-emerald-200', heading: 'text-emerald-700'},
  { slug: 'computer-science',   name: 'Computer Science',  emoji: '💻', tagline: 'Programming, algorithms & systems',            bg: 'bg-indigo-50', border: 'border-indigo-200', heading: 'text-indigo-700' },
  { slug: 'french',             name: 'French',            emoji: '🇫🇷', tagline: 'Listening, speaking, reading & writing',      bg: 'bg-cyan-50',   border: 'border-cyan-200',   heading: 'text-cyan-700'   },
]