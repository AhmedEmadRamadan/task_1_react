
import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';



let routers = createHashRouter([
  {Path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>}
  ]}
])

export default function App() {
  return <>
    <RouterProvider router={routers}/>
  </>
}


