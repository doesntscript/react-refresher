import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './index.css'
import App from './App.jsx'
import NewPost from './components/NewPost.jsx';
import RouterLayout from './routes/RouterLayout.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RouterLayout />,
    children: [
      {
        path: '/', element: <App />
      },
      {
        path: '/create-post', element: <NewPost/>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
