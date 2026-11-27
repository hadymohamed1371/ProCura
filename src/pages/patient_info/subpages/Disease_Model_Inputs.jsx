import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Section from '../../../components/section/Section'

const cardiovascularInputs = [
    {name: 'age', label: 'Age (years)', description: 'Patient age in years.', min: 1, max: 120, step: 1},
    {name: 'gender', label: 'Gender', description: 'Dataset coding: 1 = female, 2 = male.', options: [['1', 'Female'], ['2', 'Male']]},
    {name: 'height', label: 'Height (cm)', description: 'Height in centimeters.', min: 120, max: 220, step: 0.1},
    {name: 'weight', label: 'Weight (kg)', description: 'Weight in kilograms.', min: 40, max: 180, step: 0.1},
    {name: 'ap_hi', label: 'Systolic blood pressure (mmHg)', description: 'Systolic blood pressure.', min: 80, max: 220, step: 1},
    {name: 'ap_lo', label: 'Diastolic blood pressure (mmHg)', description: 'Diastolic blood pressure.', min: 40, max: 140, step: 1},
    {name: 'cholesterol', label: 'Cholesterol category', description: '1 = normal, 2 = above normal, 3 = well above normal.', options: [['1', '1 - Normal'], ['2', '2 - Above normal'], ['3', '3 - Well above normal']]},
    {name: 'gluc', label: 'Glucose category', description: '1 = normal, 2 = above normal, 3 = well above normal.', options: [['1', '1 - Normal'], ['2', '2 - Above normal'], ['3', '3 - Well above normal']]},
    {name: 'smoke', label: 'Smoking', description: '0 = no, 1 = yes.', options: [['0', 'No'], ['1', 'Yes']]},
    {name: 'alco', label: 'Alcohol use', description: '0 = no, 1 = yes.', options: [['0', 'No'], ['1', 'Yes']]},
    {name: 'active', label: 'Physically active', description: '0 = no, 1 = yes.', options: [['0', 'No'], ['1', 'Yes']]},
]

