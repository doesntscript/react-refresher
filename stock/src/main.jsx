import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './index.css'
import NewPost from './routes/NewPost.jsx';
import RouterLayout from './routes/RouterLayout.jsx';
import Posts from './routes/Posts.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RouterLayout />,
    children: [
      {
        path: '/', element: <Posts />
      },
      {
      children: [{ path: '/create-post', element: <NewPost/> }],
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
