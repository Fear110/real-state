import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
function App() {
  return (
    <div className="App">
      <div className="white-gradient" />
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
    </div>
  );
}

export default App;
