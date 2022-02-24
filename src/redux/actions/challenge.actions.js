export const ADD_CHALLENGE = "Add Challenge";
export const REMOVE_CHALLENGE = "Remove Challenge";
export const EDIT_TITLE = "Edit title";
export const ADD_START_DATE = "Add Start Date";
export const ADD_END_DATE = "Add End Date";
export const ADD_COMPLETED_DAY = "Add Completed Day";
export const REMOVE_COMPLETED_DAY = "Remove Completed Day";
export const ADD_IMAGES = "Add Images";
export const CREATE_ART = "Create Art";
export const REMOVE_ART = "Remove Art";
export const ADD_PLACEHOLDER = "Add Placeholder",
export const REMOVE_PLACEHOLDER = "Remove Placeholder" 

export const addChallenge = (startDate, endDate, title, id, completedDays) => {
    return {
        type: ADD_CHALLENGE,
        startDate,
        endDate,
        title,
        id,
        completedDays,
    };
};
export const removeChallenge = () => {
    return { type: REMOVE_CHALLENGE };
};
export const editTitle = (title) => {
    return { type: EDIT_TITLE, title };
};
export const addStartDate = (date) => {
    return { type: ADD_START_DATE, date };
};
export const addEndDate = (date) => {
    return { type: ADD_END_DATE, date };
};
export const addCompletedDay = (date, image, completed) => {
    return { type: ADD_COMPLETED_DAY, date, image, completed };
};
export const removeCompletedDay = () => {
    return { type: REMOVE_COMPLETED_DAY };
};
export const createArt = (title, url, id, artist) => {
    return { type: CREATE_ART, title, url, id, artist };
};
export const removeArt = (id) => {
    return { type: REMOVE_ART, id };
};
export const addPlaceholder = (url) => {
    return { type: ADD_PLACEHOLDER, url}
};
export const removePlaceholder = () => {
    return { type: REMOVE_PLACEHOLDER}
};
export const addImages = (art, placeholder) => {
    return { type: ADD_IMAGES, art, placeholder};
};
