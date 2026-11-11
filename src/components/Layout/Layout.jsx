import React from 'react'

import { Outlet } from 'react-router-dom'

import Navbar from '../../../../Procura/src/components/Navbar'

export default function Layout() {
  return (
    <div>
        <Navbar />

        <main>
            <Outlet />
        </main>

    </div>
  )
}
