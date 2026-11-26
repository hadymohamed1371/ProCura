
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Section from '../../../components/section/Section'
import './Diabetes_Input.css'
import General_Health_Input from '../sections/General_Health_Input'

export default function Diabetes_Input() {
    const { formValues, handleInputChange } = useOutletContext()

    return (
        <div className="diabetes-input-page">

            <div className="diabetes-sections-grid">

               
                <Section title="Medical Conditions">
                    <div className="input-fields-container">

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-highbp" className="input-label">High Blood Pressure:</label>
                                <select id="diabetes-highbp" name="diabetes:HighBP" className="input-field" value={formValues['diabetes:HighBP'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient has been diagnosed with high blood pressure.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-highchol" className="input-label">High Cholesterol:</label>
                                <select id="diabetes-highchol" name="diabetes:HighChol" className="input-field" value={formValues['diabetes:HighChol'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient has been diagnosed with high cholesterol.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-cholcheck" className="input-label">Cholesterol Check:</label>
                                <select id="diabetes-cholcheck" name="diabetes:CholCheck" className="input-field" value={formValues['diabetes:CholCheck'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient had their cholesterol checked within the past five years.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-smoker" className="input-label">Smoking Status:</label>
                                <select id="diabetes-smoker" name="diabetes:Smoker" className="input-field" value={formValues['diabetes:Smoker'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient has smoked at least 100 cigarettes in their lifetime.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-stroke" className="input-label">History of Stroke:</label>
                                <select id="diabetes-stroke" name="diabetes:Stroke" className="input-field" value={formValues['diabetes:Stroke'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient has ever been diagnosed with a stroke.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-heartdisease" className="input-label">Heart Disease or Heart Attack:</label>
                                <select id="diabetes-heartdisease" name="diabetes:HeartDiseaseorAttack" className="input-field" value={formValues['diabetes:HeartDiseaseorAttack'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient has a history of coronary heart disease or heart attack.</p>
                        </div>

                    </div>
                </Section>

                
                <Section title="Lifestyle & Habits">
                    <div className="input-fields-container">

                        
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-physactivity" className="input-label">Physical Activity:</label>
                                <select id="diabetes-physactivity" name="diabetes:PhysActivity" className="input-field" value={formValues['diabetes:PhysActivity'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient participates in physical activities outside their regular job.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-fruits" className="input-label">Fruit Consumption:</label>
                                <select id="diabetes-fruits" name="diabetes:Fruits" className="input-field" value={formValues['diabetes:Fruits'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient consumes fruit at least once per day.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-veggies" className="input-label">Vegetable Consumption:</label>
                                <select id="diabetes-veggies" name="diabetes:Veggies" className="input-field" value={formValues['diabetes:Veggies'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient consumes vegetables at least once per day.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-alcohol" className="input-label">Heavy Alcohol Consumption:</label>
                                <select id="diabetes-alcohol" name="diabetes:HvyAlcoholConsump" className="input-field" value={formValues['diabetes:HvyAlcoholConsump'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient meets the model's definition of heavy alcohol consumption.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-healthcare" className="input-label">Healthcare Coverage:</label>
                                <select id="diabetes-healthcare" name="diabetes:AnyHealthcare" className="input-field" value={formValues['diabetes:AnyHealthcare'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient has any form of healthcare coverage.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-nodocbcost" className="input-label">Unable to See a Doctor Due to Cost:</label>
                                <select id="diabetes-nodocbcost" name="diabetes:NoDocbcCost" className="input-field" value={formValues['diabetes:NoDocbcCost'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient was unable to visit a doctor because of cost during the past 12 months.</p>
                        </div>

                    </div>
                </Section>

               
                <Section title="Health Assessment">
                    <div className="input-fields-container">

                        
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-bmi" className="input-label">BMI:</label>
                                <input type="number" id="diabetes-bmi" name="diabetes:BMI" placeholder="Enter BMI" className="input-field" value={formValues['diabetes:BMI'] ?? ''} onChange={handleInputChange} />
                            </div>
                            <p className="description">Body Mass Index (BMI), calculated using the patient's height and weight.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-genhlth" className="input-label">General Health:</label>
                                <select id="diabetes-genhlth" name="diabetes:GenHlth" className="input-field" value={formValues['diabetes:GenHlth'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select General Health</option>
                                    <option value="1">Excellent</option>
                                    <option value="2">Very Good</option>
                                    <option value="3">Good</option>
                                    <option value="4">Fair</option>
                                    <option value="5">Poor</option>
                                </select>
                            </div>
                            <p className="description">Patient's overall health condition, ranging from excellent to poor.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-menthlth" className="input-label">Poor Mental Health Days:</label>
                                <input type="number" min="0" max="30" id="diabetes-menthlth" name="diabetes:MentHlth" placeholder="Enter Number of Days (0-30)" className="input-field" value={formValues['diabetes:MentHlth'] ?? ''} onChange={handleInputChange} />
                            </div>
                            <p className="description">Number of days during the past 30 days when the patient's mental health was not good.</p>
                        </div>

                      
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-physhlth" className="input-label">Poor Physical Health Days:</label>
                                <input type="number" min="0" max="30" id="diabetes-physhlth" name="diabetes:PhysHlth" placeholder="Enter Number of Days (0-30)" className="input-field" value={formValues['diabetes:PhysHlth'] ?? ''} onChange={handleInputChange} />
                            </div>
                            <p className="description">Number of days during the past 30 days when the patient's physical health was not good.</p>
                        </div>

                        
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-diffwalk" className="input-label">Difficulty Walking:</label>
                                <select id="diabetes-diffwalk" name="diabetes:DiffWalk" className="input-field" value={formValues['diabetes:DiffWalk'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select an Option</option>
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                            <p className="description">Indicates whether the patient has serious difficulty walking or climbing stairs.</p>
                        </div>

                    </div>
                </Section>

               
                <Section title="Personal Information">
                    <div className="input-fields-container">

                        {/* Sex */}
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-sex" className="input-label">Sex:</label>
                                <select id="diabetes-sex" name="diabetes:Sex" className="input-field" value={formValues['diabetes:Sex'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select Sex</option>
                                    <option value="0">Female</option>
                                    <option value="1">Male</option>
                                </select>
                            </div>
                            <p className="description">Biological sex recorded for the patient.</p>
                        </div>

                      
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-age" className="input-label">Age Category:</label>
                                <select id="diabetes-age" name="diabetes:Age" className="input-field" value={formValues['diabetes:Age'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select Age Category</option>
                                    <option value="1">18–24</option>
                                    <option value="2">25–29</option>
                                    <option value="3">30–34</option>
                                    <option value="4">35–39</option>
                                    <option value="5">40–44</option>
                                    <option value="6">45–49</option>
                                    <option value="7">50–54</option>
                                    <option value="8">55–59</option>
                                    <option value="9">60–64</option>
                                    <option value="10">65–69</option>
                                    <option value="11">70–74</option>
                                    <option value="12">75–79</option>
                                    <option value="13">80 or older</option>
                                </select>
                            </div>
                            <p className="description">Select the patient's age group used by the model.</p>
                        </div>

                       
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-education" className="input-label">Education Level:</label>
                                <select id="diabetes-education" name="diabetes:Education" className="input-field" value={formValues['diabetes:Education'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select Education Level</option>
                                    <option value="1">Never attended school or only kindergarten</option>
                                    <option value="2">Grades 1–8</option>
                                    <option value="3">Grades 9–11</option>
                                    <option value="4">High school graduate or GED</option>
                                    <option value="5">College 1–3 years</option>
                                    <option value="6">College 4 years or more</option>
                                </select>
                            </div>
                            <p className="description">Highest level of education completed by the patient.</p>
                        </div>

                        
                        <div className="input-container">
                            <div className="label-input">
                                <label htmlFor="diabetes-income" className="input-label">Income Category:</label>
                                <select id="diabetes-income" name="diabetes:Income" className="input-field" value={formValues['diabetes:Income'] ?? ''} onChange={handleInputChange}>
                                    <option value="">Select Income Category</option>
                                    <option value="1">Less than $10,000</option>
                                    <option value="2">$10,000–$14,999</option>
                                    <option value="3">$15,000–$19,999</option>
                                    <option value="4">$20,000–$24,999</option>
                                    <option value="5">$25,000–$34,999</option>
                                    <option value="6">$35,000–$49,999</option>
                                    <option value="7">$50,000–$74,999</option>
                                    <option value="8">$75,000 or more</option>
                                </select>
                            </div>
                            <p className="description">Select the patient's annual household income category.</p>
                        </div>

                    </div>
                </Section>

                     </div>

            <General_Health_Input
                formValues={formValues}
                onInputChange={handleInputChange}
                className="diabetes-general-health"
            />

        </div>
    )
}
