import { combineReducers } from "redux";
import { sliceName } from "./sliceName";

const rootReducer = combineReducers({
    [sliceName.authSlice]: authSlice,
});

export default rootReducer;
