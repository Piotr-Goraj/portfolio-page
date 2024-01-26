// libs
import React from 'react';

// components
import TopBar from './components/TopBar/TopBar';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/MainContent/Footer/Footer';

// scss
import './App.scss';

const App: React.FC = () => {
  return (
    <div className='app-wrapper'>
      <TopBar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
