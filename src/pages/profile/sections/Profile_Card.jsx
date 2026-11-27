import React from 'react'
import "./Profile_Card.css";

import Button from "../../../components/button/Button.jsx"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Pen from '../../../assets/icons/Pen.svg'
import { apiRequest } from '../../../lib/api'
import Profile_Page_Title_logo from '../../../assets/icons/Profile_Page_Title_logo.svg'

export default function Profile_Card() {

    const navigate = useNavigate()

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        location: "",
        image: "", 
    });

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (!token) return
        apiRequest('/auth/me', { token })
            .then(({ user }) => setProfile({
                name: user.name,
                email: user.email,
                location: [user.profile?.city, user.profile?.country].filter(Boolean).join(', '),
                image: user.profile?.image || Profile_Page_Title_logo,
            }))
            .catch(() => {})
    }, []);

  return (
    <div className="profile-card-container">
        <div className="photo-details-container">
            <div className="photo-container">
                <img src={profile.image} alt={profile.name} />
            </div>

            <div className="patient-details-container">
                <p className="patient-name">{profile.name}</p>
                <div className="email-location">
                    <p className="patient-email">{profile.email}</p>
                    {profile.location &&
                    <div className='location'>
                        {'—'}
                        <p className="patient-location">{profile.location}</p>
                    </div> }
                </div>
            </div>
        </div>

        <div className="profile-button">
            <Button 
            buttonContent={"Edit Profile"}
            logo={Pen}
            actionOnClick={() => navigate('/profile/edit')}
            />
        </div>
    </div>
  );
}

