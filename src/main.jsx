import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, createRoutesFromElements, Link } from 'react-router-dom'
import { About } from './Pages/About/About.jsx'
import { Home } from './Pages/Home/Home.jsx'
import { Header } from './Header/Header.jsx'
import { ApiProvider } from './ApiProvider.jsx'

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
  </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <RouterProvider router = {router} />
  <App />
  </React.StrictMode>,
)
