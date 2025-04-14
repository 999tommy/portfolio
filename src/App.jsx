import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  useLocation
} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Footer from './shared/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import { useEffect } from 'react';

// Page transition animation settings
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.1,
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    }
  }
};

// Smoothly scroll to top when navigating between sections
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  return null;
}

const Layout = () =>  {
  return (
    <motion.div
      className='bg-primary text-text-DEFAULT portfolio relative'
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <ScrollToTop />
      <ParticlesBackground />
      <Header/>
      <AnimatePresence mode="wait">
        <Home/>
        <About/>
        <Projects/>
        <ScrollRestoration/>
        <Outlet/>
        <Contact/>
      </AnimatePresence>
      <Footer/>
    </motion.div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}></Route>
      <Route path='/projects' element={
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <Projects />
        </motion.div>
      }></Route>
    </Route>
  )
)

const App = () => {
  return (
    <div className='font-sans'>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </div>
  )
}

export default App;
