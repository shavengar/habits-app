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
                    (art) => art.id !== action.id
                ),
            };
        case CLEAR_ART:
            return {
                ...state,
                artCollection: [],
            };
    }
};

export default artReducer;
