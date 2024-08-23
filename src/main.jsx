import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx';
import AuthProvider from './context/LoginContext.jsx';
import Home from './components/Home.jsx';
import Search from './components/Search.jsx';
import Contact from './components/Contact.jsx';

const routeConfiguration = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home></Home>     
      },
      {
        path: 'search',
        element: <Search></Search>
      },
      {
        path: 'contact',
        element: <Contact></Contact>     
      }
    ]
  },
  {
    path: 'login',
    element: <Login/>
  }
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={routeConfiguration} />
  </AuthProvider>
)
