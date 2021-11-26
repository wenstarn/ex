import React, { Component } from 'react'
import { useState } from 'react'
import Console from '../console'
import Sidebar from '../sidebar'
import Navbar from '../navbar'
import './app.css'
import ReactConsole from '@webscopeio/react-console'




const App = () => {

  return (

    <div id="Wrapper" style={{ height: "100vh" }}>
      <Sidebar />
      <div id="content">
        <Navbar />
        <Console />
      </div>
    </div>
  )
}
export default App