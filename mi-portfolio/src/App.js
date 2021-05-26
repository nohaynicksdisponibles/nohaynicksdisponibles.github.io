import './App.css';
import { BrowserRouter,Route } from "react-router-dom"
import Home from './vistas/home';
import Proyects from "./vistas/proyects"
import Contact from "./vistas/contact"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/proyects">
          <Proyects/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
