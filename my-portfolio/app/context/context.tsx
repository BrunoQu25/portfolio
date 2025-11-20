import { Project } from "../objects/project";
import { Technology } from "../objects/technologies";

const nodejs = new Technology(
    "Node.js",
    "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    "/technologies/node-js.png"
);
const expressjs = new Technology(
    "Express.js",
    "Fast, unopinionated, minimalist web framework for Node.js.",
    "/technologies/express-js.png"
);
const python = new Technology(
    "Python",
    "High-level, interpreted programming language known for its readability.",
    "/technologies/python.png"
);
const aspnetcore = new Technology(
    "ASP.NET Core",
    "Cross-platform, high-performance framework for building modern, cloud-based web applications.",
    "/technologies/aspnetcore.png"
);
const flask = new Technology(
    "Flask",
    "Lightweight WSGI web application framework in Python.",
    "/technologies/flask.png"
);
const mysql = new Technology(
    "MySQL",
    "Open-source relational database management system.",
    "/technologies/mysql.png"
);
const sqlserver = new Technology(
    "SQL Server",
    "Relational database management system developed by Microsoft.",
    "/technologies/sqlserver.png"
);
const postgresql = new Technology(
    "PostgreSQL",
    "Powerful, open source object-relational database system.",
    "/technologies/postgresql.png"
);
const sqlite = new Technology(
    "SQLite",
    "Self-contained, high-reliability, embedded, full-featured, public-domain SQL database engine.",
    "/technologies/sqlite.png"
);
const mongodb = new Technology(
    "MongoDB",
    "Document-oriented NoSQL database used for high volume data storage.",
    "/technologies/mongo-db.png"
);
const redis = new Technology(
    "Redis",
    "In-memory data structure store, used as a database, cache, and message broker.",
    "/technologies/redis.png"
);
const dynamodb = new Technology(
    "DynamoDB",
    "Fully managed proprietary NoSQL database service that supports key-value and document data structures.",
    "/technologies/dynamodb.png"
);
const pandas_numpy = new Technology(
    "pandas/numpy",
    "Python libraries for data manipulation and analysis.",
    "/technologies/pandas_numpy.png"
);
const apache_spark = new Technology(
    "Apache Spark",
    "Unified analytics engine for large-scale data processing.",
    "/technologies/apache_spark.png"
);
const scikit_learn = new Technology(
    "scikit-learn",
    "Machine learning library for Python.",
    "/technologies/scikit.png"
);
const pytorch = new Technology(
    "PyTorch",
    "Open source machine learning library based on the Torch library.",
    "/technologies/pytorch.png"
);
const tensorflow = new Technology(
    "TensorFlow",
    "End-to-end open source platform for machine learning.",
    "/technologies/tensorflow.png"
);
const aws = new Technology(
    "AWS",
    "Comprehensive and widely adopted cloud platform.",
    "/technologies/aws.png"
);
const ibm_cloud = new Technology(
    "IBM Cloud",
    "Suite of cloud computing services from IBM.",
    "/technologies/ibm_cloud.png"
);
const docker = new Technology(
    "Docker",
    "Platform for developing, shipping, and running applications in containers.",
    "/technologies/docker.png"
);
const azure = new Technology(
    "Azure",
    "Microsoft's cloud computing service for building, testing, deploying, and managing applications and services.",
    "/technologies/azure.png"
);
const github_actions = new Technology(
    "GitHub Actions",
    "CI/CD platform that allows you to automate your build, test, and deployment pipeline.",
    "/technologies/github_actions.png"
);
const react = new Technology(
    "React",
    "JavaScript library for building user interfaces.",
    "/technologies/react.png"
);
const nextjs = new Technology(
    "Next.js",
    "React framework for production.",
    "/technologies/nextjs.png"
);
const tailwind_css = new Technology(
    "Tailwind CSS",
    "Utility-first CSS framework for rapidly building custom designs.",
    "/technologies/tailwind.png"
);
const angular = new Technology(
    "Angular",
    "Platform for building mobile and desktop web applications.",
    "/technologies/angular.png"
);

export const technologies = [
    nodejs,
    expressjs,
    python,
    aspnetcore,
    flask,
    mysql,
    postgresql,
    sqlite,
    mongodb,
    redis,
    dynamodb,
    pandas_numpy,
    apache_spark,
    scikit_learn,
    pytorch,
    tensorflow,
    aws,
    ibm_cloud,
    docker,
    azure,
    github_actions,
    react,
    nextjs,
    tailwind_css,
    angular,
];

export const projects: Project[] = [
    new Project(
        "CI/CD Pipeline Automation",
        "Project focused on agile methodologies and DevOps practices.",
        "This project was done for ORT University as part of my Software Engineer career. It involved creating an automated CI/CD pipeline using GitHub Actions and Docker to streamline the building process for web applications. The pipeline included automated testing and building.",
        ["/projects/CI-CD/pharmago.png"],
        null,
        "https://github.com/IngSoft-ISA2-2024-2/N7A-Corrotti-Quadrelli-Ribarov",
        [github_actions, docker, aspnetcore, angular, sqlserver]
    )
];