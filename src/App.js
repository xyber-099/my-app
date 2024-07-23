import React from 'react';
import './App.css';
import BinaryBackground from './components/BinaryBackground';
import Header from './components/Header';
import './styles.css'; // Import your styles here

function App() {
  return (
    <div className="App">
      <BinaryBackground />
      <Header />
      <audio id="background-audio" autoPlay loop>
        <source src="./Dark-Light[Cropped].mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}

export default App;