const MODEL_INPUTS = {
    cardiovascular: cardiovascularInputs,
    heart: cardiovascularInputs,
    copd: [
        {name: '_AGE80', label: 'Age (_AGE80)', description: 'Age in years; 80 represents age 80 or older.', min: 18, max: 80, step: 1},
        {name: 'SEXVAR', label: 'Sex (SEXVAR)', description: 'Survey code: 1 = male, 2 = female.', options: [['1', 'Male'], ['2', 'Female']]},
        {name: 'BMI', label: 'Body mass index (BMI)', description: 'BMI as a regular decimal value, not multiplied by 100.', min: 10, max: 80, step: 0.1},
        {name: 'SMOKDAY2', label: 'Current smoking frequency (SMOKDAY2)', description: '0 = never smoked, 1 = every day, 2 = some days, 3 = not at all/former smoker.', options: [['0', 'Never smoked'], ['1', 'Every day'], ['2', 'Some days'], ['3', 'Not at all / former smoker']]},
        {name: 'EXERANY2', label: 'Exercise in past 30 days (EXERANY2)', description: '1 = yes, 2 = no.', options: [['1', 'Yes'], ['2', 'No']]},
        {name: 'GENHLTH', label: 'General health (GENHLTH)', description: '1 = excellent, 2 = very good, 3 = good, 4 = fair, 5 = poor.', options: [['1', 'Excellent'], ['2', 'Very good'], ['3', 'Good'], ['4', 'Fair'], ['5', 'Poor']]},
    ],
    diabetes: [
        {name: 'HighBP', label: 'High blood pressure (HighBP)', description: 'Whether the patient has been told they have high blood pressure.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'HighChol', label: 'High cholesterol (HighChol)', description: 'Whether the patient has been told they have high cholesterol.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'CholCheck', label: 'Cholesterol check (CholCheck)', description: 'Whether cholesterol was checked within the past five years.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'BMI', label: 'Body mass index (BMI)', description: 'Body mass index.', min: 12, max: 98, step: 0.1},
        {name: 'Smoker', label: 'Smoker (Smoker)', description: 'Whether the patient has smoked at least 100 cigarettes in their lifetime.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'Stroke', label: 'Stroke history (Stroke)', description: 'Whether the patient has ever been told they had a stroke.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'HeartDiseaseorAttack', label: 'Heart disease or attack (HeartDiseaseorAttack)', description: 'History of coronary heart disease or myocardial infarction.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'PhysActivity', label: 'Physical activity (PhysActivity)', description: 'Any physical activity in the past 30 days, excluding a regular job.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'Fruits', label: 'Daily fruit consumption (Fruits)', description: 'Consumes fruit one or more times per day.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'Veggies', label: 'Daily vegetable consumption (Veggies)', description: 'Consumes vegetables one or more times per day.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'HvyAlcoholConsump', label: 'Heavy alcohol consumption (HvyAlcoholConsump)', description: 'CDC survey indicator for heavy alcohol consumption.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'AnyHealthcare', label: 'Healthcare coverage (AnyHealthcare)', description: 'Whether the patient has any kind of healthcare coverage.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'NoDocbcCost', label: 'Unable to see doctor due to cost (NoDocbcCost)', description: 'Could not see a doctor in the past 12 months because of cost.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'GenHlth', label: 'General health (GenHlth)', description: '1 = excellent, 2 = very good, 3 = good, 4 = fair, 5 = poor.', options: [['1', 'Excellent'], ['2', 'Very good'], ['3', 'Good'], ['4', 'Fair'], ['5', 'Poor']]},
        {name: 'MentHlth', label: 'Poor mental health days (MentHlth)', description: 'Number of days in the past 30 when mental health was not good.', min: 0, max: 30, step: 1},
        {name: 'PhysHlth', label: 'Poor physical health days (PhysHlth)', description: 'Number of days in the past 30 when physical health was not good.', min: 0, max: 30, step: 1},
        {name: 'DiffWalk', label: 'Difficulty walking (DiffWalk)', description: 'Serious difficulty walking or climbing stairs.', options: [['0', 'No'], ['1', 'Yes']]},
        {name: 'Sex', label: 'Sex (Sex)', description: 'Dataset code: 0 = female, 1 = male.', options: [['0', 'Female'], ['1', 'Male']]},
        {name: 'Age', label: 'Age category (Age)', description: 'CDC age band: 1 = 18–24, through 13 = 80 or older.', min: 1, max: 13, step: 1},
        {name: 'Education', label: 'Education category (Education)', description: 'CDC education category, 1–6.', min: 1, max: 6, step: 1},
        {name: 'Income', label: 'Income category (Income)', description: 'CDC income category, 1–8.', min: 1, max: 8, step: 1},
    ],
    liver: [
        {name: 'age', label: 'Age (years)', description: 'Patient age in years.', min: 1, max: 120, step: 1},
        {name: 'gender', label: 'Gender', description: 'The liver model accepts Male or Female.', options: [['Male', 'Male'], ['Female', 'Female']]},
        {name: 'total_bilirubin', label: 'Total bilirubin (mg/dL)', description: 'Total serum bilirubin concentration.', min: 0.05, max: 100, step: 0.01},
        {name: 'direct_bilirubin', label: 'Direct bilirubin (mg/dL)', description: 'Conjugated (direct) serum bilirubin concentration.', min: 0, max: 50, step: 0.01},
        {name: 'alkaline_phosphotase', label: 'Alkaline phosphatase (IU/L)', description: 'Serum alkaline phosphatase enzyme level.', min: 10, max: 5000, step: 1},
        {name: 'alamine_aminotransferase', label: 'Alanine aminotransferase / ALT (IU/L)', description: 'Serum ALT (also called SGPT) enzyme level.', min: 1, max: 5000, step: 1},
        {name: 'aspartate_aminotransferase', label: 'Aspartate aminotransferase / AST (IU/L)', description: 'Serum AST (also called SGOT) enzyme level.', min: 1, max: 10000, step: 1},
        {name: 'total_proteins', label: 'Total proteins (g/dL)', description: 'Total serum protein concentration.', min: 1, max: 20, step: 0.1},
        {name: 'albumin', label: 'Albumin (g/dL)', description: 'Serum albumin protein concentration.', min: 0.5, max: 12, step: 0.1},
        {name: 'albumin_and_globulin_ratio', label: 'Albumin / globulin ratio', description: 'Ratio of serum albumin to serum globulin.', min: 0.1, max: 10, step: 0.01},
    ],
}

export default function Disease_Model_Inputs({disease, title}) {
    const {formValues, handleInputChange} = useOutletContext()
    const fields = MODEL_INPUTS[disease]

    return (
        <Section title={title}>
            {disease === 'heart' && (
                <p className="description">
                    These are the available cardiovascular model inputs; this project does not have a separate Heart model yet.
                </p>
            )}
            <div className="input-fields-container">
                {fields.map((field) => {
                    const name = `${disease}.${field.name}`
                    const id = `${disease}-${field.name}`
                    return (
                        <div className="input-container" key={field.name}>
                            <div className="label-input">
                                <label htmlFor={id} className="input-label">{field.label}:</label>
                                {field.options ? (
                                    <select id={id} name={name} className="input-field" value={formValues[name] ?? ''} onChange={handleInputChange}>
                                        <option value="">Select</option>
                                        {field.options.map(([value, label]) => (
                                            <option key={value} value={value}>{label}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type="number"
                                        id={id}
                                        name={name}
                                        min={field.min}
                                        max={field.max}
                                        step={field.step}
                                        placeholder={`Enter ${field.label.toLowerCase()}`}
                                        className="input-field"
                                        value={formValues[name] ?? ''}
                                        onChange={handleInputChange}
                                    />
                                )}
                            </div>
                            <p className="description">{field.description}</p>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}
