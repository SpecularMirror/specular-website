import React from 'react';
import './App.css';

import NavBar from './Components/Navbar/Navbar';
import BigSection from './Components/Landing/BigSection';
import Article from './Components/Landing/MediumArticle';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BigSection />
      <h1 id="about_proj">About the project</h1>
      <Article />
    </div>
  );
}

export default App;
