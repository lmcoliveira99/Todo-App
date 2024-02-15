import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Todos from './pages/Todos';




function App() {

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/doit" element={<TodoList />} />
        <Route path='/doit/:id' element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
