import React, { useState } from 'react';
//components
import Header from "./ListHeader";
import NoListHeader from './NoListHeader';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import data from './data.json'
//styles
import { Container, Main } from './styles'

function App() {
  
  const [ toDoList, setToDoList ] = useState(data);
  const [ searchList, setSearch ] = useState([]);


  const handleToggleAdd = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilterAdd = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const handleToggleSearch = (id) => {
    let mapped = searchList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setSearch(mapped);
  }

  const handleFilterSearch = () => {
    let filtered = searchList.filter(task => {
      return !task.complete;
    });
    setSearch(filtered);
    setToDoList(toDoList.filter(item => item.task !== searchList[0].task));
  }

  const addTask = ( userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  const searchTask = ( userSearch ) => {
    let copy = [...toDoList];
    setSearch(copy.filter(item => item.task.includes(userSearch)));
  }

  if(searchList.length === 0) {
    if(toDoList.length === 0) {
      return (
        <div className="App">
          <Main>
            <NavBar/>
            <Container>
              <ToDoForm addTask={addTask}/>
              <SearchForm searchTask={searchTask}/>
            </Container>
            <center><NoListHeader/></center>
            <ToDoList toDoList={toDoList} handleToggle={handleToggleAdd} handleFilter={handleFilterAdd}/>
          </Main>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <Main>
            <NavBar/>
            <Container>
              <ToDoForm addTask={addTask}/>
              <SearchForm searchTask={searchTask}/>
            </Container>
            <center><Header/></center>
            <ToDoList toDoList={toDoList} handleToggle={handleToggleAdd} handleFilter={handleFilterAdd}/>
          </Main>
        </div>
      );
    }
  }

  else {
      return (
        <div className="App">
          <Main>
            <NavBar/>
            <Container>
              <ToDoForm addTask={addTask}/>
              <SearchForm searchTask={searchTask}/>
            </Container>
            <center><Header/></center>
            <ToDoList toDoList={searchList} handleToggle={handleToggleSearch} handleFilter={handleFilterSearch}/>
          </Main>
        </div>
      );
    }

  
}

export default App;
