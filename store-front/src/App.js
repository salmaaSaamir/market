import { Route  ,Routes } from 'react-router-dom';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Index from './pages/Index';

function App() {
  return (
    <Routes>
    <Route path='/' element={<><Index /></>} />
    <Route path='/product' element={<><Navbar /> <Header /> <Product /> <Footer /> </>} />
    <Route path='/about' element={<><Navbar /> <Header /> <About /> <Contact /><Footer /> </>} />
    <Route path='/contact' element={<><Navbar /> <Header /> <About /> <Contact /><Footer /> </>} />
  </Routes>
  );
}

export default App;
