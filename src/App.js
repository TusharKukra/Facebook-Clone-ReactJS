import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  
  // here we are using React Context API


  // enterning user info
  const[{user}, dispatch] = useStateValue();

  return (

    // we are using BEM Naming Convention for user auth

    <div className="app">

      {!user ? (
        <Login/>
      ) : (

        <>

        {/* Header Section */}
        {/* In Header Section we need Search icon right of FB logo (using Material UI)*/}
        <Header/>

        <div className="app_body">
          {/* SideBar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets/>

        </div>
        </>

      )} 

            
          
    </div>
  );
}

export default App;
