import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Section from '../../../components/section/Section'

export default function Diabetes_Input() {
    const {formValues, handleInputChange} = useOutletContext()
   

    return (
           <Section 
                   title= "Diabetes"
                   >
       
                       <div className="input-fields-container">
                           <div className="input-container">
                               <div className="label-input">
                                   <label htmlFor="Diabetes-parameter1" className='input-label'>Parameter 1:</label>
                                   <input type="text" id="Diabetes-parameter1" name="Diabetes.parameter1" placeholder='Enter the parameter 1' className='input-field' value={formValues['Diabetes.parameter1'] ?? ''} onChange={handleInputChange} />
                               </div>
                               <p className="description">
                                   Description for Parameter 1
                               </p>
                           </div>
                           <div className="input-container">
                               <div className="label-input">
                                   <label htmlFor="Diabetes-parameter2" className='input-label'>Parameter 2:</label>
                                   <input type="text" id="Diabetes-parameter2" name="Diabetes.parameter2" placeholder='Enter the parameter 2' className='input-field' value={formValues['Diabetes.parameter2'] ?? ''} onChange={handleInputChange} />
                               </div>
                               <p className="description">
                                   Description for Parameter 2
                               </p>
                           </div>
                           <div className="input-container">
                               <div className="label-input">
                                   <label htmlFor="Diabetes-parameter3" className='input-label'>Parameter 3:</label>
                                   <input type="text" id="Diabetes-parameter3" name="Diabetes.parameter3" placeholder='Enter the parameter 3' className='input-field' value={formValues['Diabetes.parameter3'] ?? ''} onChange={handleInputChange} />
                               </div>
                               <p className="description">
                                   Description for Parameter 3
                               </p>
                           </div>
                           <div className="input-container">
                               <div className="label-input">
                                   <label htmlFor="Diabetes-parameter4" className='input-label'>Parameter 4:</label>
                                   <input type="text" id="Diabetes-parameter4" name="Diabetes.parameter4" placeholder='Enter the parameter 4' className='input-field' value={formValues['Diabetes.parameter4'] ?? ''} onChange={handleInputChange} />
                               </div>
                               <p className="description">
                                   Description for Parameter 4
                               </p>
                           </div>
                       </div>
       
                   </Section>
                        
    )
}
