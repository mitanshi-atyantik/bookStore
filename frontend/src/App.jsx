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
import ContactPage from './Contact/Contact'
import Cookies from 'js-cookie';
import About from './About/About'

function App() {
  const [authUser, setAuthUser] = useAuth();

  // Example function to get the user from cookie
  // const getUserFromCookie = () => {
  //   const user = Cookies.get('user'); // Get the user cookie
  //   console.log(user); // Log the user value

  //   if (user) {
  //     // Remove any existing 'Users' in localStorage
  //     localStorage.removeItem('Users');

  //     localStorage.setItem('Users', user);
  //     // window.location.reload();

  //   } else {
  //     console.log('No user cookie found');
  //   }
  // };


  // getUserFromCookie();
  // console.log(user); // Now you have access to the user data


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='dark:bg-slate-900 dark:text-white duration-300 transition-all ease-in-out'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={authUser ? <Courses /> : <Signup courses={true} />} />
            <Route path="/signup" element={<Signup courses={false} />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Toaster />
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
