import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import challengeReducer from "./challenge.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    challenge: challengeReducer,
});

export default rootReducer;
