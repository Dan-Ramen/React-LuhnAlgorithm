import './App.css';
import React,{useState} from 'react';
import Luhn from './components/Luhn';

function App() {
  return (
    <>
      <h3>Enter A Card number (Card Theivery may vary)</h3>
  <Luhn></Luhn>
    </>
  );
}

export default App;