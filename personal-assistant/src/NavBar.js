import React from 'react'
import { MastHead, Page } from './styles';

const NavBar = () => {
    return ( 
        <MastHead>
            <Page to='/todos'> To Do List</Page>
            <Page to='/weather'> Current Weather </Page>
        </MastHead>
    )
}

export default NavBar;