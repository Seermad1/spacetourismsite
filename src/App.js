import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Destination from './components/Destination';
import Nav from './components/navBar'
import Crew from './components/crew'
import Technology from './components/Technology';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/destinations' element={<Destination />}></Route>
        <Route path='/crew' element={<Crew />}></Route>
        <Route path='/technology' element={<Technology />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
