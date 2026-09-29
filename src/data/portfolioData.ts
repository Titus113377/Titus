import { Project, SkillCategory, JourneyStage, ExploringTopic } from '../types';

export const PERSONAL_INFO = {
  name: 'Titus',
  role: 'First-Year B.Tech Student',
  careerGoal: 'Aspiring AI Engineer',
  tagline: 'Building Today. Engineering Tomorrow.',
  shortBio:
    "Hi, I'm Titus — a first-year B.Tech student and aspiring AI engineer exploring Python, web development, and Generative AI through projects, hackathons, and continuous learning.",
  githubUrl: 'https://github.com/Titus113377/TITUS_PYTHON',
  linkedinUrl: 'https://www.linkedin.com/in/p-titus-a3628a401',
  email: 'titus113377@gmail.com',
  currentStatus: {
    status: 'First-Year B.Tech Student',
    focus: 'Artificial Intelligence & Software Development',
    currentStack: ['Python', 'Web Development', 'Generative AI'],
    experience: ['Hackathons', 'Ideathons', 'Project Building'],
    goal: 'AI Engineer'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'waste2value',
    name: 'Waste2Value AI',
    category: 'AI / Sustainability / Web Application',
    isFeatured: true,
    description:
      'Waste2Value AI is an AI-powered concept designed to help users identify waste, understand its potential value, and discover ways to sell, reuse or recycle it.',
    whyIBuiltIt:
      'The project explores how AI can help convert everyday waste into useful economic and environmental opportunities by giving people immediate, actionable pathways.',
    technologies: ['Python', 'AI', 'Generative AI', 'Web Development'],
    keyFeatures: [
      'AI-powered waste identification & material breakdown',
      'Value estimation based on item condition & category',
      'Sell / Create / Recycle decision pathways',
      'Scrap & recycling center discovery assistance',
      'DIY upcycling & reuse recommendations',
      'Environmental footprint impact tracking'
    ],
    whatILearned: [
      'Product thinking and defining real-world user value',
      'AI application concepts and practical prompt workflows',
      'Rapid prototyping under ideation constraints',
      'User-focused interface design and clear information hierarchy',
      'Connecting technology with tangible sustainability challenges'
    ],
    githubUrl: 'https://github.com/Titus113377/TITUS_PYTHON',
    hasInteractiveDemo: true
  },
  {
    id: 'voter-eligibility',
    name: 'Voter Eligibility Calculator',
    category: 'Python / Conditional Logic',
    isFeatured: false,
    description:
      "A software application that determines voter eligibility based on user's age, citizenship status, and constitutional voting criteria.",
    technologies: ['Python', 'Programming Logic', 'Application Development'],
    keyFeatures: [
      'Multi-factor eligibility validation (age, citizenship, registration)',
      'Instant criteria-based feedback and legal voting age checks',
      'Edge-case handling for upcoming birthdays and future election cycles'
    ],
    whatILearned: [
      'Writing rigorous conditional statements and branching logic',
      'Input sanitization and error prevention in CLI and web environments',
      'Structuring user-friendly feedback loops for status evaluation'
    ],
    githubUrl: 'https://github.com/Titus113377/TITUS_PYTHON',
    hasInteractiveDemo: true
  },
  {
    id: 'atm-management',
    name: 'ATM Management System',
    category: 'Python / Software Architecture',
    isFeatured: false,
    description:
      'A programming project simulating core ATM operations such as account authentication, balance verification, deposits, withdrawals, and transaction records.',
    technologies: ['Python', 'Programming Fundamentals', 'State Logic'],
    keyFeatures: [
      'PIN authentication and session state simulation',
      'Safe balance validation preventing unauthorized overdrafts',
      'Interactive deposit, withdrawal, and mini-statement ledger'
    ],
    whatILearned: [
      'Managing application state and variable persistence across user actions',
      'Defensive programming against invalid input and boundary values',
      'Designing structured procedural flows and interactive console loops'
    ],
    githubUrl: 'https://github.com/Titus113377/TITUS_PYTHON',
    hasInteractiveDemo: true
  },
  {
    id: 'grade-calculator',
    name: 'Student Grade Calculator',
    category: 'Python / Academic Utility',
    isFeatured: false,
    description:
      'A structured application that calculates student aggregate marks, GPA scores, and grade boundaries while demonstrating clean programming fundamentals.',
    technologies: ['Python', 'Programming Fundamentals', 'Data Validation'],
    keyFeatures: [
      'Multi-course weighted score calculation and percentage aggregation',
      'Standardized grading scale mapping (A, B, C, D, F) with GPA equivalents',
      'Input validation rejecting impossible scores (<0 or >100)'
    ],
    whatILearned: [
      'Iterative data processing using lists and loops in Python',
      'Implementing grading matrices with structured conditional trees',
      'Building practical tools to solve common academic record tasks'
    ],
    githubUrl: 'https://github.com/Titus113377/TITUS_PYTHON',
    hasInteractiveDemo: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    description: 'Core foundational language for logic, scripting, and algorithmic problem solving.',
    skills: [
      { name: 'Python', level: 'Active Practice', note: 'Data structures, CLI tools, logic & automation' }
    ]
  },
  {
    title: 'Web Development',
    description: 'Modern front-end fundamentals to build accessible user interfaces and web apps.',
    skills: [
      { name: 'HTML5', level: 'Foundations', note: 'Semantic page structure & accessibility' },
      { name: 'CSS3 / Modern Styling', level: 'Foundations', note: 'Responsive design & clean layouts' },
      { name: 'JavaScript', level: 'Foundations', note: 'DOM manipulation & asynchronous basics' },
      { name: 'Web Fundamentals', level: 'Active Practice', note: 'HTTP, client-server models, responsive UI' }
    ]
  },
  {
    title: 'AI & Generative Tools',
    description: 'Practical exploration of modern AI paradigms and AI-assisted workflows.',
    skills: [
      { name: 'AI Fundamentals', level: 'Exploring', note: 'Core concepts, algorithms & ML taxonomy' },
      { name: 'Generative AI', level: 'Exploring', note: 'LLM concepts, reasoning flows & capabilities' },
      { name: 'AI-Assisted Development', level: 'Active Practice', note: 'Accelerating prototype construction' },
      { name: 'Prompt Engineering', level: 'Active Practice', note: 'Structured instructions, few-shot framing' }
    ]
  },
  {
    title: 'Development & Workflow',
    description: 'Tools and methodologies for reliable code management and iterative prototyping.',
    skills: [
      { name: 'Git & GitHub', level: 'Active Practice', note: 'Version control, repositories, collaboration' },
      { name: 'Problem Solving', level: 'Active Practice', note: 'Algorithmic decomposition & analytical thinking' },
      { name: 'Rapid Prototyping', level: 'Active Practice', note: 'Turning concept ideas into functional demos' }
    ]
  },
  {
    title: 'Currently Learning',
    description: 'Active study roadmap to grow from foundations toward production-grade systems.',
    skills: [
      { name: 'Machine Learning', level: 'Exploring', note: 'Supervised/unsupervised math & Scikit-learn' },
      { name: 'Deep Learning', level: 'Exploring', note: 'Neural networks, activation functions, backprop' },
      { name: 'AI Engineering', level: 'Exploring', note: 'Building reliable pipelines with models' },
      { name: 'APIs & Backend', level: 'Exploring', note: 'RESTful architectures, FastAPI & endpoints' },
      { name: 'Data Structures & Algorithms', level: 'Exploring', note: 'Arrays, hash maps, trees & sorting' }
    ]
  }
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: '01',
    title: 'B.Tech — First Year',
    tagline: 'Building strong engineering fundamentals',
    description:
      'Entering undergraduate engineering with curiosity and purpose. Focusing on mathematics, core computing principles, and hands-on laboratory experimentation.',
    focusAreas: ['Engineering Mathematics', 'Computer Science Basics', 'Academic Discipline'],
    status: 'Current Focus'
  },
  {
    step: '02',
    title: 'Python Foundations',
    tagline: 'Learning programming through practical projects',
    description:
      'Mastering Python syntax, control structures, and OOP by building tangible programs — including CLI utilities, calculators, and system simulators.',
    focusAreas: ['Data Structures in Python', 'Conditional Logic', 'Mini Projects'],
    status: 'Current Focus'
  },
  {
    step: '03',
    title: 'Web Development',
    tagline: 'Understanding how applications are designed and built',
    description:
      'Expanding beyond terminal scripts to create interactive web interfaces, understanding how users interact with software on screens of all sizes.',
    focusAreas: ['HTML & CSS', 'JavaScript Basics', 'Responsive Layouts'],
    status: 'Current Focus'
  },
  {
    step: '04',
    title: 'Generative AI & LLMs',
    tagline: 'Exploring AI-powered applications and prompt engineering',
    description:
      'Experimenting with large language models, AI prototyping tools, and designing concepts like Waste2Value AI that connect intelligent models to real problems.',
    focusAreas: ['Prompt Engineering', 'AI Prototype Design', 'Sustainability AI'],
    status: 'Next Step'
  },
  {
    step: '05',
    title: 'AI Engineering',
    tagline: 'Long-term goal: build reliable, practical AI systems',
    description:
      'Deepening knowledge into machine learning algorithms, model evaluation, API deployment, and production software patterns to become a full-fledged AI engineer.',
    focusAreas: ['ML Pipelines', 'Model Deployment', 'Production AI Architecture'],
    status: 'Long-term Goal'
  }
];

