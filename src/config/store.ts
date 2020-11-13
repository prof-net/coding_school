import {createStore} from "redux";
import rootReducer from "../shared/reducers";

const store = createStore(rootReducer)

export default store;