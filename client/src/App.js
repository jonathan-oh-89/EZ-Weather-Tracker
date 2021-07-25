import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
