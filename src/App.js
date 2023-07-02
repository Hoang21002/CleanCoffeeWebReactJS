import 'animate.css';

import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import KhamPha from './pages/KhamPha';
import XepHang from './pages/XepHang';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from './pages/Sign/SignIn';
import SignUp from './pages/Sign/SignUp';
import ForgotPass from './pages/ForgotPass/ForgotPass';
import ChangePass from './pages/ForgotPass/ChangePass';
import EnterCode from './pages/ForgotPass/EnterCode';
import Success from './pages/ForgotPass/Success';
import AccountUser from './pages/AccountUser';
import AccountAdmin from './pages/AdminPages/AccountAdmin';
import ThumuaAdmin from './pages/AdminPages/ThumuaAdmin';
import TruyXuat from './pages/TruyXuat';
import ChebienAdmin from './pages/AdminPages/ChebienAdmin';
import VanchuyenAdmin from './pages/AdminPages/VanchuyenAdmin';
import PhanphoiAdmin from './pages/AdminPages/PhanphoiAdmin';
import Save from './pages/Save';



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
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgotpass' element={<ForgotPass />} />
          <Route path='/entercode' element={<EnterCode />} />
          <Route path='/changepass' element={<ChangePass />} />
          <Route path='/success' element={<Success />} />
          <Route path='/account' element={<AccountUser />} />
          <Route path='/admin' element={<AccountAdmin />} />
          <Route path='/thumua' element={<ThumuaAdmin />} />
          <Route path='/chebien' element={<ChebienAdmin />} />
          <Route path='/truyxuat' element={<TruyXuat />}/>
          <Route path='/vanchuyen' element={<VanchuyenAdmin />}/>
          <Route path='/phanphoi' element={<PhanphoiAdmin />}/>
          <Route path='/save' element={<Save />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
