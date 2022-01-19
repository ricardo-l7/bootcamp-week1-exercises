import React, { useState } from 'react';
import { Bar, SubmitButton } from './styles';

const SearchForm = ({ searchTask }) => {

    const [ userSearch, setUserSearch ] = useState('');

    const handleChange = (e) => {
        setUserSearch(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchTask(userSearch);
        setUserSearch("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Bar value={userSearch} type="text" onChange={handleChange} placeholder="Search Tasks"/>
            <SubmitButton>Submit</SubmitButton>
        </form>
    );
};

export default SearchForm;