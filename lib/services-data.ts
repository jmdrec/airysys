export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  gradient: string;
  features: string[];
  tech: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "web-development",
    title: "Web Application Development",
    shortTitle: "Web Development",
    description:
      "Scalable, high-performance web applications built with modern frameworks and best practices.",
    longDescription:
      "We build enterprise-grade web applications using Next.js, React, Node.js and TypeScript. From custom SaaS platforms and e-commerce solutions to real-time dashboards and progressive web apps — our full-stack team delivers fast, secure, and SEO-optimized applications that scale with your business.",
    image: "/images/service-web.png",
    icon: "Globe",
    gradient: "from-blue-600 to-cyan-500",
    features: [
      "Custom SaaS Platforms",
      "Progressive Web Apps (PWA)",
      "E-Commerce Solutions",
      "Enterprise Dashboards & Admin Panels",
      "API Development & Integration",
      "Real-time Applications (WebSocket)",
      "CMS & Content Platforms",
      "SEO Optimization & Performance Tuning",
    ],
    tech: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "GraphQL", "Tailwind CSS"],
    benefits: [
      { title: "Lightning Fast", description: "Server-side rendering and edge caching for sub-second load times." },
      { title: "SEO Optimized", description: "Built-in SEO best practices with structured data and meta management." },
      { title: "Scalable Architecture", description: "Microservices-ready architecture that grows with your user base." },
      { title: "Secure by Default", description: "OWASP-compliant security practices with authentication and authorization." },
    ],
    process: [
      { step: "Requirement Analysis", description: "Deep dive into your business goals, user personas, and technical needs." },
      { step: "Architecture & Design", description: "System architecture, database design, wireframes, and UI/UX prototypes." },
      { step: "Agile Development", description: "Sprint-based development with continuous integration and weekly demos." },
      { step: "Testing & QA", description: "Automated testing, performance testing, and security audits." },
      { step: "Deployment & Support", description: "Cloud deployment, monitoring setup, and ongoing maintenance." },
    ],
    faqs: [
      { question: "What technologies do you use for web development?", answer: "We specialize in Next.js, React, Node.js, TypeScript, PostgreSQL, and cloud services (AWS/GCP). We choose the right stack based on your project requirements." },
      { question: "How long does a typical web project take?", answer: "Small projects take 4-8 weeks, medium projects 2-4 months, and enterprise applications 4-8 months depending on complexity." },
      { question: "Do you provide post-launch support?", answer: "Yes, we offer ongoing maintenance, performance monitoring, bug fixes, and feature enhancements after launch." },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Application Development",
    shortTitle: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    longDescription:
      "We build high-performance mobile applications using React Native, Flutter, and native technologies. Our mobile team creates engaging, offline-capable apps with beautiful UI, seamless API integration, push notifications, and analytics — optimized for both app stores.",
    image: "/images/service-mobile.png",
    icon: "Smartphone",
    gradient: "from-purple-600 to-pink-500",
    features: [
      "Cross-Platform Apps (React Native / Flutter)",
      "Native iOS (Swift) & Android (Kotlin)",
      "Offline-First Architecture",
      "Push Notifications & In-App Messaging",
      "App Store Optimization (ASO)",
      "In-App Analytics & Crash Reporting",
      "Payment Gateway Integration",
      "Wearable & Tablet Support",
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "Redux", "REST/GraphQL"],
    benefits: [
      { title: "Cross-Platform Efficiency", description: "Single codebase for iOS and Android — faster time to market." },
      { title: "Native Performance", description: "60fps animations and native device API access for the best UX." },
      { title: "Offline Capable", description: "Works seamlessly without internet with smart data sync." },
      { title: "Store-Ready", description: "ASO-optimized and compliant with App Store and Play Store guidelines." },
    ],
    process: [
      { step: "Discovery & Strategy", description: "Platform analysis, user research, and feature prioritization." },
      { step: "UI/UX Design", description: "Interactive prototypes, design system, and user testing." },
      { step: "Development & Testing", description: "Feature development with automated testing on real devices." },
      { step: "Beta Launch", description: "TestFlight / Play Console beta with real user feedback." },
      { step: "Launch & Optimize", description: "Store submission, ASO, and iterative performance improvements." },
    ],
    faqs: [
      { question: "Should I build native or cross-platform?", answer: "Cross-platform (React Native/Flutter) covers 90% of use cases. We recommend native only for graphics-heavy or hardware-intensive apps." },
      { question: "Do you handle app store submissions?", answer: "Yes, we manage the entire submission process including screenshots, descriptions, and compliance." },
      { question: "Can you integrate with our existing backend?", answer: "Absolutely. We integrate with any REST/GraphQL API or build a new backend to power your app." },
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning Solutions",
    shortTitle: "Machine Learning",
    description:
      "Custom ML models and data pipelines that turn raw data into actionable intelligence.",
    longDescription:
      "We build production-grade machine learning systems — from data pipeline engineering and model training to deployment and monitoring. Our ML engineers specialize in NLP, computer vision, predictive analytics, and recommendation systems that deliver measurable business impact.",
    image: "/images/service-ml.png",
    icon: "Brain",
    gradient: "from-amber-500 to-orange-500",
    features: [
      "Predictive Analytics & Forecasting",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Recognition",
      "Recommendation Systems",
      "Anomaly Detection & Fraud Prevention",
      "Data Pipeline Engineering",
      "Model Training & Fine-Tuning",
      "MLOps & Model Monitoring",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLflow", "Pandas", "Hugging Face", "CUDA"],
    benefits: [
      { title: "Data-Driven Decisions", description: "Transform raw data into actionable insights for competitive advantage." },
      { title: "Automation at Scale", description: "Automate repetitive tasks with intelligent models that learn over time." },
      { title: "Production-Ready", description: "Models deployed with monitoring, versioning, and A/B testing." },
      { title: "Custom Models", description: "Tailored models trained on your data — not generic off-the-shelf solutions." },
    ],
    process: [
      { step: "Data Assessment", description: "Evaluate data quality, availability, and business objectives." },
      { step: "Feature Engineering", description: "Data cleaning, transformation, and feature extraction." },
      { step: "Model Development", description: "Experiment with algorithms, train, and validate models." },
      { step: "Deployment", description: "Containerized deployment with API endpoints and batch processing." },
      { step: "Monitoring & Iteration", description: "Track model performance, retrain, and continuously improve." },
    ],
    faqs: [
      { question: "What kind of data do you need?", answer: "We work with structured (databases, CSVs), unstructured (text, images), and semi-structured data. We also help with data collection strategies." },
      { question: "How long does ML model development take?", answer: "A proof of concept takes 2-4 weeks. Production models typically take 2-4 months including data pipeline setup." },
      { question: "Can you improve our existing models?", answer: "Yes, we audit existing ML systems and optimize for accuracy, speed, and cost." },
    ],
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI Systems",
    shortTitle: "Agentic AI",
    description:
      "Autonomous AI agents that reason, plan, and execute complex business workflows.",
    longDescription:
      "We build next-generation Agentic AI systems that go beyond chatbots — autonomous agents that reason, plan, collaborate, and execute multi-step workflows. Using LangChain, CrewAI, and modern LLM frameworks, we create AI that truly transforms how your business operates.",
    image: "/images/service-agentic.png",
    icon: "Bot",
    gradient: "from-primary to-emerald-500",
    features: [
      "Autonomous AI Agents",
      "Multi-Agent Orchestration",
      "Tool-Use & Function Calling",
      "RAG Pipelines (Retrieval-Augmented Generation)",
      "Conversational AI with Memory",
      "AI Safety & Guardrails",
      "Custom LLM Fine-Tuning",
      "Enterprise Knowledge Bases",
    ],
    tech: ["LangChain", "CrewAI", "OpenAI", "Anthropic", "Pinecone", "ChromaDB", "FastAPI", "Python"],
    benefits: [
      { title: "True Autonomy", description: "Agents that think, plan, and act — not just respond to prompts." },
      { title: "70% Task Reduction", description: "Automate complex multi-step workflows that previously required human oversight." },
      { title: "Enterprise-Safe", description: "Built with guardrails, audit trails, and compliance frameworks." },
      { title: "Domain-Specific", description: "Agents trained on your domain data for accurate, relevant outputs." },
    ],
    process: [
      { step: "Use Case Discovery", description: "Identify high-impact workflows suitable for AI automation." },
      { step: "Agent Architecture", description: "Design agent topology, tool integrations, and safety guardrails." },
      { step: "Development & Training", description: "Build agents, create RAG pipelines, and fine-tune models." },
      { step: "Testing & Validation", description: "Rigorous testing with edge cases and human-in-the-loop validation." },
      { step: "Deployment & Scaling", description: "Production deployment with monitoring and continuous improvement." },
    ],
    faqs: [
      { question: "What's the difference between a chatbot and an AI agent?", answer: "Chatbots follow scripted flows. Agentic AI systems reason, plan multi-step actions, use tools, and make autonomous decisions to achieve goals." },
      { question: "Is Agentic AI safe for enterprise use?", answer: "Yes. We implement guardrails, human-in-the-loop checkpoints, audit logging, and content filtering for safe deployment." },
      { question: "What LLMs do you work with?", answer: "We work with OpenAI GPT-4, Anthropic Claude, open-source models (Llama, Mistral), and can fine-tune for your use case." },
    ],
  },
  {
    slug: "cloud-deployment",
    title: "Cloud & Deployment Solutions",
    shortTitle: "Cloud & DevOps",
    description:
      "Enterprise-grade cloud infrastructure, CI/CD pipelines, and DevOps automation.",
    longDescription:
      "We architect and manage cloud infrastructure on AWS, GCP, and Azure. From CI/CD pipelines and container orchestration to infrastructure-as-code and 24/7 monitoring — we ensure your applications are secure, scalable, and always available.",
    image: "/images/service-cloud.png",
    icon: "Cloud",
    gradient: "from-rose-500 to-red-500",
    features: [
      "Cloud Architecture (AWS / GCP / Azure)",
      "CI/CD Pipeline Setup",
      "Docker & Kubernetes Orchestration",
      "Infrastructure as Code (Terraform)",
      "Monitoring & Alerting (Grafana, Datadog)",
      "Security & Compliance Audits",
      "Auto-Scaling & Load Balancing",
      "Disaster Recovery & Backup",
    ],
    tech: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Grafana"],
    benefits: [
      { title: "99.99% Uptime", description: "High-availability architecture with multi-region failover." },
      { title: "Cost Optimized", description: "Right-sized infrastructure with auto-scaling to minimize cloud spend." },
      { title: "Fully Automated", description: "Infrastructure as code — reproducible, version-controlled environments." },
      { title: "Secure & Compliant", description: "SOC2, HIPAA, and GDPR compliance-ready infrastructure." },
    ],
    process: [
      { step: "Infrastructure Audit", description: "Assess current setup, identify bottlenecks and security gaps." },
      { step: "Architecture Design", description: "Design cloud-native architecture with redundancy and scaling." },
      { step: "Migration & Setup", description: "Migrate workloads, set up CI/CD, and configure monitoring." },
      { step: "Security Hardening", description: "Implement security policies, encryption, and access controls." },
      { step: "Ongoing Management", description: "24/7 monitoring, incident response, and optimization." },
    ],
    faqs: [
      { question: "Which cloud provider do you recommend?", answer: "It depends on your needs. AWS for breadth, GCP for AI/ML workloads, Azure for Microsoft ecosystem. We help you choose." },
      { question: "Can you migrate our existing infrastructure?", answer: "Yes, we handle complete cloud migrations including data transfer, DNS, and zero-downtime cutover." },
      { question: "Do you offer managed cloud services?", answer: "Yes, we provide 24/7 monitoring, incident response, patching, and infrastructure management." },
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    shortTitle: "IT Consulting",
    description:
      "Advanced software solutions by helping you choose the right technologies like AI, BI & Analytics, Data Science, and more.",
    longDescription:
      "Our IT consulting services help businesses navigate digital transformation by choosing the right technologies and strategies. From AI adoption and BI analytics to ERP systems (SAP, Salesforce, NetSuite) and data science strategy — we provide expert guidance that aligns technology with business goals.",
    image: "/images/service-consulting.png",
    icon: "Lightbulb",
    gradient: "from-sky-500 to-blue-600",
    features: [
      "Digital Transformation Strategy",
      "AI & ML Adoption Roadmap",
      "BI & Analytics Implementation",
      "Data Science Strategy",
      "ERP Consulting (SAP, Salesforce, NetSuite)",
      "Technology Stack Assessment",
      "IT Architecture Review",
      "Vendor Selection & Management",
    ],
    tech: ["Power BI", "Tableau", "SAP", "Salesforce", "NetSuite", "Snowflake", "Azure AI", "AWS"],
    benefits: [
      { title: "Strategic Alignment", description: "Technology decisions guided by business objectives, not trends." },
      { title: "Cost Savings", description: "Optimize your tech spend by eliminating redundancies and choosing right-fit solutions." },
      { title: "Faster Execution", description: "Clear roadmaps and proven frameworks accelerate implementation." },
      { title: "Risk Mitigation", description: "Expert guidance reduces technical debt and implementation risk." },
    ],
    process: [
      { step: "Discovery Workshop", description: "Understand your business, challenges, and technology landscape." },
      { step: "Assessment & Audit", description: "Evaluate current systems, gaps, and opportunities." },
      { step: "Strategy & Roadmap", description: "Develop a prioritized technology roadmap with clear milestones." },
      { step: "Implementation Support", description: "Guide implementation, vendor selection, and change management." },
      { step: "Review & Optimize", description: "Ongoing advisory to adapt strategy as business evolves." },
    ],
    faqs: [
      { question: "What industries do you consult for?", answer: "We work across healthcare, fintech, e-commerce, education, manufacturing, and logistics." },
      { question: "Do you help with ERP selection?", answer: "Yes, we evaluate SAP, Salesforce, NetSuite, and other ERPs against your specific needs and budget." },
      { question: "Can you audit our existing tech stack?", answer: "Absolutely. We provide detailed assessments with actionable recommendations for improvement." },
    ],
  },
  {
    slug: "iot-development",
    title: "Internet of Things (IoT) Development",
    shortTitle: "IoT Development",
    description:
      "Smart IoT solutions that enhance operations through real-time data, connectivity, and automation.",
    longDescription:
      "We build end-to-end IoT solutions — from sensor integration and edge computing to cloud-based dashboards and predictive analytics. Our IoT platforms connect devices, collect real-time data, and enable intelligent automation for manufacturing, logistics, healthcare, and smart cities.",
    image: "/images/service-iot.png",
    icon: "Wifi",
    gradient: "from-teal-500 to-green-500",
    features: [
      "Sensor Integration & Device Management",
      "Edge Computing Solutions",
      "Real-Time Data Dashboards",
      "Predictive Maintenance Systems",
      "Industrial IoT (IIoT) Platforms",
      "Smart Building & City Solutions",
      "MQTT & IoT Protocol Implementation",
      "Fleet & Asset Tracking",
    ],
    tech: ["MQTT", "AWS IoT", "Azure IoT Hub", "Raspberry Pi", "Arduino", "Node-RED", "InfluxDB", "Grafana"],
    benefits: [
      { title: "Real-Time Visibility", description: "Monitor all connected devices and data streams in real-time." },
      { title: "Predictive Intelligence", description: "ML-powered alerts predict equipment failures before they happen." },
      { title: "Operational Efficiency", description: "Automate manual processes and reduce operational costs by up to 40%." },
      { title: "Scalable Connectivity", description: "Architecture that scales from 100 to 1 million connected devices." },
    ],
    process: [
      { step: "Requirements & Feasibility", description: "Assess use case, device landscape, and connectivity needs." },
      { step: "Hardware & Protocol Design", description: "Select sensors, define communication protocols, and edge architecture." },
      { step: "Platform Development", description: "Build cloud backend, data pipelines, and monitoring dashboards." },
      { step: "Integration & Testing", description: "Connect devices, test end-to-end data flow, and validate reliability." },
      { step: "Deployment & Monitoring", description: "Roll out to production with OTA updates and remote management." },
    ],
    faqs: [
      { question: "What kind of IoT projects do you handle?", answer: "Industrial IoT, smart buildings, fleet tracking, healthcare devices, agriculture sensors, and smart city infrastructure." },
      { question: "Do you handle hardware selection?", answer: "Yes, we recommend sensors, microcontrollers, and gateways based on your requirements and budget." },
      { question: "How do you ensure IoT security?", answer: "End-to-end encryption, secure boot, OTA update verification, and network segmentation." },
    ],
  },
  {
    slug: "blockchain-development",
    title: "Blockchain Development",
    shortTitle: "Blockchain",
    description:
      "Secure, transparent blockchain solutions for smart contracts, dApps, and decentralized systems.",
    longDescription:
      "We develop blockchain solutions that bring transparency, security, and efficiency to your business. From smart contracts and DeFi platforms to supply chain traceability and NFT marketplaces — our blockchain engineers build decentralized applications that you can trust.",
    image: "/images/service-blockchain.png",
    icon: "Link",
    gradient: "from-indigo-500 to-violet-500",
    features: [
      "Smart Contract Development (Solidity)",
      "Decentralized Applications (dApps)",
      "DeFi Platform Development",
      "NFT Marketplace & Tokenization",
      "Supply Chain Blockchain Solutions",
      "Blockchain-as-a-Service (BaaS)",
      "Wallet Integration & Development",
      "Private & Consortium Blockchains",
    ],
    tech: ["Solidity", "Ethereum", "Polygon", "Hyperledger", "Web3.js", "Hardhat", "IPFS", "Rust"],
    benefits: [
      { title: "Immutable Records", description: "Tamper-proof transaction records for complete transparency." },
      { title: "Decentralized Trust", description: "Eliminate intermediaries and reduce transaction costs." },
      { title: "Smart Automation", description: "Self-executing contracts that trigger automatically when conditions are met." },
      { title: "Interoperability", description: "Cross-chain solutions that work across multiple blockchain networks." },
    ],
    process: [
      { step: "Use Case Validation", description: "Determine if blockchain is the right solution for your problem." },
      { step: "Architecture Design", description: "Choose blockchain platform, consensus mechanism, and token model." },
      { step: "Smart Contract Development", description: "Write, test, and audit smart contracts for security." },
      { step: "Frontend & Integration", description: "Build dApp interface and integrate with wallets and APIs." },
      { step: "Deployment & Audit", description: "Mainnet deployment with third-party security audit." },
    ],
    faqs: [
      { question: "Which blockchain platforms do you work with?", answer: "Ethereum, Polygon, Hyperledger Fabric, Solana, and private chains. We recommend based on your use case." },
      { question: "Do you audit smart contracts?", answer: "Yes, we perform security audits and also work with third-party auditors for additional assurance." },
      { question: "Is blockchain suitable for my business?", answer: "We start with a feasibility assessment. Blockchain is ideal when you need transparency, immutability, and decentralized trust." },
    ],
  },
  {
    slug: "chatbot-development",
    title: "Chatbot Development",
    shortTitle: "Chatbot & AI Assistants",
    description:
      "AI-powered chatbots that enhance customer engagement, automate support, and drive conversions.",
    longDescription:
      "We build intelligent chatbots and virtual assistants powered by NLP and large language models. From customer support automation and lead qualification to internal knowledge bots and voice assistants — our conversational AI solutions deliver 24/7 engagement with human-like interactions.",
    image: "/images/service-chatbot.png",
    icon: "MessageSquare",
    gradient: "from-emerald-500 to-teal-500",
    features: [
      "AI-Powered Customer Support Bots",
      "Lead Qualification & Sales Bots",
      "Internal Knowledge Base Assistants",
      "Voice Assistants (Alexa, Google)",
      "WhatsApp & Telegram Bot Integration",
      "Multi-Language Support",
      "Sentiment Analysis & Intent Detection",
      "Human Handoff & Escalation",
    ],
    tech: ["OpenAI GPT", "Dialogflow", "Rasa", "LangChain", "WhatsApp API", "Twilio", "FastAPI", "Python"],
    benefits: [
      { title: "24/7 Availability", description: "Always-on customer support without increasing headcount." },
      { title: "80% Query Resolution", description: "Automate resolution of common queries, freeing human agents for complex issues." },
      { title: "Multi-Channel", description: "Deploy on website, WhatsApp, Telegram, Slack, and voice platforms." },
      { title: "Continuous Learning", description: "Bots that improve over time by learning from every interaction." },
    ],
    process: [
      { step: "Conversation Design", description: "Map user intents, flows, and fallback strategies." },
      { step: "NLP & AI Training", description: "Train intent classifiers, entity extractors, and response generators." },
      { step: "Integration", description: "Connect to CRM, help desk, knowledge base, and messaging platforms." },
      { step: "Testing & Tuning", description: "Test with real conversations and fine-tune accuracy." },
      { step: "Launch & Analytics", description: "Deploy with conversation analytics and continuous improvement." },
    ],
    faqs: [
      { question: "Can the chatbot understand multiple languages?", answer: "Yes, we build multi-language bots with automatic language detection and translation." },
      { question: "How do you handle complex queries?", answer: "We implement smart escalation to human agents with full conversation context preserved." },
      { question: "Can it integrate with our CRM?", answer: "Yes, we integrate with Salesforce, HubSpot, Zendesk, Freshdesk, and custom CRMs." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
