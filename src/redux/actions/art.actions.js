export const ADD_ART = "Add Art";
export const REMOVE_ART = "Remove Art";
export const CLEAR_ART = "Clear Art";
export const SET_ART_COLLECTION = "Set Art Collection";

export const addArt = (art) => {
    return { type: ADD_ART, art };
};

export const removeArt = (art_id) => {
    return { type: REMOVE_ART, art_id };
};

export const clearArt = () => {
    return { type: CLEAR_ART };
};

export const setArtCollection = (artCollection) => {
    return { type: SET_ART_COLLECTION, artCollection };
};
