import { createContext, useContext, useState } from "react";

import { IProject } from "../../vite-env";

interface IProjectContext {
    project: IProject | null;
    setProject: React.Dispatch<React.SetStateAction<IProject | null>>
}

interface IProps {
    children: React.ReactNode | React.ReactNode[];
}

const ProjectContext = createContext<IProjectContext>({ project: null, setProject: () => { } });

const ProjectProvider: React.FC<IProps> = ({ children }: IProps) => {
    const [project, setProject] = useState<IProject | null>(null);

    return (
        <ProjectContext.Provider value={{ project, setProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

const getProjectContext = () => {
    let { project } = useContext(ProjectContext);
    if (project === null) throw new Error("Error while getting project data")

    return project
}

export { ProjectContext, ProjectProvider, getProjectContext }