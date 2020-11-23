import React, { useReducer } from 'react';
import { UserContext, appReducer, initialState } from "./reducer";
import Profile from './components/Profile';
import './styles/my_account.scss';

function App() {
  const [store, dispatch] = useReducer(appReducer, initialState);
  return (
    <UserContext.Provider value={{ store, dispatch }}>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
