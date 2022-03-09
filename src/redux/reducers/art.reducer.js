import { ADD_ART, REMOVE_ART, CLEAR_ART } from "../actions";

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
        default:
            return state;
    }
};

export default artReducer;
