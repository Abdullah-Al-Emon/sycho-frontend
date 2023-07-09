import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'

const HomePageLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomePageLayout