import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './pages/AuthProvider/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <div className='flex flex-col min-h-screen max-w-6xl mx-auto'>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  </div>
)
