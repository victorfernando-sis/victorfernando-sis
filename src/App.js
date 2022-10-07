
import Header from './components/Header'
import Home from './components/Intro'
import Services from './components/Services'
import AboutMe from './components/AboutMe'
import Work from './components/Work'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <AboutMe />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
