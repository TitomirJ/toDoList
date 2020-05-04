import * as actionTypes from './types';
import uuid from "uuid/v4";
const toDoList = [];

export default function todoList(state = toDoList, action){
    switch (action.type) {

        case actionTypes.ADD_TODO: {
            return [
                ...state,
                { name: action.payload, isChecked: false, id: uuid() }
            ];
        }

        case actionTypes.REMOVE_TODO: {
            return state.filter(toDoItem => toDoItem.id !== action.payload);
        }

        case actionTypes.TOGGLE_CHECK_TODO: {
            return state.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isChecked: !item.isChecked
                    }
                }
                return  item;
            })
        }

        case actionTypes.EDIT_TODO: {
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        name: action.name
                    };
                }
                return item;
            })
        }
        default: return state;
    }
}
