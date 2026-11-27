import React, { useState } from 'react'

import './Patient_Info.css'
import Disease_Navbar from '../../components/disease_navbar/Disease_Navbar'
import Section from '../../components/section/Section'
import Button from '../../components/button/Button'
import General_Health_Input from './sections/General_Health_Input'
import { Outlet, useNavigate } from 'react-router-dom'
import { apiRequest } from '../../lib/api'

export default function Patient_Info({ onSave }) {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({})
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState('')

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormValues((currentValues) => ({
        ...currentValues,
        [name]: value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        setSaving(true)
        const token = localStorage.getItem('authToken')
        try {
            const { user } = await apiRequest('/auth/me', { token })
            const labValues = {}
            Object.entries(formValues).forEach(([key, value]) => {
                if (key.includes(':') && value !== '') {
                    labValues[key] = Number.isNaN(Number(value)) ? value : Number(value)
                }
            })

            const systolic = Number(formValues['blood-pressure-systolic'])
            const diastolic = Number(formValues['blood-pressure-diastolic'])
            const heartRate = Number(formValues['heart-rate-bpm'])
            const bloodGlucose = Number(formValues['blood-glucose-mmg/dl'])
            const profile = user.profile ?? {}
            const dob = profile.dateOfBirth ? new Date(profile.dateOfBirth) : null
            const payload = {
                demographics: {
                    name: user.name,
                    ...(dob ? { dateOfBirth: dob.toISOString() } : {}),
                    sex: String(profile.gender ?? '').toLowerCase() === 'male'
                        ? 'male'
                        : String(profile.gender ?? '').toLowerCase() === 'female' ? 'female' : 'unknown',
                },
                vitals: {
                    ...(Number.isFinite(systolic) && systolic > 0 ? { systolicBp: systolic } : {}),
                    ...(Number.isFinite(diastolic) && diastolic > 0 ? { diastolicBp: diastolic } : {}),
                    ...(Number.isFinite(heartRate) && heartRate > 0 ? { heartRate } : {}),
                    ...(Number.isFinite(bloodGlucose) && bloodGlucose > 0 ? { bloodGlucose } : {}),
                    ...(profile.heightCm && profile.weightKg
                        ? { bmi: Number((profile.weightKg / ((profile.heightCm / 100) ** 2)).toFixed(1)) }
                        : {}),
                },
                clinical: {
                    diabetes: profile.medicalCondition === 'Diabetes',
                    hypertension: profile.medicalCondition === 'Hypertension',
                    smokingStatus: profile.smokingStatus === 'Yes' ? 'current' : 'never',
                    labValues,
                },
            }

            let existingId = localStorage.getItem('procuraPatientId')
            if (!/^[a-f\d]{24}$/i.test(existingId ?? '')) {
                if (existingId) {
                    localStorage.removeItem('procuraPatientId')
                }
                const { patients } = await apiRequest('/patients', { token })
                const latestPatientId = patients[0]?._id ?? patients[0]?.id
                if (typeof latestPatientId === 'string' && /^[a-f\d]{24}$/i.test(latestPatientId)) {
                    existingId = latestPatientId
                } else {
                    existingId = null
                }
            }
            if (!existingId) {
                localStorage.removeItem('procuraPatientId')
            }
            const result = existingId
                ? await apiRequest(`/patients/${existingId}`, { method: 'PUT', token, body: JSON.stringify(payload) })
                : await apiRequest('/patients', { method: 'POST', token, body: JSON.stringify(payload) })
            const patientId = result.patient?._id ?? result.patient?.id
            if (typeof patientId !== 'string' || !/^[a-f\d]{24}$/i.test(patientId)) {
                throw new Error('Patient was saved, but the API did not return a valid patient ID.')
            }
            localStorage.setItem('procuraPatientId', patientId)
            onSave?.(formValues)
        } catch (requestError) {
            setError(requestError.message)
            setSaving(false)
            return
        }
        setSaving(false)
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

                   
                </div>

                <div className="patient-info-save-row">
                    <Section
                    title={'Save the new data:'}
                    subtitle={'The new data will contribute to the predictions and your health tracking.'}
                    >
                        <div className="patient-info-save-content">
                            
                            <Button
                            type="submit"
                            buttonContent={saving ? 'Saving...' : 'Save Data'}
                            disabled={saving}
                            />
                            {error && <p role='alert' style={{ color: '#b91c1c' }}>{error}</p>}
                            
                        </div>
                    </Section>
                </div>
            </div>
        </form>
    </div>
  )
}
