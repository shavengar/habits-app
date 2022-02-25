import { createStore } from "redux";
import rootReducer from "./reducers";

const INITIAL_STATE = {
    user: null,
    challenge: {
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
    },
};

export default createStore(rootReducer, INITIAL_STATE);
