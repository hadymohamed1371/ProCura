import './App.css'

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Dashboard from './pages/dashboard/Dashboard'


function App() {


    return (
        <div className="">
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Dashboard />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
