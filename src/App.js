import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SoundCardList from './components/SoundCardList';

function App() {
  return (
    <div className="bg-secondary min-h-screen flex flex-col items-center justify-center">
      <Header />
      <div className="p-8 max-h-screen">
        <div className="pt-20 bg-secondary overflow-y-auto">
          <SoundCardList />
          <div className="relative h-20"> </div>
          <Footer />
        </div>
      </div> 
    </div>
  );
}

export default App;
