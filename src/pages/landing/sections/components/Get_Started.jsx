import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../stylesheets/Get_Started.css'

import Button from '../../../../components/button/Button'

import Arrow_Right from '../../../../assets/icons/Arrow_Right.svg'
import Get_Started_photo from "../../../../assets/images/Get_Started_photo.png"
// import Get_Started_Curve_right from "../../../../assets/images/Get_Started_Curve_right.svg"
// import Get_Started_Curve_Left from "../../../../assets/images/Get_Started_Curve_Left.svg"

export default function Get_Started() {

    const navigate = useNavigate();

    return (
        <div className='get-started-container'>
            <div className="title-subtitle-button-contianer">
                <div className="title-subtitle-container">
                    <p className="title">YOUR HEALTH,</p>
                    <p className="title priority">OUR PRIORITY.</p>
                    <p className="subtitle">Monitor your health easily and stay on track.</p>
                </div>

                <div className="buttons-container">
    <Button 
        buttonContent={'Get Started'}
        logoRight={Arrow_Right}
        actionOnClick={() => navigate('/sign-up')}
    />

    <Button 
        buttonContent={'Sign In'}
        actionOnClick={() => navigate('/sign-in')}
    />
</div>
                
            </div>
            <div className='get-started-photo'>
                    <img src={Get_Started_photo} alt="get-started-photo"/>
                </div>
                
        </div>
    )
}
