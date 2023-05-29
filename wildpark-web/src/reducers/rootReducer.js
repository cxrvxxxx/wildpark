import { combineReducers } from "redux";
import displayPageReducer from "./diplasyPageReducer";

const rootReducer = combineReducers({
    page: displayPageReducer
});

export default rootReducer;