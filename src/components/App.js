import React from 'react';

import '../styles/App.css';
//import LoginUseState from './LoginUseState';
//import LoginUserReducer from './LoginUseReducer/LoginUserReducer'
//import LoginUseReducerImmer from './LoginUseReducerImmer/LoginUseReducerImmer';
import LoginWithContext from './LoginWithContext/LoginWithContext'

function App() {
  return (
    <div className="App">
      {/* <LoginUseState /> */}
      {/* <LoginUserReducer /> */}
      {/* <LoginUseReducerImmer /> */}
      <LoginWithContext />
    </div>
  );
}

export default App;
