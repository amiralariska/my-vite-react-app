import React from 'react';
import Logo from './vite-react-app-logo.png';
import './App.css';

export default function App() {
  const tryit = () => {
    alert("Hi");
  }
  return (
    <>
      <img src={Logo} alt="vite-react-logo" />
      <h1>Vite + React</h1>
      <p>Learn Vite React To Create Vite React App</p>
      <button onClick={tryit}>Click It</button><br /><br />
      <a href='https://vitejs.dev/' target='_blank' rel='noopener noreferrer'>Learn Vite + React</a>
    </>
  )
}