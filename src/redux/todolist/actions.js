import * as actionTypes from './types';

export const addToDo = (name) => ({
    type: actionTypes.ADD_TODO,
    payload: name
});

export const deleteToDo = (id) => ({
    type: actionTypes.REMOVE_TODO,
    payload: id
});

export const toggleCheckToDo = (id) => ({
    type: actionTypes.TOGGLE_CHECK_TODO,
    payload: id
});

export const editToDo = (id, newText) => ({
    type: actionTypes.EDIT_TODO,
    id: id,
    name: newText
});









