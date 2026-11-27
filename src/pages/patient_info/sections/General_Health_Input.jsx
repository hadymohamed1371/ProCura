import React from 'react'
import Section from '../../../components/section/Section';
import './General_Health_Input.css';

export default function General_Health_Input({formValues, onInputChange, className=''}) {
    return (
<div className={`patient-info-general-cell ${className}`}>      
        <Section 
            title="General Health Data"
            >

                <div className="input-fields-container">
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="blood-pressure-systolic" className='input-label'>Blood Pressure &#40;mmHg&#41;:</label>
                            <div className="mini-input-container">
                                <input type="number" id="blood-pressure-systolic" name="blood-pressure-systolic" placeholder='Systolic' aria-label="Systolic blood pressure" className='mini-input-field' value={formValues['blood-pressure-systolic'] ?? ''} onChange={onInputChange} />
                                <input type="number" id="blood-pressure-diastolic" name="blood-pressure-diastolic" placeholder='Diastolic' aria-label="Diastolic blood pressure" className='mini-input-field' value={formValues['blood-pressure-diastolic'] ?? ''} onChange={onInputChange} />
                            </div>
                        </div>
                        
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="heart-rate-bpm" className='input-label'>Heart Rate &#40;bpm&#41;:</label>
                            <input type="number" id="heart-rate-bpm" name="heart-rate-bpm" placeholder='Enter your heart rate' className='input-field' value={formValues['heart-rate-bpm'] ?? ''} onChange={onInputChange} />
                        </div>
                        
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="blood-glucose-mmg/dl" className='input-label'>Blood Glucose &#40;mg/dL&#41;:</label>
                            <input type="number" id="blood-glucose-mmg/dl" name="blood-glucose-mmg/dl" placeholder='Enter your blood glucose' className='input-field' value={formValues['blood-glucose-mmg/dl'] ?? ''} onChange={onInputChange} />
                        </div>
                        
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="date" className='input-label'>Date and Time:</label>
                            <div className="mini-input-container">
                                <input type="date" id="date" name="date" placeholder='Date' className='mini-input-field' value={formValues.date ?? ''} onChange={onInputChange} />
                                <input type="time" id="time" name="time" placeholder='Time' className='mini-input-field' value={formValues.time ?? ''} onChange={onInputChange} />
                            </div>
                        </div>
                        
                    </div>
                </div>

            </Section>
        </div>
    )
}
