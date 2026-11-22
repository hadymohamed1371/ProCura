import React from 'react'
import "./Profile_Card.css";

import Button from "../../../components/button/Button.jsx"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Pen from '../../../assets/icons/Pen.svg'


export default function Profile_Card() {

    const navigate = useNavigate()

    const [profile, setProfile] = useState({
        name: "Name",
        email: "example@gmail.com",
        location: "Alexandria, Egypt",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4xQ1zl6oBSSZ_rOVgiRl4SVgqIS06E_sZcz-kGB4oA&s", 
    });

    useEffect(() => {
        const savedProfile = localStorage.getItem("profileData");

        if (savedProfile) {
        setProfile(JSON.parse(savedProfile));
        }
    }, []);

  return (
    <div className="profile-card-container">
        <div className="photo-details-container">
            <div className="photo-container">
                <img src={profile.image} alt="patient-photo" />
            </div>

            <div className="patient-details-container">
                <p className="patient-name">{profile.name}</p>
                <div className="email-location">
                    <p className="patient-email">{profile.email}</p>
                    {'—'}
                    <p className="patient-location">{profile.location}</p>
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

