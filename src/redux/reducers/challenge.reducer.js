import { ADD_CHALLENGE, REMOVE_CHALLENGE, EDIT_TITLE, ADD_START_DATE, ADD_END_DATE, ADD_COMPLETED_DAY, REMOVE_COMPLETED_DAY, ADD_IMAGES, CREATE_ART, REMOVE_ART  } from "../actions"

const initialState = {
    challenge = {
        startDate: null, 
        endDate: null, 
        id: null, 
        title: "",
        completedDays: []
    },
    completedDay = {
        date: null,
        image:{
            art: {
                url: null,
                title: "",
                artist: "",
                id: ""
            },
            placeholder: {
                url: null
            },
        },
        completed: false,
    },
    challenges = [],
}