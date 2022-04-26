export const ADD_PROJECT = "Add Project";
export const REMOVE_PROJECT = "Remove Project";
export const ADD_COMPLETED = "Add Completed";
export const SET_PROJECTS = "Set Projects";
export const SET_COMPLETE = "Set Complete";

export const addProject = (project) => {
  return {
    type: ADD_PROJECT,
    project: project,
  };
};
export const removeProject = (id) => {
  return { type: REMOVE_PROJECT, id };
};
export const addCompleted = (project) => {
  return { type: ADD_COMPLETED, project };
};
export const setProjects = (projects) => {
  return { type: SET_PROJECTS, projects };
};
export const setComplete = (completed) => {
  return { type: SET_COMPLETE, completed };
};
