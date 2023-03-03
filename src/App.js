import './App.css';
import Navbar from './compnent/Navbar';
import Welcome from './compnent/Welcome';
import Itemcard from './compnent/Itemcard';
import Home from './compnent/Home';
import Checkout from './compnent/Checkout';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {
  
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/Itemcard' element={<Itemcard />} />
          <Route exact path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
