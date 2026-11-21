import React from 'react'
import "./Profile_Card.css";
import Section from '../../../components/section/Section';

export default function Profile_Card() {
  return (
    <div className='profile-container'>
      
    <div className='photo-container'>
<img src="" alt="patient-photo"/>
    </div>
    <div className='patient-details-container'>
<h1 className='patient-name'>Name</h1>
<p className='patient-email'>email@gmail.com</p>
<p className='patient-location'>Alexandria</p>
    </div>
    <div className='profile-button'>
       <button>Edite</button>
    </div>

   
  </div>
  
  )
}
