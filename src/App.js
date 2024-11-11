import './App.css';
import Users from './components/Users';
import SearchStatus from './components/SearchStatus';
import { useState } from 'react';
import API from './API';

function App() {
  const [users, setUsers] = useState(API.users.fetchAll());

  function handleDelete(id) {
    setUsers(
      users.filter((user) => {
        return user._id !== id;
      })
    );
  }
  function handleBookmark(id) {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  }

  return (
    <div className="App bg-gray-800">
      <SearchStatus usersCount={users.length} />
      <Users
        users={users}
        onBookmark={handleBookmark}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
