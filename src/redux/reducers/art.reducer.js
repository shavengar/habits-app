import { ADD_ART, REMOVE_ART, CLEAR_ART, SET_ART_COLLECTION } from "../actions";

const initialState = {
    artCollection: [],
};

const artReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ART:
            return {
                ...state,
                artCollection: [...state.artCollection, action.art],
            };
        case REMOVE_ART:
            return {
                ...state,
                artCollection: state.artCollection.filter(
                    (art) => art.art_id !== action.art_id
                ),
            };
        case CLEAR_ART:
            return {
                ...state,
                artCollection: [],
            };
        case SET_ART_COLLECTION:
            return { ...state, artCollection: action.artCollection };
        default:
            return state;
    }
};

export default artReducer;
