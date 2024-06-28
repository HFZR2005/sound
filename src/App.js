import React from 'react';
import './App.css';
import Header from './components/Header';
import SoundCardList from './components/SoundCardList';

function App() {
  return (
    <div className="bg-secondary min-h-screen flex items-center justify-center">
      <Header />
      <div className="p-8">
        <div className="h-screen overflow-y-auto pt-20">
          <SoundCardList />
        </div>
      </div>
    </div>
  );
}

export default App;
