import React from 'react'

import "./Layout.css"

import { Outlet } from 'react-router-dom'

import Navbar from '../navbar/Navbar'

export default function Layout() {
  return (
    <div className='layout-container'>
        <Navbar />

        <main className='main-content'>
            <Outlet />
        </main>

    </div>
  )
}
