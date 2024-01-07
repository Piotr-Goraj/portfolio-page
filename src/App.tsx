import React from 'react';

const App: React.FC = () => {
  return (
    <div className='app-wrapper'>
      <header className='header-bar'>
        <div className='header-bar__logo'>LOGO</div>
        <div className='header-bar__language'>Select Language</div>
        <nav className='header-bar__nav'>Page navigation</nav>
        <div className='header-bar__search'>Search</div>
      </header>

      <main className='content'>Main content</main>

      <footer className='footer-bar'>FOOTER</footer>
    </div>
  );
};

export default App;
