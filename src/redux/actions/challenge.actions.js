export const ADD_CHALLENGE = "Add Challenge";
export const REMOVE_CHALLENGE = "Remove Challenge";
export const COMPLETE_CHALLENGE = "Complete Challenge";
export const ADD_COMPLETED_DAY = "Add Completed Day";
export const REMOVE_COMPLETED_DAY = "Remove Completed Day";

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
export const removeChallenge = (id) => {
    return { type: REMOVE_CHALLENGE, id };
};
export const completeChallenge = (id) => {
    return { type: COMPLETE_CHALLENGE, id };
};
export const addCompletedDay = (date, image, challengeID) => {
    return { type: ADD_COMPLETED_DAY, date, image, challengeID };
};
export const removeCompletedDay = (date, challengeID) => {
    return { type: REMOVE_COMPLETED_DAY, date, challengeID };
};
