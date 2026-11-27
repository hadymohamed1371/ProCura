import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/components/Layout'
import Sign_In from './pages/sign_in/components/Sign_In'
import Sign_Up from './pages/sign_up/components/Sign_Up'

import Landing_Page from './pages/landing/Landing_Page'
import Auth_Layout from './components/Layout/components/Auth_Layout'

import Dashboard from './pages/dashboard/Dashboard'
import Cardiovascular from './pages/dashboard/subpages/cardiovascular/components/Cardiovascular'
import Chronic_Obstructive_Pulmonary from './pages/dashboard/subpages/chronic_obstructive_pulmonary/components/Chronic_Obstructive_Pulmonary'
import Diabetes from './pages/dashboard/subpages/diabetes/components/Diabetes'
import Heart from './pages/dashboard/subpages/heart/components/Heart'
import Liver from './pages/dashboard/subpages/liver/components/Liver'

import Patient_Info from './pages/patient_info/Patient_Info'
import Cardiovascular_Input from './pages/patient_info/subpages/Cardiovascular_Input'
import Chronic_Obstructive_Pulmonary_Input from './pages/patient_info/subpages/Chronic_Obstructive_Pulmonary_Input'
import Diabetes_Input from './pages/patient_info/subpages/Diabetes_Input'
import Heart_Input from './pages/patient_info/subpages/Heart_Input'
import Liver_Input from './pages/patient_info/subpages/Liver_Input'

import Settings from './pages/settings/Settings'
import Profile from './pages/profile/Profile'
import Edit_Profile from './pages/edit_profile/Edit_Profile'

function App() {


    return (
        <div className="">
            <Routes>
                <Route element={<Auth_Layout />}>
                    <Route path="/get-started" element={<Landing_Page />} />
                    <Route path="/sign-in" element={<Sign_In />} />
                    <Route path="/sign-up" element={<Sign_Up />} />
                </Route>

                <Route element={<Layout />}>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/dashboard' element={<Dashboard />}>
                        <Route path='cardiovascular' element={<Cardiovascular />} />
                        <Route path='chronic-obstructive-pulmonary' element={<Chronic_Obstructive_Pulmonary />} />
                        <Route path='diabetes' element={<Diabetes />} />
                        <Route path='heart' element={<Heart />} />
                        <Route path='liver' element={<Liver />} />
                    </Route>

                    <Route path='/patient-info' element={<Patient_Info />}>
                        <Route index element={<Navigate to='cardiovascular' replace />} />
                        <Route path='cardiovascular' element={<Cardiovascular_Input />} />
                        <Route path='chronic-obstructive-pulmonary' element={<Chronic_Obstructive_Pulmonary_Input />} />
                        <Route path='diabetes' element={<Diabetes_Input />} />
                        <Route path='heart' element={<Heart_Input />} />
                        <Route path='liver' element={<Liver_Input />} />
                    </Route>

                    <Route path='/settings' element={<Settings />} />
                    
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/profile/edit' element={<Edit_Profile />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
