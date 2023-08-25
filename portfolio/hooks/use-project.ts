import { create } from 'zustand';

interface ProjectStore {
    projects: HomeProject[];
    activeProject?: HomeProject;
    previousProject?: HomeProject;
    nextProject?: HomeProject;
    setActiveProject: (project: HomeProject) => void;
    setProjects: (projects: HomeProject[]) => void;
}

const useProject = create<ProjectStore>((set, get) => ({
    projects: [],
    activeProject: undefined,
    previousProject: undefined,
    nextProject: undefined,
    setActiveProject: (project: HomeProject) => {
        const currentProject = get().projects.findIndex(project => project._id === get().activeProject?._id)
        const nextProject = get().projects[currentProject + 1]
        const previousProject = get().projects[currentProject - 1]

        if (!nextProject) {
            set({ nextProject: get().projects[0] })
        } else {
            set({ nextProject: nextProject })
        }

        if (!previousProject) {
            set({ previousProject: get().projects[get().projects.length - 1] })
        } else {
            set({ previousProject: previousProject })

        }

        set({ activeProject: project })
    },
    setProjects: (projects: HomeProject[]) => set({ projects }),
}));

export default useProject;