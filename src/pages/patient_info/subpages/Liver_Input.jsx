
import React from 'react'
import Section from '../../../components/section/Section';
import { useOutletContext } from 'react-router-dom';
import General_Health_Input from '../sections/General_Health_Input';
import './Liver_Input.css';

export default function Liver_Input() {
    const { formValues, handleInputChange } = useOutletContext()

    return (
        <div className="liver-input-page">

            <Section title="Liver ">
                <div className="input-fields-container">

                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="liver-total-bilirubin" className="input-label">
                                Total Bilirubin:
                            </label>
                            <input
                                type="number"
                                id="liver-total-bilirubin"
                                name="liver:total_bilirubin"
                                placeholder="Enter Total Bilirubin"
                                className="input-field"
                                value={formValues['liver:total_bilirubin'] ?? ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <p className="description">
                            Total bilirubin level in the blood, measured in mg/dL.
                        </p>
                    </div>

                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="liver-direct-bilirubin" className="input-label">
                                Direct Bilirubin:
                            </label>
                            <input
                                type="number"
                                id="liver-direct-bilirubin"
                                name="liver:direct_bilirubin"
                                placeholder="Enter Direct Bilirubin"
                                className="input-field"
                                value={formValues['liver:direct_bilirubin'] ?? ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <p className="description">
                            Direct bilirubin level in the blood, measured in mg/dL.
                        </p>
                    </div>

                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="liver-alkaline-phosphotase" className="input-label">
                                Alkaline Phosphatase (ALP):
                            </label>
                            <input
                                type="number"
                                id="liver-alkaline-phosphotase"
                                name="liver:alkaline_phosphotase"
                                placeholder="Enter Alkaline Phosphotase"
                                className="input-field"
                                value={formValues['liver:alkaline_phosphotase'] ?? ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <p className="description">
                            Alkaline phosphatase (ALP) enzyme level, measured in IU/L.
                        </p>
                    </div>

                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="liver-alamine-aminotransferase" className="input-label">
                                ALT (Liver Enzyme):
                            </label>
                            <input
                                type="number"
                                id="liver-alamine-aminotransferase"
                                name="liver:alamine_aminotransferase"
                                placeholder="Enter ALT Level"
                                className="input-field"
                                value={formValues['liver:alamine_aminotransferase'] ?? ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <p className="description">
                            Alanine aminotransferase (ALT/SGPT) enzyme level, measured in IU/L.
                        </p>
                    </div>

                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="liver-aspartate-aminotransferase" className="input-label">
                                AST (SGOT):
                            </label>
                            <input
                                type="number"
                                id="liver-aspartate-aminotransferase"
                                name="liver:aspartate_aminotransferase"
                                placeholder="Enter AST Level"
                                className="input-field"
                                value={formValues['liver:aspartate_aminotransferase'] ?? ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <p className="description">
                            Aspartate aminotransferase (AST/SGOT) enzyme level, measured in IU/L.
                        </p>
                    </div>

                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="liver-total-proteins" className="input-label">
                                Total Proteins:
                            </label>
                            <input
                                type="number"
                                id="liver-total-proteins"
                                name="liver:total_proteins"
                                placeholder="Enter Total Proteins"
                                className="input-field"
                                value={formValues['liver:total_proteins'] ?? ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <p className="description">
                            Total protein level in the blood, measured in g/dL.
                        </p>
                    </div>

                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="liver-albumin" className="input-label">
                                Albumin:
                            </label>
                            <input
                                type="number"
                                id="liver-albumin"
                                name="liver:albumin"
                                placeholder="Enter Albumin Level"
                                className="input-field"
                                value={formValues['liver:albumin'] ?? ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <p className="description">
                            Albumin level in the blood, measured in g/dL.
                        </p>
                    </div>

                    <div className="input-container">
                        <div className="label-input">
                            <label htmlFor="liver-albumin-and-globulin-ratio" className="input-label">
                                Albumin and Globulin Ratio:
                            </label>
                            <input
                                type="number"
                                id="liver-albumin-and-globulin-ratio"
                                name="liver:albumin_and_globulin_ratio"
                                placeholder="Enter Albumin and Globulin Ratio"
                                className="input-field"
                                value={formValues['liver:albumin_and_globulin_ratio'] ?? ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <p className="description">
                            Ratio of albumin to globulin in the blood.
                        </p>
                    </div>

                </div>
            </Section>

            <General_Health_Input
                formValues={formValues}
                onInputChange={handleInputChange}
                className="liver-general-health"
            />
        </div>
    )
}