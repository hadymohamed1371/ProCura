import React from 'react'
import './HealthLifeStyle.css';
import { useState, useEffect } from "react";
import Section from '../../../components/section/Section';
import Profile_ActivityLevel from "../../../assets/icons/Profile_ActivityLevel.svg";
import Profile_Smoking_Health from "../../../assets/icons/Profile_Smoking_Health.svg";
import Profile_Alcohol_Health from "../../../assets/icons/Profile_Alcohol_Health.svg";
import Profile_Medical_Health from "../../../assets/icons/Profile_Medical_Health.svg"

export default function HealthLifeStyle() {
    const [profile, setProfile] = useState({
        activityLevel: "Moderate",
        smokingStatus: "No",
        alcoholStatus:"No",
        medicalCondition: "None",
    });

useEffect(() => {
  const savedProfile = localStorage.getItem("profileData");

  if (savedProfile) {
    setProfile(JSON.parse(savedProfile));
  }
}, []);
    return (
         <div className='health-section'>
            <Section title="Health & LifeSyle">
                <div className='health-info-container'>
                    <div className="info-item">
                        <span>Activity Level</span>
                        <div className="info-value">
                                <img src={Profile_ActivityLevel} alt="ActivityLevel" className='info-icon' />
                                <p>{profile.activityLevel}</p>
                            </div>
                        </div>
                
                        <div className="info-item">
                        <span>Smoking</span>
                            <div className="info-value">
                                <img src={Profile_Smoking_Health} alt="Smoking" className='info-icon' />
                                <p>{profile.smokingStatus}</p>
                            </div>
                        </div>
                
                        <div className="info-item">
                        <span>Alcohol</span>
                            <div className="info-value">
                                <img src={Profile_Alcohol_Health} alt="Alcohol" className='info-icon' />
                                <p>{profile.alcoholStatus}</p>
                            </div>
                        </div>
                
                        <div className="info-item">
                        <span>Medical Conditions </span>
                            <div className="info-value">
                                <img src={Profile_Medical_Health} alt="Medical Conditions" className='info-icon' />
                                <p>{profile.medicalCondition}</p>
                            </div>
                        </div>
                </div>
            </Section>
        </div>
    )
}
