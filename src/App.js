
import Header from './components/Header'
import Home from './components/Intro'
import AboutMe from './components/AboutMe'
import Work from './components/Work'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Work />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
