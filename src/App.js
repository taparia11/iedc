import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects1 from './Components/Projects1';
import Projects2 from './Components/Projects2';
import Projects3 from './Components/Projects3';
import Footer from './Components/Footer';
import Committees from './Components/Committees';
import Newsstories from './Components/Newsstories';
import Activities from './Components/Activities';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Downloads from './Components/Downloads';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home titleChange='Home'/>} />
          <Route exact path='/1yearprojects' element={<Projects1 titleChange='Projects'/>} />
          <Route exact path='/2yearprojects' element={<Projects2 titleChange='Projects'/>} />
          <Route exact path='/3yearprojects' element={<Projects3 titleChange='Projects'/>} />
          <Route exact path='/committees' element={<Committees titleChange='Committees' />} />
          <Route exact path='/newsstories' element={<Newsstories titleChange='News Stories' />} />
          <Route exact path='/downloads' element={<Downloads titleChange='Downloads' />} />
          <Route exact path='/activities' element={<Activities titleChange='Activities' />} />
          
    
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
