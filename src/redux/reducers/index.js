import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import challengeReducer from "./challenge.reducer";
import artReducer from "./art.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    challenge: challengeReducer,
    art: artReducer,
});

export default rootReducer;
