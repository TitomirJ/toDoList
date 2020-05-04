import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as PlusToDo } from './assets/svg/plus.svg';
import { addToDo, editToDo, deleteToDo, toggleCheckToDo } from './redux/todolist/actions';
import TodoItem from "./components/Todoitem";
import './App.css';

class Todo extends React.Component {
    state = {
        text: '',
    };

    inputChange = (event) => {
        this.setState({text: event.target.value});
    };

    inputSubmit = (event) => {
        event.preventDefault();
        const { text } = this.state;
        this.props.addToDo(text);
        if(this.state.text !== ''){
            this.setState({
                text: '',
            })
        }
    };

    deleteState = (id) => {
        this.props.deleteToDo(id)
    };


    toggleState = (id) => {
        this.props.toggleCheckToDo(id)
    };


    updateName = (id, name) => {
        this.props.editToDo(id, name)
    };

  render() {
    const { text } = this.state;
    const { toDoList } = this.props;
    return (
       <div className='toDo-wrapper'>
           <div className='toDo-body'>
               <form onSubmit={this.inputSubmit}>
                   <input
                       type="text"
                       value={text}
                       onChange={this.inputChange}
                       placeholder='start to write your task'
                   />
                   <button className='btn-Submit'><PlusToDo/></button>
               </form>
               <ul>
                   {toDoList.map((item, index) =>
                       <TodoItem
                           updateName={this.updateName}
                           toggleState={this.toggleState}
                           deleteState={this.deleteState}
                           data={item}
                           key={index}
                       />
                   )}
               </ul>
           </div>
       </div>
    )
  }
}

const mapStateToProps = (state) => ({
    toDoList: state.todoList,
});

const mapDispatchToProps = (dispatch) => ({
    addToDo: (toDoText) => dispatch(addToDo(toDoText)),
    deleteToDo: (id) => dispatch(deleteToDo(id)),
    toggleCheckToDo: (id) => dispatch(toggleCheckToDo(id)),
    editToDo: (id, newText) => dispatch(editToDo(id, newText))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todo);
