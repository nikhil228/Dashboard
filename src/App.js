import React,{ useState } from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [addUsersList, setUsersList]=useState([]);

  const addUsersHandler = (uName, uAge) => {
    setUsersList((preAddedUsers) => {
      return [...preAddedUsers, 
        {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUsers onAddUsers={addUsersHandler} />
      <UsersList users={addUsersList}/>
    </div>
  );
}

export default App;
