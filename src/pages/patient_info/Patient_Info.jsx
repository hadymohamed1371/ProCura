import React, { useState } from 'react'

import './Patient_Info.css'
import Disease_Navbar from '../../components/disease_navbar/Disease_Navbar'
import Section from '../../components/section/Section'
import Button from '../../components/button/Button'
import General_Health_Input from './sections/General_Health_Input'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Patient_Info({ onSave }) {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({})

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormValues((currentValues) => ({
        ...currentValues,
        [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSave?.(formValues)
        navigate('/patient-info/cardiovascular')
    }

  return (
    <div className='patient-info-container'>
        <Disease_Navbar
        routeStart={'/patient-info'}
        />

        <form className="patient-info-form" method='POST' onSubmit={handleSubmit}>
            <div className="patient-info-grid">
                <div className="patient-info-top-row">
                    <div className="patient-info-dynamic-cell">
                        <Outlet context={{formValues, handleInputChange}} />
                    </div>

                    <General_Health_Input
                    formValues={formValues}
                    onInputChange={handleInputChange}
                    />
                </div>

                <div className="patient-info-save-row">
                    <Section
                    title={'Save the new data:'}
                    subtitle={'The new data will contribute to the predictions and your health tracking.'}
                    >
                        <div className="patient-info-save-content">
                            
                            <Button
                            type="submit"
                            buttonContent={'Save Data'}
                            />
                            
                        </div>
                    </Section>
                </div>
            </div>
        </form>
    </div>
  )
}
