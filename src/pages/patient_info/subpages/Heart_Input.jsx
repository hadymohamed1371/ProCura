import React from 'react'
import Section from '../../../components/section/Section'
import { useOutletContext } from 'react-router-dom'
export default function Heart_Input() {
     const {formValues, handleInputChange} = useOutletContext()
    
return (
    <Section title="Heart">
        <div className="input-fields-container">

           

      

      

        

            <div className="input-container">
                <div className="label-input">
                    <label htmlFor="heart-ap-hi" className='input-label'>Systolic Blood Pressure:</label>
                    <input type="number" id="heart-ap-hi" name="heart:ap_hi" placeholder='Enter systolic blood pressure' className='input-field' value={formValues['heart:ap_hi'] ?? ''} onChange={handleInputChange} />
                </div>
                <p className="description">
                    Upper blood pressure reading (mmHg)
                </p>
            </div>

            <div className="input-container">
                <div className="label-input">
                    <label htmlFor="heart-ap-lo" className='input-label'>Diastolic Blood Pressure:</label>
                    <input type="number" id="heart-ap-lo" name="heart:ap_lo" placeholder='Enter diastolic blood pressure' className='input-field' value={formValues['heart:ap_lo'] ?? ''} onChange={handleInputChange} />
                </div>
                <p className="description">
                    Lower blood pressure reading (mmHg)
                </p>
            </div>

            <div className="input-container">
                <div className="label-input">
                    <label htmlFor="heart-cholesterol" className='input-label'>Cholesterol Level:</label>
                    <select id="heart-cholesterol" name="heart:cholesterol" className='input-field' value={formValues['heart:cholesterol'] ?? ''} onChange={handleInputChange}>
                        <option value="">Select cholesterol level</option>
                        <option value="1">Normal</option>
                        <option value="2">Above normal</option>
                        <option value="3">Well above normal</option>
                    </select>
                </div>
                <p className="description">
                    1 = Normal, 2 = Above normal, 3 = Well above normal
                </p>
            </div>

            <div className="input-container">
                <div className="label-input">
                    <label htmlFor="heart-gluc" className='input-label'>Glucose Level:</label>
                    <select id="heart-gluc" name="heart:gluc" className='input-field' value={formValues['heart:gluc'] ?? ''} onChange={handleInputChange}>
                        <option value="">Select glucose level</option>
                        <option value="1">Normal</option>
                        <option value="2">Above normal</option>
                        <option value="3">Well above normal</option>
                    </select>
                </div>
                <p className="description">
                    1 = Normal, 2 = Above normal, 3 = Well above normal
                </p>
            </div>

            <div className="input-container">
                <div className="label-input">
                    <label htmlFor="heart-smoke" className='input-label'>Do you smoke?</label>
                    <select id="heart-smoke" name="heart:smoke" className='input-field' value={formValues['heart:smoke'] ?? ''} onChange={handleInputChange}>
                        <option value="">Select an option</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
                <p className="description">
                    0 = No, 1 = Yes
                </p>
            </div>

            <div className="input-container">
                <div className="label-input">
                    <label htmlFor="heart-alco" className='input-label'>Do you consume alcohol?</label>
                    <select id="heart-alco" name="heart:alco" className='input-field' value={formValues['heart:alco'] ?? ''} onChange={handleInputChange}>
                        <option value="">Select an option</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
                <p className="description">
                    0 = No, 1 = Yes
                </p>
            </div>

            <div className="input-container">
                <div className="label-input">
                    <label htmlFor="heart-active" className='input-label'>Are you physically active?</label>
                    <select id="heart-active" name="heart:active" className='input-field' value={formValues['heart:active'] ?? ''} onChange={handleInputChange}>
                        <option value="">Select an option</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
                <p className="description">
                    0 = No, 1 = Yes
                </p>
            </div>

        </div>
    </Section>
)
}

