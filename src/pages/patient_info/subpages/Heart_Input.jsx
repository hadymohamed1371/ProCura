



import React from 'react'
import Section from '../../../components/section/Section'
import { useOutletContext, useNavigate } from 'react-router-dom'
import General_Health_Input from '../sections/General_Health_Input'
import './Heart_Input.css'

export default function Heart_Input() {
    const { formValues, handleInputChange } = useOutletContext()
    const navigate = useNavigate()

    return (
        <div className="heart-input-page">

            <Section title="Heart">

                <div className="heart-section-grid">

                    
                    <div className="heart-cholesterol-column">

                        <div className="input-fields-container">

                            <div className="input-container">
                                <div className="label-input">
                                    <label
                                        htmlFor="heart-cholesterol"
                                        className="input-label"
                                    >
                                        Cholesterol Level:
                                    </label>

                                    <select
                                        id="heart-cholesterol"
                                        name="heart:cholesterol"
                                        className="input-field"
                                        value={formValues['heart:cholesterol'] ?? ''}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select cholesterol level</option>
                                        <option value="1">Normal</option>
                                        <option value="2">Above normal</option>
                                        <option value="3">Well above normal</option>
                                    </select>
                                </div>

                                <p className="description">
                                    Select: Normal, Above normal, or Well above normal.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="heart-profile-notice">

                        <div className="heart-notice-icon">
                            <i className="fa-solid fa-circle-info"></i>
                        </div>

                        <div className="heart-notice-content">
                            <h3>General Heart Information</h3>

                            <p>
                                Your general Heart information is already
                                available in your Profile. You can visit your
                                Profile to view or update these details.
                            </p>

                            <button
                                type="button"
                                className="heart-profile-button"
                                onClick={() => navigate('/profile')}
                            >
                                <i className="fa-solid fa-user"></i>
                                Go to Profile
                            </button>
                        </div>

                    </div>

                </div>

            </Section>

            {/* General Health Data */}
            <General_Health_Input
                formValues={formValues}
                onInputChange={handleInputChange}
                className="heart-general-health"
            />

        </div>
    )
}
