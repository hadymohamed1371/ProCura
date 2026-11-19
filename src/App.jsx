import './App.css'

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Dashboard from './pages/dashboard/Dashboard'
import Patient_Info from './pages/patient_info/Patient_Info'
import Settings from './pages/settings/Settings'
import Profile_Info from './pages/profile_info/Profile_Info'
import Edit_Profile from './pages/edit_profile/Edit_Profile'


function App() {


    return (
        <div className="">
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/patient-info' element={<Patient_Info />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/profile-info' element={<Profile_Info />} />
                    <Route path='/edit-profile' element={<Edit_Profile />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
