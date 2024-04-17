import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, createRoutesFromElements, Link } from 'react-router-dom'
import { About } from './Pages/About/About.jsx'
import { Home } from './Pages/Home/Home.jsx'
import { Header } from './Header/Header.jsx'
import { ApiProvider } from './ApiProvider.jsx'
import { Product } from './Product/Product.jsx'
import { Notification } from './Pages/Notification/Notification.jsx'
import { Favourites } from './Pages/Favourites/Favourites.jsx'
import { Cart } from './Pages/Cart/Cart.jsx'
import { Product2 } from './Product/Product2.jsx'

// const router = createBrowserRouter([
//   {
//     element: <ApiProvider />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//     ]
    
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/product1' element={<Product />} />
  <Route path='/product2' element={<Product2 />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/favourites' element={<Favourites />} />
  <Route path='/notification' element={<Notification />} />
  </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <RouterProvider router = {router} />
  <App />
  </React.StrictMode>,
)
