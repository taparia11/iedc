import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Committees from './Components/Committees';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home titleChange='Home'/>} />
          <Route exact path='/projects' element={<Projects titleChange='Projects'/>} />
          <Route exact path='/Committees' element={<Committees titleChange='Committees' />} />
    
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
