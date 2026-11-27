import React from 'react'
import './Personal_info.css'
import { useState, useEffect } from "react";
import Section from '../../../components/section/Section'
import Profile_Gender from "../../../assets/icons/Profile_Gender.svg"
import Profile_Date from "../../../assets/icons/Profile_Date.svg"
import Profile_Height from "../../../assets/icons/Profile_Height.svg"
import Profile_Weight from "../../../assets/icons/Profile_Weight.svg"
import { apiRequest } from '../../../lib/api'
export default function Personal_info() {
  const [profile, setProfile] = useState({
  dateOfBirth: " ",
  gender: " ",
  height: " ",
  weight: " ",
});

useEffect(() => {
  const token = localStorage.getItem('authToken')
  if (!token) return
  apiRequest('/auth/me', { token })
    .then(({ user }) => {
      const p = user.profile ?? {}
      const dob = p.dateOfBirth
        ? new Date(p.dateOfBirth).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
        : '12 March, 2002'
      setProfile({
        dateOfBirth: dob,
        gender: p.gender ?? ' ',
        height: p.heightCm ?? ' ',
        weight: p.weightKg ?? ' ',
      })
    })
    .catch(() => {})
}, []);
  return (
   <div className='personal-section'>
<Section title="Personal Information">
 <div className='personal-info-container'>
    <div className="info-item">
        <span>Date of Birth</span>
        <div className="info-value">
            <img src={Profile_Date} alt="Date" className='info-icon' />
            <p>{profile.dateOfBirth}</p>
        </div>
        </div>

        <div className="info-item">
        <span>Gender</span>
         <div className="info-value">
            <img src={Profile_Gender} alt="Gender" className='info-icon' />
            <p>{profile.gender}</p>
        </div>
        </div>

        <div className="info-item">
        <span>Height</span>
         <div className="info-value">
            <img src={Profile_Height} alt="Height" className='info-icon' />
            <p>{profile.height} cm</p>
        </div>
        </div>

        <div className="info-item">
        <span>Weight</span>
         <div className="info-value">
            <img src={Profile_Weight} alt="Weight" className='info-icon' />
            <p>{profile.weight} kg</p>
        </div>
        </div>
 </div>

</Section>
  </div>
  )
}
