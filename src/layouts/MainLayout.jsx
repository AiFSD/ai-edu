import React from 'react'
import Header from '../components/Header'
import HireVid from '../components/HireVid'
import About from "../components/About"
import Nav from '../components/Nav'
import CardsSec from '../components/CardsSec'
import How from '../components/How'

const MainLayout = () => {
  return (
    <div>
     <Header/>
     <HireVid/>
     <About/>
     <Nav/>
     <CardsSec/>
     <How/>
    </div>
  )
}

export default MainLayout