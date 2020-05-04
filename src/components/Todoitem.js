import React from 'react';
import './style.scss';
import { ReactComponent as DelToDo } from '../assets/svg/plus.svg';
import { ReactComponent as EditToDo } from '../assets/svg/check.svg';

class TodoItem extends React.Component{
    state = {
        isEdit: false,
        newText: ''
    };

    toggleEdit = () => {
        const{data : { name }} = this.props;
        this.setState((prevState) => ({
            newText: name,
            isEdit: !prevState.isEdit
        }));
    };

    submitEdit = () => {
        const{updateName, data} = this.props;
        const{newText} = this.state;
        updateName(data.id, newText);
        this.toggleEdit()
    };

    newInputChange = (event) => {
        this.setState({newText: event.target.value});
    };

    render() {
        const { data, deleteState, toggleState} = this.props;
        const {newText} = this.state;
        return (
            <li>
                { !this.state.isEdit ? (
                    <>
                        <p onClick={this.toggleEdit}>
                            {data.name}
                        </p>
                        <div className='btn-block'>
                            <button className='btn-Delete' onClick={() => deleteState(data.id)}>
                                <DelToDo/>
                            </button>
                            { !this.props.data.isChecked ? (
                                <button className='btn-Done' onClick={() => toggleState(data.id)}>

                                </button>
                            ) : (
                                <button className='btn-Done_Ok' onClick={() => toggleState(data.id)}>

                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <input onChange={this.newInputChange} type="text"
                               value={newText}
                        />
                        <button className='btn-Edit' onClick={this.submitEdit}>
                            <EditToDo/>
                        </button>
                        <button className='btn-Cancel' onClick={this.toggleEdit}>cancel</button>
                    </>
                )}
            </li>
        )
    }
}
export default TodoItem;











