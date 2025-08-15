
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Anime from './pages/Anime';
import Rock from './pages/Rock';
import TV from './pages/TV';
import Gamer from './pages/Gamer';
import Login from './pages/Login';
import Cart from './pages/Cart';
import About from './pages/About';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/rock" element={<Rock />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/gamer" element={<Gamer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ToastContainer position="bottom-right" autoClose={2000} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
