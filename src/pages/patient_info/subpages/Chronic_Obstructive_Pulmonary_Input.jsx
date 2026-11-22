import React from 'react'
import Section from '../../../components/section/Section'
import { useOutletContext } from 'react-router-dom'

export default function Chronic_Obstructive_Pulmonary_Input() {
      const {formValues, handleInputChange} = useOutletContext()

    return (
        <Section 
        title="Chronic Obstructive Pulmonary"
        >
              <div className="input-fields-container">
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="Chronic-Obstructive-Pulmonary-parameter1" className='input-label'>Parameter 1:</label>
                            <input type="text" id="Chronic-Obstructive-Pulmonary-parameter1" name="Chronic-Obstructive-Pulmonary.parameter1" placeholder='Enter the parameter 1' className='input-field' value={formValues['Chronic-Obstructive-Pulmonary.parameter1'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 1
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="Chronic-Obstructive-Pulmonary-parameter2" className='input-label'>Parameter 2:</label>
                            <input type="text" id="Chronic-Obstructive-Pulmonary-parameter2" name="Chronic-Obstructive-Pulmonary.parameter2" placeholder='Enter the parameter 2' className='input-field' value={formValues['Chronic-Obstructive-Pulmonary.parameter2'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 2
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="Chronic-Obstructive-Pulmonary-parameter3" className='input-label'>Parameter 3:</label>
                            <input type="text" id="Chronic-Obstructive-Pulmonary-parameter3" name="Chronic-Obstructive-Pulmonary.parameter3" placeholder='Enter the parameter 3' className='input-field' value={formValues['Chronic-Obstructive-Pulmonary.parameter3'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 3
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="Chronic-Obstructive-Pulmonary-parameter4" className='input-label'>Parameter 4:</label>
                            <input type="text" id="Chronic-Obstructive-Pulmonary-parameter4" name="Chronic-Obstructive-Pulmonary.parameter4" placeholder='Enter the parameter 4' className='input-field' value={formValues['Chronic-Obstructive-Pulmonary.parameter4'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 4
                        </p>
                    </div>
                </div>
            

        </Section>
    )
}
