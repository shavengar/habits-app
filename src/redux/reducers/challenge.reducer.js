import {
    ADD_HABIT,
    REMOVE_HABIT,
    ADD_COMPLETED_DAY,
    REMOVE_COMPLETED_DAY,
    COMPLETE_HABIT,
} from "../actions";

const initialState = {
    habit: {
        startDate: null,
        endDate: null,
        title: "",
        id: null,
        completedDays: [],
    },
    completedDay: {
        date: null,
        image: {
            url: null,
        },
        habitID: null,
    },
    habits: [],
    completedDays: [],
    completedHabits: [],
};

const challengeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HABIT:
            return { ...state, habits: [...state.habits, action.habit] };
        case REMOVE_HABIT:
            return {
                ...state,
                habits: state.habits.filter((habit) => habit.id !== action.id),
            };
        case COMPLETE_HABIT:
            return {
                ...state,
                completedHabits: [
                    ...state.completedHabits,
                    state.habits.filter((habit) => habit.id === action.id),
                ],
            };
        case ADD_COMPLETED_DAY:
            return {
                ...state,
                completedDays: [...state, action.completedDay],
            };
        case REMOVE_COMPLETED_DAY:
            return {
                ...state,
                completedDays: state.completedDays.filter(
                    (completedDay) => completedDay.habitID !== action.habitID
                ),
            };
        default:
            return state;
    }
};

export default challengeReducer;
