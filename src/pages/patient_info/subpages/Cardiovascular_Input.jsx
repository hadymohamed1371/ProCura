
import React from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'
import Section from '../../../components/section/Section'
import General_Health_Input from '../sections/General_Health_Input'
import './Cardiovascular_Input.css'

export default function Cardiovascular_Input() {
    const { formValues, handleInputChange } = useOutletContext()
    const navigate = useNavigate()

    return (
        <div className="cardiovascular-input-page">

            <Section title="Cardiovascular">

                <div className="cardiovascular-section-grid">

                    {/* Column 1: Cholesterol */}
                    <div className="cardiovascular-cholesterol-column">

                        <div className="input-fields-container">

                            <div className="input-container">
                                <div className="label-input">
                                    <label
                                        htmlFor="cardiovascular-cholesterol"
                                        className="input-label"
                                    >
                                        Cholesterol:
                                    </label>

                                    <select
                                        id="cardiovascular-cholesterol"
                                        name="cardiovascular:cholesterol"
                                        className="input-field"
                                        value={formValues['cardiovascular:cholesterol'] ?? ''}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Cholesterol Level</option>
                                        <option value="1">Normal</option>
                                        <option value="2">Above Normal</option>
                                        <option value="3">Well Above Normal</option>
                                    </select>
                                </div>

                                <p className="description">
                                    Cholesterol level based on the patient's medical test results.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Column 2: General Health Information */}
                    <div className="cardiovascular-profile-notice">

                        <div className="cardiovascular-notice-icon">
                            <i className="fa-solid fa-circle-info"></i>
                        </div>

                        <div className="cardiovascular-notice-content">
                            <h3>General cardiovascular Information</h3>

                            <p>
                                Your general cardiovascular information is already
                                available in your Profile. You can visit your
                                Profile to view or update these details.
                            </p>

                            <button
                                type="button"
                                className="cardiovascular-profile-button"
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
                className="cardiovascular-general-health"
            />

        </div>
    )
}
