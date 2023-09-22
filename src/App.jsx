
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Footer from './shared/Footer'





const Layout = () =>  {
  return (
    <div className='bg-[#1f2833] text-white portfolio'>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <ScrollRestoration/>
      <Outlet/>
      <Contact/>
      <Footer/>
    </div>
  )
}


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      
      
    </Route>
  )
)

const App = () =>{
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
