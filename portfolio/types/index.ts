interface SanityBody {
    _id: string;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
}

interface Project extends SanityBody {
    _type: string;
    title: string;
    projectImage: string;
    slug: string;
    summary: string;
    webLink: string;
    repositoryLink: string;
    technologies: Technology[]
    projectImages: ProjectImage[]
}

type HomeProjects = Pick<Project, '_id' | 'title' | 'projectImage' | 'slug'>

interface Technology extends SanityBody {
    _type: string;
    title: string;
    url: string;
}

interface ProjectImage {
    _type: string;
    _key: string;
    url: string;
}