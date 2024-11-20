import React, { useState } from 'react'
import Header from '../header/Header'
import Nav from '../navbar/Nav'
import Home from '../../pages/home/Home'

const Dashboard = () => {

  return (
    <div>
      <main>
        <Header/>
        <Nav/>
      </main>
      <Home/>
    </div>
  )
}

export default Dashboard