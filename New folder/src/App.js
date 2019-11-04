import React from 'react';
import './App.css';
import ReduxDemo from './Component1/redux';
import Counter from './Reduxexample2/counter';
import store from './Reduxexample2/store';

function App() {
  return (
    <div className="App">
     <Counter store ={store}/>
     <ReduxDemo/>
    </div>
  );
}

export default App;
