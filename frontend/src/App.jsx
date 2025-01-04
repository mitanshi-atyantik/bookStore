import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'
import Navbar from './components/Navbar'
import Home from './Home/Home'
import Courses from './Course/Courses'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
       <div className='dark:bg-slate-900 dark:text-white'>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses/>} />
        </Routes>
       </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
