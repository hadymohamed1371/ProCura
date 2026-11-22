import React from 'react'
import Section from '../../../components/section/Section'
import { useOutletContext } from 'react-router-dom'
export default function Heart_Input() {
     const {formValues, handleInputChange} = useOutletContext()
    return (
        <Section title="Heart" >
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
                            <label htmlFor="Heart-parameter2" className='input-label'>Parameter 2:</label>
                            <input type="text" id="Heart-parameter2" name="Heart.parameter2" placeholder='Enter the parameter 2' className='input-field' value={formValues['Heart.parameter2'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 2
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="Heart-parameter3" className='input-label'>Parameter 3:</label>
                            <input type="text" id="Heart-parameter3" name="Heart.parameter3" placeholder='Enter the parameter 3' className='input-field' value={formValues['Heart.parameter3'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 3
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="Heart-parameter4" className='input-label'>Parameter 4:</label>
                            <input type="text" id="Heart-parameter4" name="Heart.parameter4" placeholder='Enter the parameter 4' className='input-field' value={formValues['Heart.parameter4'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 4
                        </p>
                    </div>
                </div>
            </Section>
    )
}
