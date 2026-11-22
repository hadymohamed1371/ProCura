import React from 'react'
import "./Profile_Card.css";
import Section from '../../../components/section/Section';
import Button from "../../../components/button/Button.jsx"
import { useState, useEffect } from "react";


export default function Profile_Card() {

  const [profile, setProfile] = useState({
    name: "Name",
    email: "example@gmail.com",
    location: "Alexandria",
    image: "",
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem("profileData");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  return (
    <div className="profile-container">

      <div className="photo-container">
        <img src={profile.image} alt="patient-photo" />
      </div>

      <div className="patient-details-container">
        <h1 className="patient-name">{profile.name}</h1>
        <p className="patient-email">{profile.email}</p>
        <p className="patient-location">{profile.location}</p>
      </div>

      <div className="profile-button">
        <Button buttonContent="Edit Profile" />
      </div>

    </div>
  );
}

