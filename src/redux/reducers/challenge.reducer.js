import { ADD_PROJECT, REMOVE_PROJECT, COMPLETE_PROJECT } from "../actions";

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
                projects: state.projects.filter(
                    (project) => project.id !== action.id
                ),
            };
        case COMPLETE_PROJECT:
            return {
                ...state,
                completedProjects: [
                    ...state.completedProjects,
                    state.projects.filter(
                        (project) => project.id === action.id
                    ),
                ],
            };
        default:
            return state;
    }
};

export default challengeReducer;
