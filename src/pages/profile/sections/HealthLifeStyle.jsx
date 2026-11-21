import React from 'react'
import './HealthLifeStyle.css';
import Section from '../../../components/section/Section';
export default function HealthLifeStyle() {
  return (
     <div className='health-section'>
    <Section title="Health & LifeSyle">
     <div className='health-info-container'>
        <div className="info-item2">
              <span>Activity Level</span>
              <p>Moderate</p>
            </div>
    
            <div className="info-item2">
              <span>Smoking</span>
              <p>No</p>
            </div>
    
            <div className="info-item2">
              <span>Alcohol</span>
              <p>No</p>
            </div>
    
            <div className="info-item2">
              <span>Medical Conditions
              </span>
              <p>None</p>
            </div>
     </div>
    
    </Section>
      </div>
  )
}
