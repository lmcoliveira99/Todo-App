import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Todos from './pages/Todos';
import Create from './components/Create';



function App() {
  return (
    <main>
      <div>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App
