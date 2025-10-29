import { Question } from '../types';

export const questions: Question[] = [
  // Test I - Fill in the Blank
  {
    id: 1,
    question: "It is the process that involves connecting various computing systems and software applications—either physically or functionally—to operate together as a unified system.",
    options: [],
    answer: "System Integration",
    explanation: "System Integration connects various computing systems to work as a unified system.",
    category: "System Integration",
    type: "fill-blank"
  },
  {
    id: 2,
    question: "It is the conceptual model that defines the structure, behavior, and more of a system. It provides a blueprint for the system and project development.",
    options: [],
    answer: "System Architecture",
    explanation: "System Architecture is the conceptual model that defines system structure and behavior.",
    category: "System Architecture",
    type: "fill-blank"
  },
  {
    id: 3,
    question: "It is a strategic framework that enables the tracking of connections and data flows between diverse systems and applications within an organization.",
    options: [],
    answer: "Enterprise Architecture",
    explanation: "Enterprise Architecture provides strategic framework for tracking system connections and data flows.",
    category: "Enterprise Architecture",
    type: "fill-blank"
  },
  {
    id: 4,
    question: "It is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously.",
    options: [],
    answer: "DevOps",
    explanation: "DevOps combines development and operations to shorten development lifecycle.",
    category: "DevOps",
    type: "fill-blank"
  },
  {
    id: 5,
    question: "It is a DevOps Implementation Methodology that defines objectives, scope, and requirements.",
    options: ["Waterfall", "Agile", "Scrum", "Continuous Integration"],
    answer: "Waterfall",
    explanation: "Waterfall methodology defines clear objectives, scope, and requirements upfront.",
    category: "DevOps",
    type: "fill-blank"
  },
  {
    id: 6,
    question: "It is a DevOps Implementation Methodology that implements automated testing at various levels (unit, integration, system).",
    options: ["Continuous Testing", "Continuous Integration", "Continuous Deployment", "Continuous Monitoring"],
    answer: "Continuous Testing",
    explanation: "Continuous Testing implements automated testing at multiple levels.",
    category: "DevOps",
    type: "fill-blank"
  },
  {
    id: 7,
    question: "It is a DevOps Implementation Methodology that automates deployment processes using CD tools and implements blue-green or canary deployments to minimize risks.",
    options: ["Continuous Deployment", "Continuous Integration", "Continuous Testing", "Continuous Monitoring"],
    answer: "Continuous Deployment",
    explanation: "Continuous Deployment automates deployment processes and uses strategies to minimize risks.",
    category: "DevOps",
    type: "fill-blank"
  },
  {
    id: 8,
    question: "The application of knowledge, skills, tools, and techniques to project activities to meet project requirements.",
    options: ["Project Management", "Agile", "Scrum", "DevOps"],
    answer: "Project Management",
    explanation: "Project Management applies knowledge, skills, and tools to meet project requirements.",
    category: "Project Management",
    type: "fill-blank"
  },
  {
    id: 9,
    question: "It is an approach that allows feedback for unfinished work to improve and modify that work.",
    options: ["Agile", "Waterfall", "DevOps", "Traditional"],
    answer: "Agile",
    explanation: "Agile allows continuous feedback to improve and modify work iteratively.",
    category: "Agile & Scrum",
    type: "fill-blank"
  },
  {
    id: 10,
    question: "It is an approach that is both iterative and incremental to refine work items and deliver frequently.",
    options: ["Scrum", "Waterfall", "DevOps", "Traditional"],
    answer: "Scrum",
    explanation: "Scrum is iterative and incremental, refining work items and delivering frequently.",
    category: "Agile & Scrum",
    type: "fill-blank"
  },
  {
    id: 11,
    question: "It is the ability to create and respond to change. It is a way of dealing with, and ultimately succeeding in, an uncertain and turbulent environment.",
    options: ["Agility", "Flexibility", "Adaptability", "Responsiveness"],
    answer: "Agility",
    explanation: "Agility is the ability to create and respond to change in uncertain environments.",
    category: "Agile & Scrum",
    type: "fill-blank"
  },
  {
    id: 12,
    question: "It is a self-organizing, cross-functional team of people.",
    options: ["Scrum Team", "Development Team", "Project Team", "Agile Team"],
    answer: "Scrum Team",
    explanation: "Scrum Team is self-organizing and cross-functional.",
    category: "Agile & Scrum",
    type: "fill-blank"
  },
  {
    id: 13,
    question: "A framework within which people can address complex adaptive problems while productively and creatively delivering products of the highest possible value.",
    options: ["Scrum Framework", "Agile Framework", "DevOps Framework", "Project Framework"],
    answer: "Scrum Framework",
    explanation: "Scrum Framework addresses complex adaptive problems while delivering high-value products.",
    category: "Agile & Scrum",
    type: "fill-blank"
  },
  {
    id: 14,
    question: "He/She ensures that everyone understands and embraces the Scrum values, principles, and practices and facilitates an Agile development team.",
    options: ["Scrum Master", "Product Owner", "Team Lead", "Project Manager"],
    answer: "Scrum Master",
    explanation: "Scrum Master ensures understanding of Scrum values and facilitates the team.",
    category: "Agile & Scrum",
    type: "fill-blank"
  },
  {
    id: 15,
    question: "It's a single source of requirements for everything needed in the product.",
    options: ["Product Backlog", "Sprint Backlog", "User Stories", "Requirements Document"],
    answer: "Product Backlog",
    explanation: "Product Backlog is the single source of requirements for the product.",
    category: "Agile & Scrum",
    type: "fill-blank"
  },
  {
    id: 16,
    question: "It records the description of a software feature from an end-user perspective.",
    options: ["User Story", "Use Case", "Requirement", "Feature Request"],
    answer: "User Story",
    explanation: "User Story describes software features from end-user perspective.",
    category: "Agile & Scrum",
    type: "fill-blank"
  },
  {
    id: 17,
    question: "Scrum is an iterative approach to software development and each of these iterations is called ______.",
    options: ["Sprint", "Iteration", "Cycle", "Phase"],
    answer: "Sprint",
    explanation: "Each iteration in Scrum is called a Sprint.",
    category: "Agile & Scrum",
    type: "fill-blank"
  },
  {
    id: 18,
    question: "4 values of Agile define it as while there is value in the items on the right, we value the items on the left more. The value on the left from this value in the right 'Comprehensive documentation' is ______.",
    options: ["Working Software", "Individuals and interactions", "Customer collaboration", "Responding to change"],
    answer: "Working Software",
    explanation: "Agile values Working Software over Comprehensive documentation.",
    category: "Agile & Scrum",
    type: "fill-blank"
  },
  {
    id: 19,
    question: "DevOps infinity loop that monitors the software in production, manages infrastructure, and addresses any issues that arise.",
    options: ["Continuous Monitoring", "Continuous Integration", "Continuous Deployment", "Continuous Testing"],
    answer: "Continuous Monitoring",
    explanation: "Continuous Monitoring tracks software in production and manages infrastructure.",
    category: "DevOps",
    type: "fill-blank"
  },
  {
    id: 20,
    question: "It serves as the backbone of any complex system, guiding its design, implementation, and operation.",
    options: ["System Architecture", "System Integration", "Enterprise Architecture", "System Design"],
    answer: "System Architecture",
    explanation: "System Architecture serves as the backbone guiding system design and implementation.",
    category: "System Architecture",
    type: "fill-blank"
  },
  {
    id: 21,
    question: "It defines how different components of a system communicate with each other.",
    options: ["Interface", "API", "Protocol", "Connection"],
    answer: "Interface",
    explanation: "Interface defines how system components communicate with each other.",
    category: "System Architecture",
    type: "fill-blank"
  },
  {
    id: 22,
    question: "What does API mean?",
    options: ["Application Programming Interface", "Advanced Programming Integration", "Automated Process Integration", "Application Process Interface"],
    answer: "Application Programming Interface",
    explanation: "API stands for Application Programming Interface.",
    category: "System Integration",
    type: "multiple-choice"
  },
  {
    id: 23,
    question: "It is a type of system architecture that allows for centralized control and efficient resource allocation, often used in web applications where the internet browser is the client.",
    options: ["Client-Server Architecture", "Peer-to-Peer Architecture", "Distributed Architecture", "Monolithic Architecture"],
    answer: "Client-Server Architecture",
    explanation: "Client-Server Architecture provides centralized control with browsers as clients.",
    category: "System Architecture",
    type: "fill-blank"
  },
  {
    id: 24,
    question: "A strategic discipline that defines and documents the structure and operation of an organization through its processes, information flows, IT systems, and technologies.",
    options: ["Enterprise Architecture", "System Architecture", "Business Architecture", "IT Architecture"],
    answer: "Enterprise Architecture",
    explanation: "Enterprise Architecture defines organizational structure through processes and IT systems.",
    category: "Enterprise Architecture",
    type: "fill-blank"
  },
  // Test II - Multiple Choice
  {
    id: 25,
    question: "It involves regularly merging code changes into a central repository, followed by automated builds and tests.",
    options: ["Continuous Integration", "Continuous Deployment", "Continuous Testing", "Continuous Monitoring"],
    answer: "Continuous Integration",
    explanation: "Continuous Integration merges code changes regularly with automated builds and tests.",
    category: "DevOps",
    type: "multiple-choice"
  },
  {
    id: 26,
    question: "It extends CI by automatically deploying code changes to a staging or production environment after passing tests.",
    options: ["Continuous Integration", "Continuous Testing", "Continuous Development", "Continuous Monitoring"],
    answer: "Continuous Development",
    explanation: "Continuous Development extends CI by automatically deploying after tests pass.",
    category: "DevOps",
    type: "multiple-choice"
  },
  {
    id: 27,
    question: "Listed below are responsibilities of a Product Owner, except one. Which is NOT typically their responsibility?",
    options: ["Define product vision", "Participate in Planning Meetings", "Manage product backlog", "Prioritize features"],
    answer: "Participate in Planning Meetings",
    explanation: "While Product Owners may attend planning meetings, participating is not their primary responsibility.",
    category: "Agile & Scrum",
    type: "multiple-choice"
  },
  {
    id: 28,
    question: "One of the Development Team statements listed below is incorrect. Which one is incorrect?",
    options: ["Self-organizing team", "Cross-functional skills", "Only development team that decides what they should pick up on a given day to achieve that goal", "Delivers working software"],
    answer: "Only development team that decides what they should pick up on a given day to achieve that goal",
    explanation: "The Development Team collaborates with Product Owner and Scrum Master in planning decisions.",
    category: "Agile & Scrum",
    type: "multiple-choice"
  },
  {
    id: 29,
    question: "Below are the roles that typically attend Sprint Planning, except one.",
    options: ["Product Owner", "Stakeholder", "Scrum Master", "Development Team"],
    answer: "Stakeholder",
    explanation: "Stakeholders typically don't attend Sprint Planning meetings directly.",
    category: "Agile & Scrum",
    type: "multiple-choice"
  },
  {
    id: 30,
    question: "Which DevOps phase involves defining requirements, goals, and roadmaps for new features or improvements?",
    options: ["Plan", "Code", "Build", "Test"],
    answer: "Plan",
    explanation: "The Plan phase involves defining requirements, goals, and roadmaps.",
    category: "DevOps",
    type: "multiple-choice"
  },
  {
    id: 31,
    question: "What phase of the DevOps lifecycle involves writing code, creating new features, or building the solution based on the plan?",
    options: ["Plan", "Build", "Test", "Deploy"],
    answer: "Build",
    explanation: "The Build phase involves writing code and creating features based on the plan.",
    category: "DevOps",
    type: "multiple-choice"
  },
  {
    id: 32,
    question: "Which DevOps practice helps ensure that code changes are automatically tested and deployed?",
    options: ["Continuous Integration", "Continuous Delivery", "Continuous Testing", "Continuous Monitoring"],
    answer: "Continuous Delivery",
    explanation: "Continuous Delivery ensures code changes are automatically tested and deployed.",
    category: "DevOps",
    type: "multiple-choice"
  },
  {
    id: 33,
    question: "What is the primary goal of DevOps?",
    options: ["Faster development", "Better testing", "Improve collaboration between development and operations", "Automated deployment"],
    answer: "Improve collaboration between development and operations",
    explanation: "DevOps primarily aims to improve collaboration between development and operations teams.",
    category: "DevOps",
    type: "multiple-choice"
  },
  {
    id: 34,
    question: "It is a framework within which people can address complex adaptive problems while productively and creatively delivering products of the highest possible value.",
    options: ["Agile", "Scrum", "DevOps", "Waterfall"],
    answer: "Scrum",
    explanation: "Scrum framework addresses complex adaptive problems while delivering high-value products.",
    category: "Agile & Scrum",
    type: "multiple-choice"
  },
  // Test III - True or False
  {
    id: 35,
    question: "Scrum Masters are responsible for fostering a healthy team environment.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Scrum Masters are indeed responsible for fostering a healthy team environment.",
    category: "Agile & Scrum",
    type: "true-false"
  },
  {
    id: 36,
    question: "Scrum Masters are not responsible for fostering a supportive and productive team environment, nor do they need to listen to team members' concerns or take corrective steps.",
    options: ["True", "False"],
    answer: "False",
    explanation: "This is false. Scrum Masters ARE responsible for fostering supportive environments and addressing concerns.",
    category: "Agile & Scrum",
    type: "true-false"
  },
  {
    id: 37,
    question: "A sprint retrospection is the first event of the Sprint; we conduct it after the sprint review.",
    options: ["True", "False"],
    answer: "False",
    explanation: "Sprint Retrospective is the last event of the Sprint, not the first.",
    category: "Agile & Scrum",
    type: "true-false"
  },
  {
    id: 38,
    question: "Only the Product Owner has the authority to cancel the Sprint.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Only the Product Owner has the authority to cancel a Sprint.",
    category: "Agile & Scrum",
    type: "true-false"
  },
  {
    id: 39,
    question: "The Scrum Team members have courage to do the right thing and work on tough problems.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Courage is one of the five Scrum values.",
    category: "Agile & Scrum",
    type: "true-false"
  },
  {
    id: 40,
    question: "The Scrum Master removes the impediments to the Development Team's progress and coaches the Development Team in self-organization and cross-functionality.",
    options: ["True", "False"],
    answer: "True",
    explanation: "This is a key responsibility of the Scrum Master.",
    category: "Agile & Scrum",
    type: "true-false"
  },
  {
    id: 41,
    question: "The main agenda of Sprint planning is to define the scope of delivery and how to accomplish that work.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Sprint Planning defines what can be delivered and how the work will be achieved.",
    category: "Agile & Scrum",
    type: "true-false"
  },
  {
    id: 42,
    question: "Scrum team works to create a done, usable, and potentially releasable product increment.",
    options: ["True", "False"],
    answer: "True",
    explanation: "The goal of each Sprint is to create a potentially releasable product increment.",
    category: "Agile & Scrum",
    type: "true-false"
  },
  {
    id: 43,
    question: "The Scrum Master is responsible for managing the exchange of information between team members.",
    options: ["True", "False"],
    answer: "False",
    explanation: "The Scrum Master facilitates but doesn't manage information exchange - the team self-organizes.",
    category: "Agile & Scrum",
    type: "true-false"
  },
  {
    id: 44,
    question: "The Scrum Master facilitates Scrum events as requested or needed.",
    options: ["True", "False"],
    answer: "True",
    explanation: "The Scrum Master facilitates Scrum events when requested or needed.",
    category: "Agile & Scrum",
    type: "true-false"
  },
  // Test IV - Essay Questions
  {
    id: 45,
    question: "Discuss how the Agile mindset differs from traditional project management approaches in handling uncertainty and turbulence.",
    options: [],
    answer: "The Agile mindset focuses on flexibility, collaboration, and continuous improvement. It welcomes change and adapts quickly to new requirements using iterative development and feedback. Traditional project management follows a fixed plan, making it harder to adjust during uncertainty. Agile's adaptive nature and sprint-based reviews make it ideal for turbulent environments.",
    explanation: "Agile embraces change through iterative cycles, customer collaboration, and adaptive planning, while traditional approaches rely on fixed plans and documentation.",
    category: "Agile & Scrum",
    type: "essay"
  },
  {
    id: 46,
    question: "Critically evaluate how the Scrum framework enables teams to navigate complexity and uncertainty in project management.",
    options: [],
    answer: "Scrum helps manage complexity through its structured roles (Product Owner, Scrum Master, Development Team), time-boxed sprints, and transparency. It encourages collaboration and continuous feedback, allowing teams to adapt and prioritize efficiently. This iterative process reduces risk, increases visibility, and promotes steady delivery of valuable results.",
    explanation: "Scrum provides structure through roles, events, and artifacts while maintaining flexibility through iterative development and continuous feedback loops.",
    category: "Agile & Scrum",
    type: "essay"
  },
  {
    id: 47,
    question: "Discuss the role of Enterprise Architecture.",
    options: [],
    answer: "Enterprise Architecture (EA) serves as a blueprint that aligns an organization's IT infrastructure and processes with business goals. It defines systems, standards, and frameworks to ensure consistency, efficiency, and strategic alignment. EA supports innovation, digital transformation, and efficient resource management by integrating technology with business strategy.",
    explanation: "Enterprise Architecture provides strategic alignment between business objectives and IT capabilities, ensuring organizational coherence and efficiency.",
    category: "Enterprise Architecture",
    type: "essay"
  }
];

export const categories = [
  "Agile & Scrum",
  "DevOps",
  "System Integration", 
  "Enterprise Architecture",
  "Project Management"
];