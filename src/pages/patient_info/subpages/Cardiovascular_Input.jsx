import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Section from '../../../components/section/Section'
import General_Health_Input from '../sections/General_Health_Input'
import './Cardiovascular_Input.css'

export default function Cardiovascular_Input() {
    const { formValues, handleInputChange } = useOutletContext()

    return (
        <div className="cardiovascular-input-page">

            <div className="cardiovascular-sections-grid">

                {/* Blood Pressure */}
                <Section title="Blood Pressure">
                    <div className="input-fields-container">

                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="cardiovascular-ap-hi" className="input-label">Ap_Hi:</label>
                                <input
                                    type="number"
                                    id="cardiovascular-ap-hi"
                                    name="cardiovascular:ap_hi"
                                    placeholder="Enter systolic blood pressure"
                                    className="input-field"
                                    value={formValues['cardiovascular:ap_hi'] ?? ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <p className="description">Systolic blood pressure, measured in mmHg.</p>
                        </div>

                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="cardiovascular-ap-lo" className="input-label">Ap_Lo:</label>
                                <input
                                    type="number"
                                    id="cardiovascular-ap-lo"
                                    name="cardiovascular:ap_lo"
                                    placeholder="Enter diastolic blood pressure"
                                    className="input-field"
                                    value={formValues['cardiovascular:ap_lo'] ?? ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <p className="description">Diastolic blood pressure, measured in mmHg.</p>
                        </div>

                    </div>
                </Section>

                {/* Blood Test Results */}
                <Section title="Blood Test Results">
                    <div className="input-fields-container">

                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="cardiovascular-cholesterol" className="input-label">Cholesterol:</label>
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
                            <p className="description">Cholesterol level based on the patient's medical test results.</p>
                        </div>

                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="cardiovascular-gluc" className="input-label">Glucose:</label>
                                <select
                                    id="cardiovascular-gluc"
                                    name="cardiovascular:gluc"
                                    className="input-field"
                                    value={formValues['cardiovascular:gluc'] ?? ''}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Glucose Level</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Above Normal</option>
                                    <option value="3">Well Above Normal</option>
                                </select>
                            </div>
                            <p className="description">Blood glucose level based on the patient's medical test results.</p>
                        </div>

                    </div>
                </Section>

                {/* Lifestyle & Habits */}
                <Section title="Lifestyle & Habits">
                    <div className="input-fields-container">

                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="cardiovascular-smoke" className="input-label">Smoke:</label>
                                <select
                                    id="cardiovascular-smoke"
                                    name="cardiovascular:smoke"
                                    className="input-field"
                                    value={formValues['cardiovascular:smoke'] ?? ''}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Smoking Status</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient is a current smoker.</p>
                        </div>

                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="cardiovascular-alco" className="input-label">Alcohol:</label>
                                <select
                                    id="cardiovascular-alco"
                                    name="cardiovascular:alco"
                                    className="input-field"
                                    value={formValues['cardiovascular:alco'] ?? ''}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Alcohol Consumption</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient consumes alcohol.</p>
                        </div>

                    </div>
                </Section>

            </div>

            <General_Health_Input
                formValues={formValues}
                onInputChange={handleInputChange}
                className="cardiovascular-general-health"
            />

        </div>
    )
}