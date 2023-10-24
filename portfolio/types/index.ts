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
    isTestUser: boolean;
    testUser?: TestUser[];
    technologies: Technology[]
    projectImages: ProjectImage[]
}

type HomeProject = Pick<Project, '_id' | 'title' | 'projectImage' | 'slug'>

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

interface WorkExperience extends SanityBody {
    jobTitle: string;
    company: string;
    summary: string;
    technologies: Technology[];
    workPoints: WorkPoint[];
    dateStarted: string;
    dateEnded: string;
}

interface WorkPoint {
    _type: string;
    _key: string;
    point: string;
}

interface TestUser extends SanityBody {
    user: string;
    password: string;
}