import axios from 'axios';
import React from 'react';
import Home from './screens/Home';

function App() {
  axios.defaults.baseURL = 'https://v2.jokeapi.dev/joke'
  return (
    <Home />
  );
}

export default App;
