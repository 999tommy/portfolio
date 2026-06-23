// app.jsx — full redesign with dark-gold glassmorphism
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
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Footer from './shared/Footer'
import { useEffect, lazy, Suspense } from 'react';
const ParticlesBackground = lazy(() => import('./components/ParticlesBackground'));

const pageVariants = {
  initial: { opacity: 0 },
  in: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  out: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

const Layout = () => {
  return (
    <motion.div
      className='relative font-sans overflow-x-hidden'
      style={{ background: '#0c0d14', color: '#e8e8e8', minHeight: '100vh' }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Suspense fallback={<div className="fixed inset-0 bg-[#0c0d14]" />}>
        <ParticlesBackground />
      </Suspense>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <ScrollRestoration />
        <Outlet />
        <Contact />
      </AnimatePresence>
      <Footer />
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
    <div>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </div>
  )
}

export default App;