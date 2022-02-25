import {
    ADD_CHALLENGE, 
    REMOVE_CHALLENGE, 
    ADD_COMPLETED_DAY, 
    REMOVE_COMPLETED_DAY
} from "../actions"

const initialState = {
    challenge = {
        startDate: null, 
        endDate: null, 
        title: "",
        id: null,
        completedDays: []
    },
    completedDay = {
        date: null,
        image:{
            url: null
        },
        challengeID: null,
    },
    challenges = [],
    completedDays = [],
    completedChallenges = [],
}

const challengeReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CHALLENGE:
            return {...state, challenges: [...state.challenges, action.challenge]}
        case REMOVE_CHALLENGE:
            return {
                ...state, 
                challenges: state.challenges.filter((challenge) => challenge.id !== action.id),
            };
        case COMPLETE_CHALLENGE:
            return {
                ...state,
                completedChallenges: [...state.completedChallenges, state.challenges.filter((challenge) => challenge.id === action.id)],
            };
        case ADD_COMPLETED_DAY:
            return {
                ...state,
                completedDays: [...state, action.completedDay]
            }
        case REMOVE_COMPLETED_DAY:
            return {
                ...state,
                completedDays: state.completedDays.filter((completedDay) => completedDay.challengeID !== action.challengeID)
            }
        default:
            return state;
    }
}

export default challengeReducer;