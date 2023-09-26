//creation store et import du (reducer(rayon) courses dans le store
import { legacy_createStore as createStore, combineReducers } from "redux";
import reducerCourses from "./reducers/reducerCourses";

//creation de la cle courses
const rootReducer = combineReducers({
    courses: reducerCourses 
})
//argument rootReducer permet de pouvoir appeler le combine donc plusieurs reducer
const store = createStore(rootReducer);

export default store;