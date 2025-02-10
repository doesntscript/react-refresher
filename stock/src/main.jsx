import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Posts, { loader as postsLoader } from './routes/Posts';

import NewPost from './routes/NewPost';
import RouterLayout from './routes/RouterLayout';
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <RouterLayout />,
    children: [
      {
        path: '/', 
        element: <Posts />,
       loader: postsLoader, 
        children: [{ path: '/create-post', element: <NewPost/> }],
      },  
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
