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
                            <label htmlFor="Liver-parameter1" className='input-label'>Parameter 1:</label>
                            <input type="text" id="Liver-parameter1" name="Liver.parameter1" placeholder='Enter the parameter 1' className='input-field' value={formValues['Liver.parameter1'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 1
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="Liver-parameter2" className='input-label'>Parameter 2:</label>
                            <input type="text" id="Liver-parameter2" name="Liver.parameter2" placeholder='Enter the parameter 2' className='input-field' value={formValues['Liver.parameter2'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 2
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="Liver-parameter3" className='input-label'>Parameter 3:</label>
                            <input type="text" id="Liver-parameter3" name="Liver.parameter3" placeholder='Enter the parameter 3' className='input-field' value={formValues['Liver.parameter3'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 3
                        </p>
                    </div>
                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="Liver-parameter4" className='input-label'>Parameter 4:</label>
                            <input type="text" id="Liver-parameter4" name="Liver.parameter4" placeholder='Enter the parameter 4' className='input-field' value={formValues['Liver.parameter4'] ?? ''} onChange={handleInputChange} />
                        </div>
                        <p className="description">
                            Description for Parameter 4
                        </p>
                    </div>
                </div>

            </Section>
    )
}
