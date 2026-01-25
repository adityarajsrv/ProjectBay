import api from "../lib/api"

export const createProject = (data) => {
    return api.post("/projects", data);
}

export const getMyProjects = () => {
    return api.get("/projects");
}

export const getProjectById = (projectId) => {
    return api.get(`/project/${projectId}`);
}