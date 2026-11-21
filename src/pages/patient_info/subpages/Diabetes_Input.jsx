import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Section from '../../../components/section/Section'

export default function Diabetes_Input() {
    const {formValues, handleInputChange} = useOutletContext()

    return (
        <Section 
        title="Diabetes"
        />
        
                        
    )
}
