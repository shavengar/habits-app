import {
  ADD_PROJECT,
  REMOVE_PROJECT,
  ADD_COMPLETED,
  SET_PROJECTS,
  REMOVE_COMPLETED,
} from "../actions";

const initialState = {
  projects: [],
  completedProjects: [],
};

const challengeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.project],
      };
    case REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== action.id),
      };
    case ADD_COMPLETED:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.project.id
        ),
        completedProjects: [...state.completedProjects, action.project],
      };
    case REMOVE_COMPLETED:
      return {
        ...state,
        completedProjects: state.completedProjects.filter(
          (project) => project.id !== action.id
        ),
      };
    case SET_PROJECTS:
      return { ...state, projects: action.projects };
    default:
      return state;
  }
};

export default challengeReducer;
