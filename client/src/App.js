import React from 'react';
import Header from './components/Header'
import './styles.css';
import Main from './pages/main'
import Routes from './routes'
import Footer from './components/Footer'
const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
  </div>
);


export default App;
