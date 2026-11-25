import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../stylesheets/Get_Started.css'

import Button from '../../../../components/button/Button'

import Arrow_Right from '../../../../assets/icons/Arrow_Right.svg'

export default function Get_Started() {

    const navigate = useNavigate();

    return (
        <div className='get-started-container'>
            <div className="title-subtitle-button-contianer">
                <div className="title-subtitle-container">
                    <p className="title">Your Health,</p>
                    <p className="title priority">Our Priority.</p>
                    <p className="subtitle">Monitor your health easily and stay on track.</p>
                </div>
                <div className="buttons-container">
                    <Button 
                    buttonContent={'Sign In'}
                    actionOnClick={() => navigate('/sign-in')}
                    />
                    <Button 
                    buttonContent={'Get Started'}
                    logoRight={Arrow_Right}
                    actionOnClick={() => navigate('/sign-up')}
                    />
                </div>
            </div>
        </div>
    )
}
