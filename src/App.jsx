// app.jsx — root layout with Lenis smooth scroll + cursor
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
import Cursor from './components/Cursor'
import { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';

const pageVariants = {
  initial: { opacity: 0 },
  in:  { opacity: 1, transition: { duration: 0.55, ease: "easeInOut" } },
  out: { opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } },
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// Lenis smooth scroll init
const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
};

const Layout = () => {
  useLenis();

  return (
    <motion.div
      className='relative overflow-x-hidden'
      style={{ background: 'var(--obsidian)', color: 'var(--text-primary)', minHeight: '100vh' }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {/* Custom cursor (hidden on touch) */}
      <Cursor />
      <ScrollToTop />
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <ScrollRestoration />
      <Outlet />
      <Contact />
      <Footer />
    </motion.div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}></Route>
      <Route path='/projects' element={
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
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