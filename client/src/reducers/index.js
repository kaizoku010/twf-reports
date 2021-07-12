import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./error_reducer";
import authReducer from "./auth_reducer";

export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer
});