export const EXPLORING_TOPICS: ExploringTopic[] = [
  {
    title: 'Machine Learning',
    description: 'Understanding the mathematical and algorithmic foundations behind intelligent systems.',
    topics: ['Supervised Learning', 'Linear Regression', 'Classification', 'Model Evaluation'],
    whyImportant: 'Provides the theoretical grounding essential for any serious AI engineer.'
  },
  {
    title: 'Generative AI',
    description: 'Exploring LLM-powered applications, context engineering, and AI workflows.',
    topics: ['Prompt Design', 'Retrieval Concepts', 'Tool Calling', 'Multimodal Inputs'],
    whyImportant: 'Enables rapid development of intuitive, natural-language human interfaces.'
  },
  {
    title: 'AI Engineering',
    description: 'Learning how raw models become reliable, production-ready applications.',
    topics: ['Latency Optimization', 'Evaluation Frameworks', 'Guardrails', 'System Reliability'],
    whyImportant: 'Bridges the gap between research models and software that users can trust.'
  },
  {
    title: 'Backend Development',
    description: 'Building stronger server-side foundations for real-world applications.',
    topics: ['REST APIs', 'FastAPI / Python', 'Database Basics', 'Client-Server Protocols'],
    whyImportant: 'Essential for serving AI model inference and persisting user data securely.'
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Strengthening algorithmic problem-solving and programming fundamentals.',
    topics: ['Time & Space Complexity', 'Arrays & Strings', 'Searching & Sorting', 'Recursion'],
    whyImportant: 'Forms the baseline computational thinking required for high-performance software.'
  }
];

export const PHILOSOPHY = {
  quote: 'I learn by building, improve by experimenting, and grow by solving real problems.'
};
