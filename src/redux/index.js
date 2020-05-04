import {combineReducers, createStore} from "redux";
import todoList from './todolist/reducer'

const reducers = combineReducers({
    todoList
});

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
