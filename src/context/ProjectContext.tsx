import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Project {
    id: string;
    title: string;
    category: string;
    desc: string;
    longDesc?: string;
    image: string;
    link: string;
    features?: string[];
    tech?: string[];
}

interface ProjectContextType {
    projects: Project[];
    addProject: (project: Omit<Project, 'id'>) => void;
    updateProject: (id: string, project: Partial<Project>) => void;
    deleteProject: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const DEFAULT_PROJECTS: Project[] = [
    {
        id: "1",
        title: "WINFLY DROP TAXI",
        category: "Taxi Service & Booking Platform",
        desc: "A premium taxi service platform serving across Tamil Nadu, specializing in outstation and drop taxi services.",
        longDesc: "WINFLY DROP TAXI is a comprehensive transportation solution providing 24/7 taxi services, outstation cabs, and car rentals. The platform features an easy booking experience, real-time availability, and transparent pricing for one-way and round trips across major cities in Tamil Nadu and neighboring states.",
        image: "/winfly-taxi.png",
        link: "https://winflytaxi.com/",
        features: ["24/7 Booking Support", "One-Way Drop Taxi", "Outstation Round Trips", "Airport Transfers", "Transparent Pricing"],
        tech: ["React", "Tailwind CSS", "Premium SEO", "Mobile First Design"],
    }
];

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>(() => {
        const saved = localStorage.getItem('lionyx_projects');
        return saved ? JSON.parse(saved) : DEFAULT_PROJECTS;
    });

    useEffect(() => {
        localStorage.setItem('lionyx_projects', JSON.stringify(projects));
    }, [projects]);

    const addProject = (projectData: Omit<Project, 'id'>) => {
        const newProject = { ...projectData, id: Date.now().toString() };
        setProjects([...projects, newProject]);
    };

    const updateProject = (id: string, projectData: Partial<Project>) => {
        setProjects(projects.map(p => p.id === id ? { ...p, ...projectData } : p));
    };

    const deleteProject = (id: string) => {
        setProjects(projects.filter(p => p.id !== id));
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjects = () => {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error('useProjects must be used within a ProjectProvider');
    }
    return context;
};
