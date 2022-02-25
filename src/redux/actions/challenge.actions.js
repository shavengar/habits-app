export const ADD_HABIT = "Add Habit";
export const REMOVE_HABIT = "Remove Habit";
export const COMPLETE_HABIT = "Complete Habit";
export const ADD_COMPLETED_DAY = "Add Completed Day";
export const REMOVE_COMPLETED_DAY = "Remove Completed Day";

export const addHabit = (startDate, endDate, title, id, completedDays) => {
    return {
        type: ADD_HABIT,
        startDate,
        endDate,
        title,
        id,
        completedDays,
    };
};
export const removeHabit = (id) => {
    return { type: REMOVE_HABIT, id };
};
export const completeHabit = (id) => {
    return { type: COMPLETE_HABIT, id };
};
export const addCompletedDay = (date, image, habitID) => {
    return { type: ADD_COMPLETED_DAY, date, image, habitID };
};
export const removeCompletedDay = (date, habitID) => {
    return { type: REMOVE_COMPLETED_DAY, date, habitID };
};
