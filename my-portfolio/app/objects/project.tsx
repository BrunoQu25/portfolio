import { Technology } from "./technologies";

export class Project {
    title: string;
    briefDescription: string;
    description: string;
    imageUrl: string[];
    deploymentLink: string | null;
    repositoryLink: string;
    technologies: Technology[];

    constructor(
        title: string,
        briefDescription: string,
        description: string,
        imageUrl: string[],
        deploymentLink: string | null,
        repositoryLink: string,
        technologies: Technology[]
    ) {
        this.title = title;
        this.briefDescription = briefDescription;
        this.description = description;
        this.imageUrl = imageUrl;
        this.deploymentLink = deploymentLink;
        this.repositoryLink = repositoryLink;
        this.technologies = technologies;
    }
}