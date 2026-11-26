import React from 'react'
import Section from '../../../components/section/Section'
import { useOutletContext } from 'react-router-dom'
import General_Health_Input from '../sections/General_Health_Input'
import './Chronic_Obstructive_Pulmonary_Input.css'

export default function Chronic_Obstructive_Pulmonary_Input() {
    const { formValues, handleInputChange } = useOutletContext()

    return (
        <div className="copd-input-page">
            <div className="copd-sections-grid">

                
                <Section title="Body Measurements">
                    <div className="input-fields-container">

                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="copd-bmi" className="input-label">BMI:</label>
                                <input
                                    type="number"
                                    step="any"
                                    id="copd-bmi"
                                    name="copd:BMI"
                                    placeholder="Enter Your BMI"
                                    className="input-field"
                                    value={formValues['copd:BMI'] ?? ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <p className="description">
                                Body Mass Index, calculated from the patient's height and weight.
                            </p>
                        </div>

                    </div>
                </Section>

               
                <Section title="Smoking Habits">
                    <div className="input-fields-container">

                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="copd-smokday2" className="input-label">Smoking Frequency:</label>
                                <select
                                    id="copd-smokday2"
                                    name="copd:SMOKDAY2"
                                    className="input-field"
                                    value={formValues['copd:SMOKDAY2'] ?? ''}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Smoking Frequency</option>
                                    <option value="0">Never Smoked</option>
                                    <option value="1">Every Day</option>
                                    <option value="2">Some Days</option>
                                    <option value="3">Not at All / Former Smoker</option>
                                </select>
                            </div>
                            <p className="description">
                                Indicates how frequently the patient currently smokes or whether they have never smoked.
                            </p>
                        </div>

                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="copd-smoke100" className="input-label">Smoked 100 Cigarettes:</label>
                                <select
                                    id="copd-smoke100"
                                    name="copd:SMOKE100"
                                    className="input-field"
                                    value={formValues['copd:SMOKE100'] ?? ''}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select an Option</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <p className="description">
                                Indicates whether the patient has smoked at least 100 cigarettes in their entire life.
                            </p>
                        </div>

                    </div>
                </Section>

                
                <Section title="Health & Activity">
                    <div className="input-fields-container">

                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="copd-exerany2" className="input-label">Physical Activity:</label>
                                <select
                                    id="copd-exerany2"
                                    name="copd:EXERANY2"
                                    className="input-field"
                                    value={formValues['copd:EXERANY2'] ?? ''}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select an Option</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <p className="description">
                                Indicates whether the patient participated in any physical activity or exercise during the past 30 days.
                            </p>
                        </div>

                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="copd-genhlth" className="input-label">General Health:</label>
                                <select
                                    id="copd-genhlth"
                                    name="copd:GENHLTH"
                                    className="input-field"
                                    value={formValues['copd:GENHLTH'] ?? ''}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select General Health</option>
                                    <option value="1">Excellent</option>
                                    <option value="2">Very Good</option>
                                    <option value="3">Good</option>
                                    <option value="4">Fair</option>
                                    <option value="5">Poor</option>
                                </select>
                            </div>
                            <p className="description">
                                Patient's overall health condition, ranging from excellent to poor.
                            </p>
                        </div>

                    </div>
                </Section>

            </div>
              <General_Health_Input
                            formValues={formValues}
                            onInputChange={handleInputChange}
                            className="copd-general-health"
                        />
        </div>
    )
}