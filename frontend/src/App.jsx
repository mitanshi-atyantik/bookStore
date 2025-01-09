import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'
import Navbar from './components/Navbar'
import Home from './Home/Home'
import Courses from './Course/Courses'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import CategoryPage from './components/CategoryPage'

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='dark:bg-slate-900 dark:text-white duration-300 transition-all ease-in-out'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={authUser ? <Courses /> : <Signup courses={true}/>} />
            <Route path="/signup" element={<Signup courses={false}/>} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
          <Toaster />
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
