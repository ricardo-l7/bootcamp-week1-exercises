import React from 'react';
import { Button, List } from './styles';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            <List>
                {toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    )
                })}
            </List>
            <center><Button onClick={handleFilter}>Clear Completed</Button></center>
        </div>

    );
};

export default ToDoList;