import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
const queryClient = new QueryClient()
import { router } from './routers/Routes/Router.jsx';
import {HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <QueryClientProvider client={queryClient}>
      <div className='max-w-screen-lg mx-auto'>
        <RouterProvider router={router} />
     </div>
    </QueryClientProvider>
   </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
