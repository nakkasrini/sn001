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

const AQA     = { header: 'bg-violet-600', headerText: 'text-white', border: 'border-violet-200' }
const EDEXCEL = { header: 'bg-blue-600',   headerText: 'text-white', border: 'border-blue-200'   }
const OCR     = { header: 'bg-teal-600',   headerText: 'text-white', border: 'border-teal-200'   }

export const ALEVEL_SUBJECTS: SubjectContent[] = [
  // ─── MATHEMATICS ──────────────────────────────────────────────────────────
  {
    slug: 'maths',
    name: 'Mathematics',
    emoji: '🔢',
    tagline: 'Pure mathematics, statistics and mechanics',
    headerColor: 'bg-blue-600',
    about:
      'A Level Mathematics is a two-year linear course assessed entirely by three written papers at the end of Year 13. All boards now have a mandatory content split: roughly two-thirds Pure maths, and one-third Applied (Statistics and Mechanics, in a fixed ratio). Calculus — differentiation and integration — is the dominant skill in Pure and runs through all three papers.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '7357',
        usedBy: 'Most popular A Level Maths board in England',
        format: 'Written',
        duration: '3 papers × 2h each (6h total) · 100 marks each · 300 marks total',
        topics: [
          'Paper 1 & 2 (Pure): Algebra & functions, calculus (differentiation, integration), trigonometry, vectors, sequences, proof, binomial, parametric equations, numerical methods',
          'Paper 3 (Statistics & Mechanics): Statistical distributions (normal, binomial), hypothesis testing, kinematics, forces, moments, projectiles',
          'Formulae booklet provided — know what is and is not in it',
          'Large data set (AQA: pre-release data) used in statistics questions',
        ],
        marking:
          'Method marks (M) and accuracy marks (A) throughout. Some questions have "B marks" for correct answer from inspection. Show all working — a correct answer with no working often scores 0 on multi-mark questions.',
        tip: 'Calculus is roughly 30% of the A Level — mastering it early gives the biggest return. Focus on integration techniques (substitution, by parts, partial fractions) as these are harder and tested repeatedly.',
        paperLink: { label: 'AQA A Level Maths Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '9MA0',
        usedBy: 'Second most popular A Level Maths board',
        format: 'Written',
        duration: '3 papers × 2h each (6h total) · 100 marks each',
        topics: [
          'Same pure content as AQA: algebra, calculus, trig, vectors, proof, sequences',
          'Paper 3 split: 3A (Statistics) + 3B (Mechanics) — sometimes combined into one paper',
          'Edexcel large data set: weather data used in statistics questions',
          'Edexcel often includes more modelling questions: setting up and solving real-world differential equations',
        ],
        marking:
          'Same M/A marking as AQA. Edexcel tends to ask more "show that" and proof questions — answers must be fully rigorous with no gaps in logic.',
        tip: 'Edexcel\'s "show that" questions are unforgiving — if you make an error and still get the printed answer, examiners look at every line of working. Practise writing fully rigorous proofs.',
        paperLink: { label: 'Edexcel A Level Maths Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR A',
        specCode: 'H240',
        usedBy: 'Widely used, particularly popular in some schools and sixth forms',
        format: 'Written',
        duration: '3 papers × 2h each (6h total) · 100 marks each',
        topics: [
          'Same mandatory pure content across all boards',
          'OCR A: Statistics and Mechanics split across Papers 2 and 3',
          'OCR includes more reasoning and problem-solving questions in its style',
          'OCR\'s large data set covers a different topic to AQA and Edexcel — check which dataset your board uses',
        ],
        marking:
          'Similar M/A marking to other boards. OCR questions often require more interpretation and communication of reasoning — not just numerical answers.',
        tip: 'For OCR, practise writing conclusions in statistical hypothesis testing carefully — the exact wording of the conclusion (including what "in the context of the question" means) is frequently examined.',
        paperLink: { label: 'OCR A Level Maths Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Differentiation: from first principles, chain rule, product rule, quotient rule, implicit differentiation',
      'Integration: reverse chain rule, substitution, by parts, partial fractions, definite integrals, area/volume',
      'Algebra: factor theorem, polynomial division, partial fractions, rational functions',
      'Trigonometry: radians, small angle approximations, addition formulae, double angle formulae, R sin(x+α)',
      'Exponentials and logarithms: laws of logs, solving equations, natural log, e^x',
      'Sequences: arithmetic and geometric series, sum to infinity, σ notation',
      'Proof: proof by contradiction, proof by induction (A Level Further only for induction)',
      'Vectors: 3D vectors, dot product, angle between vectors, line equations',
      'Statistics: binomial distribution, normal distribution, hypothesis testing, correlation',
      'Mechanics: SUVAT equations, Newton\'s laws, connected particles, projectiles',
    ],
    practiceLinks: [
      { label: 'ExamSolutions — A Level Maths (free videos + papers)', url: 'https://www.examsolutions.net/', note: 'Excellent free worked solutions for all major boards', board: 'All boards' },
      { label: 'Physics & Maths Tutor — A Level Maths', url: 'https://www.physicsandmathstutor.com/maths-revision/a-level/', note: 'Free past papers, topic questions and worked solutions', board: 'All boards' },
      { label: 'Maths Genie — A Level', url: 'https://www.mathsgenie.co.uk/a-level.html', note: 'Free topic-by-topic past paper questions', board: 'All boards' },
      { label: 'AQA A Level Maths Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA past papers', board: 'AQA' },
    ],
    topTips: [
      'Calculus is everywhere — master differentiation before moving to integration. Students who struggle with integration almost always have gaps in their differentiation technique.',
      'Always show full working. In A Level Maths, a correct answer without working scores 1 mark on a 5-mark question. Examiners award M marks for correct method even when the answer is wrong.',
      'Do past papers from 2019 onwards (post-reform papers) — the style changed significantly from pre-2019 papers and older papers are not representative of the current exam.',
      'Statistics questions require careful language. "There is sufficient evidence at the 5% significance level to reject H₀" is required — vague conclusions lose marks.',
      'The large data set appears in Paper 3 statistics — spend two sessions exploring your board\'s dataset before the exam so you are familiar with its structure and patterns.',
    ],
  },

  // ─── PHYSICS ──────────────────────────────────────────────────────────────
  {
    slug: 'physics',
    name: 'Physics',
    emoji: '⚛️',
    tagline: 'Mechanics, electricity, waves, fields and modern physics',
    headerColor: 'bg-indigo-600',
    about:
      'A Level Physics is mathematically demanding and assessed through three written papers plus a practical endorsement (CPAC) that is graded Pass/Fail separately and does not affect the 1–9 A Level grade. Required practical skills can be examined on any paper. Strong mathematical ability is essential — units, significant figures and graph analysis are tested constantly.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '7408',
        usedBy: 'Most popular A Level Physics board in England',
        format: 'Written',
        duration: 'Paper 1: 2h · Paper 2: 2h · Paper 3: 2h (6h total) · Practical Endorsement (separate)',
        topics: [
          'Paper 1: Measurements, particles, quantum, electricity, mechanics (Year 1 content)',
          'Paper 2: Thermal, fields (gravitational/electric/magnetic), nuclear, medical/astrophysics (Year 2)',
          'Paper 3: Practical skills + optional topic (Astrophysics, Medical Physics, Engineering Physics, Turning Points)',
          '12 Required Practicals (CPAC) — directly examined in Paper 3',
        ],
        marking:
          'Calculation questions require correct units and significant figures. Descriptive questions use levels-based marking — include the physics principle, then the specific explanation. "Explain" means cause + effect.',
        tip: 'Paper 3 always starts with a data analysis question requiring graph work. Practise: plotting lines of best fit, calculating gradients with units, identifying intercepts and drawing error bars.',
        paperLink: { label: 'AQA A Level Physics Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '9PH0',
        usedBy: 'Second most popular Physics board',
        format: 'Written',
        duration: 'Paper 1: 1h 45m · Paper 2: 1h 45m · Paper 3: 2h 30m (6h total)',
        topics: [
          'Paper 1: Mechanics, electric circuits, materials, wave behaviour',
          'Paper 2: Further mechanics, fields (electric, gravitational, magnetic), nuclear and particle physics',
          'Paper 3: General and Practical Principles (synoptic + practical skills)',
          'Edexcel has 16 Core Practicals — any can appear in Paper 3',
        ],
        marking:
          'Edexcel Paper 3 is synoptic — expect questions that link ideas across different topic areas. Students who revise topics in isolation find these difficult.',
        tip: 'Edexcel includes a "Practical Skills" assessment guide. For each Core Practical, know the setup, the physics principle being demonstrated, sources of error and how to reduce them.',
        paperLink: { label: 'Edexcel A Level Physics Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR A',
        specCode: 'H557',
        usedBy: 'Popular in many sixth forms, particularly in schools that also offer OCR GCSE Sciences',
        format: 'Written',
        duration: 'Components 1–3: 2h 15m each · Practical Endorsement (separate)',
        topics: [
          'Component 1: Mechanics, electric circuits, waves',
          'Component 2: Electrons, waves, photons, fields, particle physics',
          'Component 3: Unified Physics (synoptic paper)',
          'OCR has 12 Practical Activity Groups (PAGs) — practical skills tested in Component 3',
        ],
        marking:
          'OCR A places greater emphasis on mathematical skill than other boards — expect more multi-step calculation questions and algebraic derivations.',
        tip: 'OCR A\'s unified physics paper (Component 3) rewards students who can think across the whole A Level. Create a concept map linking topics — e.g. how electromagnetic induction connects to circular motion to particle accelerators.',
        paperLink: { label: 'OCR A Level Physics Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Mechanics: SUVAT equations, Newton\'s laws, momentum, circular motion, simple harmonic motion',
      'Electricity: Ohm\'s law, Kirchhoff\'s laws, internal resistance, potential dividers, capacitors (charge/discharge)',
      'Waves: superposition, diffraction, interference, stationary waves, refraction, polarisation',
      'Fields: gravitational and electric fields (similarities), magnetic force (F=BIL, F=Bqv), electromagnetic induction',
      'Nuclear and particle physics: nuclear decay, radioactive decay equations, binding energy',
      'Quantum: photoelectric effect, wave-particle duality, energy levels, de Broglie wavelength',
      'Practical skills: uncertainty, significant figures, graph analysis (gradient = physical quantity)',
      'Required Practicals: method, variables, results, sources of error for each',
      'Units and dimensional analysis: derive units from equations, check answers dimensionally',
      'Graph work: plotting, line of best fit, gradient, intercept, error bars',
    ],
    practiceLinks: [
      { label: 'Physics & Maths Tutor — A Level Physics', url: 'https://www.physicsandmathstutor.com/physics-revision/a-level/', note: 'Free topic questions, past papers and worked solutions for all boards', board: 'All boards' },
      { label: 'AQA A Level Physics Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA past papers and mark schemes', board: 'AQA' },
      { label: 'Isaac Physics', url: 'https://isaacphysics.org/', note: 'Free problem-solving platform specifically for A Level Physics', board: 'All boards' },
      { label: 'Edexcel A Level Physics Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html', note: 'Official Edexcel past papers', board: 'Edexcel' },
    ],
    topTips: [
      'Always write units in every step of a calculation — losing the unit halfway through a 6-mark question typically costs 2 marks.',
      'For "explain" questions, always state the physics principle first, then apply it to the specific scenario. "Explain why..." requires cause then effect.',
      'Required Practicals are guaranteed exam questions — for each one, learn: setup and diagram, control variables, how results are recorded, potential errors and improvements.',
      'Revise from the specification, not just your notes — physics examiners write questions directly from spec statements. Anything on the spec can be examined.',
      'Practise graph analysis: A Level Physics papers always include a data-analysis question requiring you to plot, draw a line of best fit and calculate a gradient. These marks are predictable and valuable.',
    ],
  },

  // ─── CHEMISTRY ────────────────────────────────────────────────────────────
  {
    slug: 'chemistry',
    name: 'Chemistry',
    emoji: '⚗️',
    tagline: 'Physical, inorganic and organic chemistry',
    headerColor: 'bg-teal-600',
    about:
      'A Level Chemistry is split into three areas: Physical (thermodynamics, kinetics, equilibrium, electrochemistry), Inorganic (periodicity, Group 2, halogens, transition metals) and Organic (mechanisms, functional groups, spectroscopy). All boards have required practicals assessed through a practical endorsement (CPAC), graded separately. Calculations and organic mechanisms are the most heavily tested skills.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '7405',
        usedBy: 'Most popular A Level Chemistry board in England',
        format: 'Written',
        duration: 'Paper 1: 2h · Paper 2: 2h · Paper 3: 2h (6h total)',
        topics: [
          'Paper 1: Physical chemistry (atomic structure, bonding, energetics, kinetics, equilibrium, redox) + Inorganic',
          'Paper 2: Physical chemistry (acids, electrode potentials, further equilibrium) + Organic',
          'Paper 3: Practical skills + synoptic questions across all areas',
          '12 Required Practicals — practical skills examined in Paper 3',
        ],
        marking:
          'Mechanism drawing must show curly arrows (from bond/lone pair to atom), partial charges on dipoles and correct species. Missing arrow heads or wrong starting points score 0 per step.',
        tip: 'Organic mechanisms are high-yield marks — they appear every year and are entirely predictable. Learn each mechanism type (nucleophilic substitution, electrophilic addition, etc.) and practise until you can draw them from memory.',
        paperLink: { label: 'AQA A Level Chemistry Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '9CH0',
        usedBy: 'Second most popular Chemistry board',
        format: 'Written',
        duration: 'Paper 1: 1h 45m · Paper 2: 1h 45m · Paper 3: 2h 30m (6h total)',
        topics: [
          'Same three-paper structure: physical, inorganic and organic content',
          'Paper 3 includes a 20-mark synoptic section linking content across the course',
          'Edexcel has 16 Core Practicals — a larger number than AQA',
          'Edexcel\'s organic content emphasises industrial processes and "green chemistry" more than AQA',
        ],
        marking:
          'Edexcel Paper 3 is synoptic — expect questions that explicitly link, for example, an organic synthesis problem with physical chemistry calculations (yield, equilibrium) in a single question.',
        tip: 'For Edexcel\'s synoptic paper, practise multi-part questions that span different topic areas. Don\'t assume a question about an organic reaction won\'t then ask a thermodynamics calculation as Part (c).',
        paperLink: { label: 'Edexcel A Level Chemistry Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR A',
        specCode: 'H432',
        usedBy: 'Popular in many sixth forms, strong option for schools focusing on practical skills',
        format: 'Written',
        duration: 'Component 1: 2h 15m · Component 2: 2h 15m · Component 3: 1h 30m (6h total)',
        topics: [
          'Component 1: Physical and Inorganic chemistry',
          'Component 2: Physical and Organic chemistry',
          'Component 3: Unified Chemistry (synoptic, practical-based questions)',
          'OCR has 12 Practical Activity Groups (PAGs) and a stronger practical focus than other boards',
        ],
        marking:
          'OCR A places significant weight on the ability to explain and evaluate experimental methods. Component 3 explicitly rewards understanding of why specific practical procedures are used.',
        tip: 'ChemRevise (free website) covers the OCR A spec comprehensively. Use it alongside past papers — the revision notes are written at exactly the level needed for exam answers.',
        paperLink: { label: 'OCR A Level Chemistry Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Organic mechanisms: nucleophilic substitution (SN1/SN2), electrophilic addition, free radical, elimination — curly arrows, correct species',
      'Physical: Hess\'s law calculations, Born-Haber cycles, entropy and Gibbs energy (ΔG = ΔH − TΔS)',
      'Equilibrium: Kc, Kp expressions and calculations; Le Chatelier\'s principle; pH and buffers',
      'Electrochemistry: electrode potentials, cell EMF calculations, electrolysis products and quantities',
      'Kinetics: rate equations, rate constants, activation energy from Arrhenius equation (ln k vs 1/T graph)',
      'Inorganic: Period 3 oxides; Group 2 trends; halogen reactions; transition metal complex formation and colours',
      'Spectroscopy: mass spectra (molecular ion, fragmentation), IR (functional groups), NMR (chemical shift, integration, splitting)',
      'Organic synthesis: multi-step routes — know conversion reactions between all functional groups',
      'Required Practicals: titration, colorimetry, enthalpy change, rates of reaction, chromatography',
      'Calculations: moles (n = m ÷ M), yield %, atom economy, concentrations, dilutions',
    ],
    practiceLinks: [
      { label: 'ChemRevise — Free A Level Chemistry Notes', url: 'https://chemrevise.org/', note: 'Excellent free revision notes covering all major boards', board: 'All boards' },
      { label: 'Physics & Maths Tutor — A Level Chemistry', url: 'https://www.physicsandmathstutor.com/chemistry-revision/a-level/', note: 'Free topic questions and past papers for all boards', board: 'All boards' },
      { label: 'AQA A Level Chemistry Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA papers and mark schemes', board: 'AQA' },
      { label: 'Edexcel A Level Chemistry Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html', note: 'Official Edexcel past papers', board: 'Edexcel' },
    ],
    topTips: [
      'Organic mechanisms are the highest-yield revision topic — learn each one until you can draw it correctly from scratch every time. A single misplaced arrow head scores 0.',
      'For calculation questions: always write the equation first, then substitute with units, then calculate. Skipping steps means method marks are lost when errors occur.',
      'Spectroscopy (NMR, IR, mass spec) appears on every Paper 3 — practise interpreting spectra from past papers. It is learnable and most students leave marks on the table by not practising it enough.',
      'Build an organic synthesis map: draw a grid of functional groups and fill in the reagents/conditions to convert between each pair. This becomes your revision tool for all synthesis questions.',
      'Use ChemRevise for Inorganic chemistry — transition metal chemistry and periodicity have many small facts (colours, oxidation states, reactions) that are easy to memorise with the right resource.',
    ],
  },

  // ─── BIOLOGY ──────────────────────────────────────────────────────────────
  {
    slug: 'biology',
    name: 'Biology',
    emoji: '🧬',
    tagline: 'Cells, genetics, ecology, physiology and evolution',
    headerColor: 'bg-green-600',
    about:
      'A Level Biology is content-heavy and requires precise technical vocabulary. Three written papers cover all topics plus a practical endorsement (CPAC). Extended essay-style questions (6–9 marks) require candidates to demonstrate understanding, apply knowledge to unfamiliar scenarios and evaluate experimental data. Biology rewards consistent, organised revision over cramming.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '7402',
        usedBy: 'Most popular A Level Biology board in England',
        format: 'Written',
        duration: 'Paper 1: 2h · Paper 2: 2h · Paper 3: 2h (6h total)',
        topics: [
          'Paper 1: Biological molecules, cells, exchange, transport, genetic information',
          'Paper 2: Energy transfers, response to stimuli, genetic control, populations & ecosystems',
          'Paper 3: Practical skills + essay question (25 marks) + structured questions synoptically',
          '12 Required Practicals — practical skills and analysis examined in Paper 3',
        ],
        marking:
          'Paper 3 includes a 25-mark essay — unique to AQA. It is marked using a levels scheme that rewards breadth of knowledge, scientific accuracy and structured argument. Plan it before writing.',
        tip: 'The AQA Paper 3 essay question always offers two choices. Prepare for 6–8 essay themes (enzyme action, cell signalling, natural selection, ATP, homeostasis, etc.). An essay you\'ve planned before the exam will always beat one written cold.',
        paperLink: { label: 'AQA A Level Biology Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel B (Pearson)',
        specCode: '9BI0',
        usedBy: 'Second most popular Biology board',
        format: 'Written',
        duration: 'Paper 1: 1h 45m · Paper 2: 1h 45m · Paper 3: 2h 30m (6h total)',
        topics: [
          'Paper 1: Biological molecules, cells, exchange and transport, genetics',
          'Paper 2: Energy, ecosystems, behaviour, evolution',
          'Paper 3: Practical questions + synoptic application across all topics',
          'Edexcel B has 16 Core Practicals — more than AQA, with stronger practical emphasis',
        ],
        marking:
          'Edexcel B\'s Paper 3 is synoptic — expect unfamiliar contexts requiring you to apply concepts from across the specification in a single question.',
        tip: 'Edexcel B asks more "apply your knowledge to this new situation" questions than AQA. Practise reading unfamiliar experiment descriptions and applying principles (enzyme kinetics, membrane transport, ecological sampling) to the new context.',
        paperLink: { label: 'Edexcel A Level Biology Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR A',
        specCode: 'H420',
        usedBy: 'Popular in many sixth forms, strong practical component',
        format: 'Written',
        duration: 'Component 1: 2h 15m · Component 2: 2h 15m · Component 3: 1h 30m (6h total)',
        topics: [
          'Component 1: Foundations in Biology + Exchange and Transport + Biodiversity',
          'Component 2: Communication and Homeostasis + Genetics + Ecosystems',
          'Component 3: Unified Biology (synoptic practical-based questions)',
          'OCR has 12 PAGs and places heavy emphasis on the scientific method and practical reasoning',
        ],
        marking:
          'OCR A rewards precise scientific language and the ability to evaluate experimental methods. "Evaluate" questions require a judgement with reasoning — not just listing advantages and disadvantages.',
        tip: 'For OCR\'s Component 3 evaluation questions: give the strength OR weakness, explain why it is a strength/weakness, then suggest an improvement. All three parts are needed for full marks.',
        paperLink: { label: 'OCR A Level Biology Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Biological molecules: structure and function of carbohydrates, proteins, lipids, DNA, ATP',
      'Cell biology: eukaryotic vs prokaryotic; cell division (mitosis/meiosis); cell signalling',
      'Exchange and transport: gas exchange surfaces; heart structure and cardiac cycle; blood vessels',
      'Genetic information: transcription, translation, mutations, gene expression and control',
      'Homeostasis: thermoregulation, blood glucose control (insulin/glucagon), osmoregulation',
      'Nervous system: neurone structure, action potential, synaptic transmission, reflex arc',
      'Ecology: ecosystems, energy flow, nutrient cycles (nitrogen, carbon), population dynamics',
      'Genetics: monohybrid and dihybrid crosses, codominance, sex-linkage, chi-squared test',
      'Evolution: natural selection, speciation, evidence for evolution',
      'Required Practicals: sampling techniques, enzyme experiments, dissections, microscopy',
    ],
    practiceLinks: [
      { label: 'Physics & Maths Tutor — A Level Biology', url: 'https://www.physicsandmathstutor.com/biology-revision/a-level/', note: 'Free topic questions, past papers and revision notes for all boards', board: 'All boards' },
      { label: 'AQA A Level Biology Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA past papers and mark schemes', board: 'AQA' },
      { label: 'Biology Online (free revision content)', url: 'https://www.biologyonline.com/', note: 'Free glossary, revision articles and diagrams', board: 'All boards' },
      { label: 'Save My Exams — A Level Biology', url: 'https://www.savemyexams.co.uk/a-level/biology/', note: 'Free and premium revision content for all boards', board: 'All boards' },
    ],
    topTips: [
      'Biology has the most content of any A Level science — build a revision timetable that revisits topics multiple times rather than covering each topic once.',
      'Use precise scientific vocabulary in every answer. "The cell surface membrane" not "the outside of the cell." "Complementary base pairing" not "matching." Vague language costs marks.',
      'For "explain" questions in physiology (heart, kidneys, nerves): structure your answer as a sequence of cause → effect → further effect. Biology examiners look for chains of reasoning.',
      'For AQA Paper 3 essays: write a plan (bullet points) for 2–3 minutes before writing. Cover multiple topics linked to the theme — breadth matters. Use subheadings to organise.',
      'Required Practicals for Biology are often examined through data analysis (interpreting results, identifying limitations, suggesting improvements) rather than asking you to describe the method.',
    ],
  },

  // ─── HISTORY ──────────────────────────────────────────────────────────────
  {
    slug: 'history',
    name: 'History',
    emoji: '🏛️',
    tagline: 'Historical interpretations, sources and extended essay writing',
    headerColor: 'bg-rose-600',
    about:
      'A Level History is assessed through extended essay writing, source and interpretation analysis, and independent research (NEA/coursework). Unlike GCSE, A Level rewards complex historical argument, engagement with historiography and the ability to construct a sustained judgement. The NEA (Non-Examined Assessment / coursework) is worth 20% and is internally marked, externally moderated.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '7042',
        usedBy: 'Most popular A Level History board in England',
        format: 'Written',
        duration: 'Paper 1: 2h 30m · Paper 2: 2h 30m · NEA: ~3500 words (20%)',
        topics: [
          'Paper 1: Breadth study (over 100+ years) — long-term change + essay',
          'Paper 2: Depth study (shorter period) — focuses on causation, significance, interpretations',
          'Paper 3: Historical interpretations + essay on a single period',
          'NEA: Independent investigation into a historical controversy (20% of marks)',
        ],
        marking:
          'Essays are marked using levels (1–5): Level 5 requires a sustained analytical argument, extensive accurate knowledge and explicit engagement with historical debate.',
        tip: 'Historiography matters at A Level — know the names and key arguments of historians who have written about your topic. Quoting a historian\'s view and then evaluating it marks you as a Level 5 writer.',
        paperLink: { label: 'AQA A Level History Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '9HI0',
        usedBy: 'Widely used, popular particularly for Paper 3 interpretation questions',
        format: 'Written',
        duration: 'Paper 1: 2h 15m · Paper 2: 1h 30m · Paper 3: 2h 15m · Coursework (20%)',
        topics: [
          'Paper 1: Breadth study with primary source analysis',
          'Paper 2: Depth study — causation and significance essays',
          'Paper 3: Aspects in breadth + interpretation of a major historical debate',
          'Coursework (20%): investigative study comparing sources and historical interpretations',
        ],
        marking:
          'Edexcel Paper 3 explicitly tests interpretation skills — you must evaluate how convincing specific historical interpretations are and explain the factors shaping historians\' views.',
        tip: 'For Edexcel\'s interpretation questions, use the HAPS framework: Historiography (what view do they represent?), Argument (what do they actually claim?), Purpose (why might they take this view?), Support (how well does their view stand up to evidence?).',
        paperLink: { label: 'Edexcel A Level History Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR',
        specCode: 'H505',
        usedBy: 'Popular in many sixth forms, strong source and coursework component',
        format: 'Written',
        duration: 'Component 1: 1h 30m · Component 2: 1h 30m · Component 3: 2h 30m · Coursework (20%)',
        topics: [
          'Component 1: British period study + interpretation skills',
          'Component 2: Non-British period study',
          'Component 3: Thematic study + historical debates',
          'Coursework: research and evaluation of historical question (20%)',
        ],
        marking:
          'OCR rewards sustained analytical argument and precise use of historical knowledge. "Descriptive" answers that retell events without analysis cannot reach the top level bands.',
        tip: 'For OCR, practise distinguishing between "narrative" (what happened) and "analysis" (why it happened, how significant it was, what historians argue about it). All high-level answers must be analytical, not descriptive.',
        paperLink: { label: 'OCR A Level History Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Historiography: key historians and their arguments for each topic — know names, dates of works and their central claim',
      'Causation: distinguish between short-term triggers, medium-term factors and long-term underlying causes',
      'Significance: why did this event matter? What were its immediate, medium and long-term consequences?',
      'Change and continuity: what changed, at what pace, driven by what factors?',
      'Source analysis: provenance (author, audience, purpose, date) + content + context',
      'Interpretation questions: why do historians disagree? (evidence available, perspective, methodology, time of writing)',
      'Essay structure: introduction with clear argument → PEEL paragraphs → conclusion as synthesis not summary',
      'NEA: formulate a specific question, use primary and secondary sources, reach an evidenced judgement',
      'Precise knowledge: dates, key figures, policies, statistics that support your argument',
      'Evaluation: every essay needs counter-arguments addressed and dismissed with evidence',
    ],
    practiceLinks: [
      { label: 'Physics & Maths Tutor — A Level History', url: 'https://www.physicsandmathstutor.com/history-revision/a-level/', note: 'Free past papers, essay plans and revision notes for all boards', board: 'All boards' },
      { label: 'AQA A Level History Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA past papers and mark schemes', board: 'AQA' },
      { label: 'Edexcel A Level History Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html', note: 'Official Edexcel papers', board: 'Edexcel' },
      { label: 'OCR A Level History Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/', note: 'Official OCR papers', board: 'OCR' },
    ],
    topTips: [
      'Historiography is the difference between a grade B and grade A at A Level — know key historians\' arguments and use them in essays to reach the top mark bands.',
      'Avoid "story-telling" — never just describe events. Every paragraph must make a historical argument supported by specific evidence.',
      'Plan every essay in 3–5 minutes before writing: write down your overall argument, 3–4 analytical points and a provisional conclusion. Essays written without a plan tend to drift.',
      'For the NEA, choose a genuinely contested historical question — one with clear historiographical disagreement. Avoid questions with an obvious "right answer."',
      'Read the mark schemes for past essays — they reveal exactly what Level 5 answers include. Model your answers on them.',
    ],
  },

  // ─── PSYCHOLOGY ───────────────────────────────────────────────────────────
  {
    slug: 'psychology',
    name: 'Psychology',
    emoji: '🧠',
    tagline: 'Social influence, memory, research methods and psychological approaches',
    headerColor: 'bg-purple-600',
    about:
      'A Level Psychology combines scientific methodology with the study of human behaviour and mental processes. All boards share a core set of topics (social influence, memory, psychopathology, research methods) plus additional optional topics. Research methods is the most important topic — it appears on every paper and runs through all other content.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '7182',
        usedBy: 'Most popular A Level Psychology board — used by the majority of schools',
        format: 'Written',
        duration: 'Paper 1: 2h · Paper 2: 2h · Paper 3: 2h (6h total)',
        topics: [
          'Paper 1: Social influence, Memory, Attachment, Psychopathology',
          'Paper 2: Approaches (biological, behaviourist, cognitive, psychodynamic, humanistic), Biopsychology, Research methods',
          'Paper 3: Issues & Debates + two optional topics (Relationships, Forensic, Addiction, Schizophrenia, Gender, Cognition & Development)',
          'Research methods: all designs, sampling, analysis, statistics (chi-squared, Spearman\'s, Mann-Whitney, sign test)',
        ],
        marking:
          'AQA uses a points-based mark scheme for most questions. For extended writing (12, 16 marks): use AO1 (describe), AO2 (apply), AO3 (evaluate) marks — divide your answer proportionally.',
        tip: 'Research methods questions appear on all three papers. Master every term: IV, DV, confounding variable, operationalisation, reliability, validity, ethical considerations. A student who knows research methods perfectly has a significant advantage.',
        paperLink: { label: 'AQA A Level Psychology Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '9PS0',
        usedBy: 'Second most popular Psychology board',
        format: 'Written',
        duration: 'Paper 1: 2h · Paper 2: 2h · Paper 3: 2h (6h total)',
        topics: [
          'Different structure to AQA: focuses on social psychology, cognitive psychology, biological psychology, learning theories',
          'Paper 3 includes a research methods section and application to psychological issues',
          'Edexcel uses a "classic studies" approach — specific studies are prescribed for each topic',
          'More emphasis on applying psychological knowledge to real-world scenarios',
        ],
        marking:
          'Edexcel uses a levels-based mark scheme for extended writing — higher levels require application and evaluation, not just description.',
        tip: 'Edexcel\'s prescribed studies (e.g. Milgram, Loftus, Bandura) must be known in detail: researcher name, year, procedure, results, conclusions and limitations. Make revision cards for each one.',
        paperLink: { label: 'Edexcel A Level Psychology Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR',
        specCode: 'H567',
        usedBy: 'Popular in many schools, particularly where OCR is used for other subjects too',
        format: 'Written',
        duration: 'Component 1: 1h 30m · Component 2: 1h 30m · Component 3: 2h (5h total)',
        topics: [
          'Component 1: Research methods + Social psychology + Cognitive psychology',
          'Component 2: Biological psychology + Individual differences + Developmental psychology',
          'Component 3: Applied psychology (issues in mental health, criminal psychology, sport or health)',
          'OCR integrates research methods throughout each topic rather than as a standalone section',
        ],
        marking:
          'OCR rewards precise study knowledge — for each study, know researcher, year, aims, procedure, sample, findings and conclusions. Generic answers score low.',
        tip: 'OCR integrates research methods into every topic question — a question about memory might ask you to evaluate a study\'s methodology. Keep your research methods knowledge active throughout revision.',
        paperLink: { label: 'OCR A Level Psychology Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Research methods: every design type, sampling method, statistical test (when to use each), ethical considerations',
      'Social influence: conformity (Asch), obedience (Milgram), minority influence, social change',
      'Memory: multi-store model, working memory model, eyewitness testimony, cognitive interview',
      'Attachment: Bowlby\'s theory, Strange Situation (Ainsworth), Romanian orphan studies, effects of deprivation',
      'Psychopathology: definitions of abnormality, OCD, phobias, depression — characteristics, explanations and treatments',
      'Approaches: biological (genetics, neurochemistry), behaviourist (conditioning), cognitive (schema theory), psychodynamic (Freud)',
      'Issues & Debates: gender bias, culture bias, free will vs determinism, nature vs nurture, holism vs reductionism',
      'Biopsychology: localisation of function, brain structure, split-brain research, biological rhythms',
      'Key studies: know researcher, year, procedure, sample, findings and conclusions for 10–15 key studies',
      'Statistical tests: chi-squared, Wilcoxon, Mann-Whitney, Spearman\'s — when each is used and why',
    ],
    practiceLinks: [
      { label: 'Physics & Maths Tutor — A Level Psychology', url: 'https://www.physicsandmathstutor.com/psychology-revision/a-level/', note: 'Free past papers and topic revision for all boards', board: 'All boards' },
      { label: 'AQA A Level Psychology Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA past papers and mark schemes', board: 'AQA' },
      { label: 'Simply Psychology', url: 'https://www.simplypsychology.org/', note: 'Free summaries of key studies, theories and concepts', board: 'All boards' },
      { label: 'BBC Bitesize A Level Psychology', url: 'https://www.bbc.co.uk/bitesize/examspecs/zqpb382', note: 'Free revision content for AQA A Level Psychology', board: 'AQA' },
    ],
    topTips: [
      'Research methods is the most valuable topic to master — it appears explicitly on all three papers and as implicit evaluation in essay questions. It is worth 25–30% of your total marks.',
      'For studies: learn APRC — Aims, Procedure, Results, Conclusions — for every key study. Generic descriptions ("Milgram studied obedience") score Level 1. Specific detail scores Level 4.',
      'For 12 and 16-mark essays: allocate marks proportionally. A 16-mark question needs AO1 (describe, ~4 marks), AO2 (apply, ~4 marks) and AO3 (evaluate, ~8 marks). Evaluation should dominate.',
      'Evaluation must go beyond "one strength is... one limitation is..." — explain the implication. Why does this matter for the theory? What does the limitation tell us about the study\'s validity?',
      'For statistical test questions: the decision tree is: 1) difference or correlation? 2) nominal/ordinal/interval data? 3) related or unrelated? Apply these three questions in order every time.',
    ],
  },

  // ─── ECONOMICS ────────────────────────────────────────────────────────────
  {
    slug: 'economics',
    name: 'Economics',
    emoji: '📈',
    tagline: 'Microeconomics, macroeconomics and economic analysis',
    headerColor: 'bg-amber-500',
    about:
      'A Level Economics combines Microeconomics (individual markets, firms, market failure) and Macroeconomics (whole economy: GDP, inflation, unemployment, monetary and fiscal policy). Assessment is through three papers with a mix of data response and extended essay questions. Diagrams, evaluation and application to real-world examples are the most important skills for achieving top grades.',
    boards: [
      {
        id: 'aqa',
        name: 'AQA',
        specCode: '7136',
        usedBy: 'Most popular A Level Economics board in England',
        format: 'Written',
        duration: 'Paper 1: 2h · Paper 2: 2h · Paper 3: 2h (6h total)',
        topics: [
          'Paper 1: Markets and Market Failure (microeconomics)',
          'Paper 2: National and International Economy (macroeconomics)',
          'Paper 3: Economic Principles and Issues (synoptic — both micro and macro, data response + essays)',
          'Topics: supply & demand, elasticity, market failure, GDP, inflation, unemployment, monetary policy, fiscal policy, global trade, development',
        ],
        marking:
          'Essays are levels-based (1–5). Level 5 requires correct analysis + well-reasoned evaluation + real-world examples + confident judgement. "Evaluating" means explaining why something might NOT work.',
        tip: 'Every essay answer needs a diagram — even if the question does not explicitly ask for one. A correctly labelled diagram of supply/demand shift, AD/AS, or welfare loss always adds marks and structures your analysis.',
        paperLink: { label: 'AQA A Level Economics Past Papers', url: 'https://www.aqa.org.uk/past-papers' },
        color: AQA,
      },
      {
        id: 'edexcel',
        name: 'Edexcel (Pearson)',
        specCode: '9EC0',
        usedBy: 'Second most popular Economics board',
        format: 'Written',
        duration: 'Paper 1: 2h · Paper 2: 2h · Paper 3: 2h (6h total)',
        topics: [
          'Paper 1: Markets (microeconomics)',
          'Paper 2: The National and Global Economy (macroeconomics)',
          'Paper 3: Business Economics (synoptic paper combining micro and macro in a business context)',
          'Edexcel includes more behavioural economics content than AQA — nudge theory, irrationality, bounded rationality',
        ],
        marking:
          'Edexcel Paper 3 is specifically focused on business and market applications — expect to apply macro and micro theory to firm-level decisions and market structures.',
        tip: 'Edexcel\'s Paper 3 "Business Economics" paper rewards students who connect macro policy changes (e.g. interest rate rise) to firm-level consequences (e.g. investment, exchange rate, export competitiveness). Practise these chains of reasoning.',
        paperLink: { label: 'Edexcel A Level Economics Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html' },
        color: EDEXCEL,
      },
      {
        id: 'ocr',
        name: 'OCR',
        specCode: 'H460',
        usedBy: 'Popular in many sixth forms, particularly where OCR is used for related subjects',
        format: 'Written',
        duration: 'Component 1: 2h · Component 2: 2h · Component 3: 1h (5h total)',
        topics: [
          'Component 1: Microeconomics',
          'Component 2: Macroeconomics',
          'Component 3: Themes in Economics (synoptic, shorter)',
          'OCR\'s synoptic component focuses on applying economic concepts to contemporary economic themes and data',
        ],
        marking:
          'OCR rewards precise use of economic terminology and the ability to construct a coherent chain of economic reasoning. Vague or descriptive answers cannot reach the top mark bands.',
        tip: 'For OCR\'s synoptic component, practise connecting micro and macro theory to current UK/global economic news. Reading the Financial Times or BBC Economics section for 10 minutes a week builds the real-world context examiners look for.',
        paperLink: { label: 'OCR A Level Economics Past Papers', url: 'https://www.ocr.org.uk/students/past-papers/' },
        color: OCR,
      },
    ],
    focusTopics: [
      'Supply and demand: shifts vs movements along, price elasticity (PED, YED, XED), incidence of tax',
      'Market failure: externalities, public goods, information failure, merit/demerit goods — welfare triangles',
      'Government intervention: taxation, subsidies, price controls, regulation — evaluate effectiveness',
      'Firm theory: short-run and long-run production, economies of scale, market structures (perfect competition → monopoly)',
      'Labour market: wage determination, monopsony, trade unions, minimum wage',
      'Macroeconomic objectives: GDP growth, inflation (CPI), unemployment, current account balance',
      'AD/AS model: shifts in AD and AS, multiplier effect, output gaps',
      'Monetary policy: interest rates, quantitative easing, exchange rate effects',
      'Fiscal policy: government spending, taxation, automatic stabilisers, budget deficit and national debt',
      'International economics: comparative advantage, trade policy, exchange rates, balance of payments',
    ],
    practiceLinks: [
      { label: 'Physics & Maths Tutor — A Level Economics', url: 'https://www.physicsandmathstutor.com/economics-revision/a-level/', note: 'Free topic questions and past papers for all boards', board: 'All boards' },
      { label: 'AQA A Level Economics Past Papers', url: 'https://www.aqa.org.uk/past-papers', note: 'Official AQA past papers and mark schemes', board: 'AQA' },
      { label: 'Tutor2u — Economics (free content)', url: 'https://www.tutor2u.net/economics', note: 'Excellent free revision content, diagrams and current affairs', board: 'All boards' },
      { label: 'Edexcel A Level Economics Past Papers', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html', note: 'Official Edexcel past papers', board: 'Edexcel' },
    ],
    topTips: [
      'Diagrams are non-negotiable — a top-grade Economics student draws a diagram for almost every analysis point. Supply/demand, AD/AS, welfare triangles, cost curves should be drawn cleanly and labelled precisely.',
      'Evaluation is what separates Grade A from Grade E at A Level. "However, the effectiveness depends on..." "In the short run... but in the long run..." "This assumes... but in reality..." are the phrases to practise.',
      'Connect micro and macro: a change in interest rates affects consumer demand (macro) AND firm investment and cost of production (micro). Synoptic connections earn the highest marks on Paper 3.',
      'Build a bank of real-world examples: UK inflation data, current account deficit, Bank of England base rate, unemployment rate. Concrete, recent examples elevate essays from generic to excellent.',
      'Read the mark scheme for every past paper essay — understand exactly what gained marks at each level. Then practise writing under timed conditions and self-mark using the same criteria.',
    ],
  },
]

export const ALEVEL_SUBJECT_CARDS = [
  { slug: 'maths',     name: 'Mathematics', emoji: '🔢', tagline: 'Pure maths, statistics & mechanics',             bg: 'bg-blue-50',   border: 'border-blue-200',   heading: 'text-blue-700'   },
  { slug: 'physics',   name: 'Physics',     emoji: '⚛️', tagline: 'Mechanics, fields & modern physics',            bg: 'bg-indigo-50', border: 'border-indigo-200', heading: 'text-indigo-700' },
  { slug: 'chemistry', name: 'Chemistry',   emoji: '⚗️', tagline: 'Physical, inorganic & organic chemistry',       bg: 'bg-teal-50',   border: 'border-teal-200',   heading: 'text-teal-700'   },
  { slug: 'biology',   name: 'Biology',     emoji: '🧬', tagline: 'Cells, genetics, ecology & physiology',         bg: 'bg-green-50',  border: 'border-green-200',  heading: 'text-green-700'  },
  { slug: 'history',   name: 'History',     emoji: '🏛️', tagline: 'Historiography, sources & essay writing',      bg: 'bg-rose-50',   border: 'border-rose-200',   heading: 'text-rose-700'   },
  { slug: 'psychology',name: 'Psychology',  emoji: '🧠', tagline: 'Social influence, memory & research methods',  bg: 'bg-purple-50', border: 'border-purple-200', heading: 'text-purple-700' },
  { slug: 'economics', name: 'Economics',   emoji: '📈', tagline: 'Micro & macroeconomics with data analysis',     bg: 'bg-amber-50',  border: 'border-amber-200',  heading: 'text-amber-700'  },
  { slug: 'geography', name: 'Geography',   emoji: '🌍', tagline: 'Physical & human geography plus fieldwork NEA', bg: 'bg-emerald-50',border: 'border-emerald-200', heading: 'text-emerald-700'},
]