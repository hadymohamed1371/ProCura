import React from 'react'
import './Personal_info.css'
import Section from '../../../components/section/Section'

export default function Personal_info() {
  return (
   
<Section title="Personal Information">
 <div className='personal-info-container'>
    <div className="info-item">
          <span>Date of Birth</span>
          <p>12 March, 2002</p>
        </div>

        <div className="info-item">
          <span>Gender</span>
          <p>Female</p>
        </div>

        <div className="info-item">
          <span>Height</span>
          <p>165 cm</p>
        </div>

        <div className="info-item">
          <span>Weight</span>
          <p>60 kg</p>
        </div>
 </div>

</Section>
  
  )
}
