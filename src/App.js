import logo from './logo.svg';

import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import KhamPha from './pages/KhamPha';
import XepHang from './pages/XepHang';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/khampha' element={<KhamPha />} />
          <Route path='/xephang' element={<XepHang />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
