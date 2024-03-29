// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

