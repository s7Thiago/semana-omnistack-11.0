import React, { useState } from 'react';
import Header from './Header';
import Logon from './pages/Logon'

function App() {
  let [counter, setCounter] = useState(0);

  function increment() {
    return (
      <Logon />

    );
  }

  export default App;
