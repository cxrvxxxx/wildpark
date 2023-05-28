import { combineReducers } from "redux";
import displayPageReducer from "./diplasyPageReducer";

const rootReducer = combineReducers({
    currentPage: displayPageReducer
});

export default rootReducer;