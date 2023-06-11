import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CentralStore from './Store/CentralStore'
import { Provider } from 'react-redux';
import {  createBrowserRouter,RouterProvider } from 'react-router-dom';
import Profile from './components/Profile';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import BookShelf from './components/BookShelf';
import PageNotFound from './Templates/PageNotFound';
import BodyLayout from './components/BodyLayout';
import WorkExperience from './components/WorkExperience';
import Home from './components/Home';

CentralStore.subscribe(()=> console.log(CentralStore.getState()));


const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      errorElement:<PageNotFound/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/",
          element:<BodyLayout/>,
          errorElement:<PageNotFound/>,
          children:[
            {
              path:"home",
              element:<Home/>
            },
            {
              path:"profile",
              element:<Profile/>
            },
            {
              path:"project",
              element:<Projects/>
            },
            {
              path:"contact",
              element:<ContactUs/>
            },
            {
              path:"Work_Experience",
              element:<WorkExperience/>
            }
          ]
        },
        {
          path:"bookshelf",
          element:<BookShelf/>
        },

        
        
      ]
    },
    
   

  ]
)





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
 
  <Provider store={CentralStore}>
  <RouterProvider router={appRouter}>
 
  </RouterProvider>
  </Provider>
      
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

