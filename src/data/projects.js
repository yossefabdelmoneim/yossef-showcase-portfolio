export const projects = [
    {
        id: 1,
        title: "GIS Building Change Detection",
        description:
            "A backend system that downloads Sentinel-2 satellite imagery via the UP42 platform, pre-processes raster bands, and detects built-up area changes between two acquisition dates." +
            "The system generates a change detection raster and a vector shapefile of the detected changes, which are then stored in a PostGIS database for further analysis and visualization.",
        technologies: [
            "FastAPI",
            "PostGIS",
            "UP42",
            "Docker",
            "Kafka",
            "GeoServer",
            "Git",
        ],
        category: "Backend",
        liveUrl: null,
        githubUrl: "https://github.com/yossefabdelmoneim/gis_project",
        featured: true,
    },

    {
        id:2,
        title: "Notification System",
        description:
            "A notification system that allows users to subscribe to specific topics and receive notifications via email or SMS when new events occur. The system is built using a microservices architecture, with separate services for managing subscriptions, sending notifications, and handling user preferences.",
        technologies: [
            "dotnet Core",
            "RabbitMQ",
            "PostgreSQL",
            "Swagger",
            "Git",
            "Docker",
            "Azure DevOps",
        ],
        category: "Backend",
        liveUrl: "http://45.240.58.53:8090/",
        githubUrl: "https://github.com/yossefabdelmoneim/Notification-System",
        featured: true,
    },

    {
        id: 3,
        title: "KnowMate",
        description:
            "An AI-powered document intelligence platform that allows users to upload documents, retrieve relevant information through semantic search, and interact with their knowledge base using RAG-powered conversations.",
        technologies: [
            "React",
            "FastAPI",
            "Python",
            "LangChain",
            "Ollama",
            "ChromaDB",
            "PostgreSQL",
            "Hugging Face",
            "Git"
        ],
        category: "AI Engineering",
        liveUrl: "https://knowmate-three.vercel.app",
        githubUrl: "https://github.com/yossefabdelmoneim/KnowMate",
        featured: true,
    },

    {
        id: 4,
        title: "Maintenance Scheduling System",
        description:
            "Azka is a field-maintenance scheduling system that manages the full lifecycle of maintenance operations from registering customer assets and creating work orders, to assigning the right engineer at the right time with automatic conflict detection and capacity enforcement.",
        technologies: [
            "Angular",
            "dotnet Core",
            "PostgreSQL",
            "Swagger",
            "Git",
            "Docker",
        ],
        category: "Full Stack",
        liveUrl: "https://azka-maintenance-yossefabdelmoneims-projects.vercel.app",
        githubUrl: "https://github.com/sefffo/Azka-field-ops-api",
        featured: true,
    },

    {
        id: 5,
        title: "Book Fair Go",
        description:
            "A backend system developed for a Flutter-based application, providing APIs for book or publisher discovery, management, and related platform functionality.",
        technologies: [
            "NestJS",
            "Node.js",
            "PostgreSQL",
            "Prisma",
            "Docker",
            "Git",
        ],
        category: "Backend",
        liveUrl: null,
        githubUrl: null,
        featured: false,
    },

    // {
    //     id: 6,
    //     title: "Project Management System",
    //     description:
    //         "A full-stack project management application with a backend-driven architecture supporting project creation, assignment, and tracking functionality.",
    //     technologies: [
    //         "React",
    //         "Node.js",
    //         "Express",
    //         "PostgreSQL",
    //         "Git",
    //     ],
    //     category: "Full Stack",
    //     liveUrl: null,
    //     githubUrl: "https://github.com/yossefabdelmoneim/TaskManagement/",
    //     featured: true,
    // },

    {
        id: 6,
        title: "Posters",
        subtitle: "Full-Stack E-Commerce Platform",
        description:
            "A full-stack e-commerce application for browsing and purchasing posters, with a backend-driven architecture supporting product and shopping functionality.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Git",
        ],
        category: "Full Stack",
        liveUrl: null,
        githubUrl: "https://github.com/yossefabdelmoneim/Posters",
        featured: true,
    },

    {
        id: 7,
        title: "Bloggy",
        subtitle: "Full-Stack Blogging Platform",
        description:
            "A full-stack blogging platform implementing CRUD functionality for creating, managing, and displaying blog content.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
        ],
        category: "Full Stack",
        liveUrl: null,
        githubUrl: null,
        featured: false,
    },
]