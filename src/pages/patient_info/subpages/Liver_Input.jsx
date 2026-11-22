import React from 'react'
import Section from '../../../components/section/Section'
import { useOutletContext } from 'react-router-dom'

export default function Liver_Input() {
      const {formValues, handleInputChange} = useOutletContext()
    
    return (
        <Section title="Liver" >
             <div className="input-fields-container">
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="cardiovascular-parameter1" className='input-label'>Parameter 1:</label>
                            <input type="text" id="cardiovascular-parameter1" name="cardiovascular.parameter1" placeholder='Enter the parameter 1' className='input-field' value={formValues['cardiovascular.parameter1'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 1
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="cardiovascular-parameter2" className='input-label'>Parameter 2:</label>
                            <input type="text" id="cardiovascular-parameter2" name="cardiovascular.parameter2" placeholder='Enter the parameter 2' className='input-field' value={formValues['cardiovascular.parameter2'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 2
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="cardiovascular-parameter3" className='input-label'>Parameter 3:</label>
                            <input type="text" id="cardiovascular-parameter3" name="cardiovascular.parameter3" placeholder='Enter the parameter 3' className='input-field' value={formValues['cardiovascular.parameter3'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 3
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="cardiovascular-parameter4" className='input-label'>Parameter 4:</label>
                            <input type="text" id="cardiovascular-parameter4" name="cardiovascular.parameter4" placeholder='Enter the parameter 4' className='input-field' value={formValues['cardiovascular.parameter4'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 4
                        </p>
                    </div>
                </div>

            </Section>
    )
}
