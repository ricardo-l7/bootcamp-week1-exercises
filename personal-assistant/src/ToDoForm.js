import React, { useState } from 'react';
import { Bar, SubmitButton } from './styles';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Bar value={userInput} type="text" onChange={handleChange} placeholder="Enter Task"/>
            <SubmitButton>Submit</SubmitButton>
        </form>
    );
};

export default ToDoForm;