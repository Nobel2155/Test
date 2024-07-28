import { combineReducers } from "redux";
import { sliceName } from "./sliceName";
import authSlice from "./authSlice";

const rootReducer = combineReducers({
    [sliceName.authSlice]: authSlice,
});

export default rootReducer;
