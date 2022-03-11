export const ADD_PROJECT = "Add Project";
export const REMOVE_PROJECT = "Remove Project";
export const COMPLETE_PROJECT = "Complete Project";
export const SET_PROJECTS = "Set Projects";

export const addProject = (project) => {
    return {
        type: ADD_PROJECT,
        project: project,
    };
};
export const removeProject = (id) => {
    return { type: REMOVE_PROJECT, id };
};
export const completeProject = (id) => {
    return { type: COMPLETE_PROJECT, id };
};
export const setProjects = (projects) => {
    return { type: SET_PROJECTS, projects };
};
