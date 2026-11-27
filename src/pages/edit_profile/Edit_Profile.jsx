

import React, { useEffect, useState } from 'react'

import './Edit_Profile.css'
import { useNavigate } from 'react-router-dom'

import Head_Title from '../../components/head_title/Head_Title'
import Profile_Page_Title_logo from '../../assets/icons/Profile_Page_Title_logo.svg'
import Section from '../../components/section/Section'
import Button from '../../components/button/Button'
// Icons
import Date_Icon from '../../assets/icons/Profile_Date.svg'
import Gender_Icon from '../../assets/icons/Profile_Gender.svg'
import Height_Icon from '../../assets/icons/Profile_Height.svg'
import Weight_Icon from '../../assets/icons/Profile_Weight.svg'

import Activity_Icon from '../../assets/icons/Profile_ActivityLevel.svg'
import Smoking_Icon from '../../assets/icons/Profile_Smoking_Health.svg'
import Alcohol_Icon from '../../assets/icons/Profile_Alcohol_Health.svg'
import Medical_Condition_Icon from '../../assets/icons/Profile_Medical_Health.svg'
import { apiRequest } from '../../lib/api'

const MIN_HEIGHT_CM = 50
const MIN_WEIGHT_KG = 5
export default function Edit_Profile() {
    
    const navigate = useNavigate()
    const [profileImage, setProfileImage] = useState(Profile_Page_Title_logo)
    const [profile, setProfile] = useState({
        name: 'name', email: 'email', city: 'Alexandria', country: 'Egypt',
        dateOfBirth: '', gender: 'Female', height: '', weight: '',
        activityLevel: 'Moderate', smokingStatus: 'No', alcoholStatus: 'No',
        medicalCondition: 'None',
    })
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (!token) return
        apiRequest('/auth/me', { token })
            .then(({ user }) => {
                const p = user.profile ?? {}
                setProfile({
                    name: user.name ?? '',
                    email: user.email ?? '',
                    city: p.city ?? 'Alexandria',
                    country: p.country ?? 'Egypt',
                    dateOfBirth: p.dateOfBirth ? p.dateOfBirth.slice(0, 10) : '',
                    gender: p.gender ?? 'Female',
                    height: p.heightCm ?? '',
                    weight: p.weightKg ?? '',
                    activityLevel: p.activityLevel ?? 'Moderate',
                    smokingStatus: p.smokingStatus ?? 'No',
                    alcoholStatus: p.alcoholStatus ?? 'No',
                    medicalCondition: p.medicalCondition ?? 'None',
                })
            })
            .catch((requestError) => setError(requestError.message))
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        setSubmitting(true)
        const token = localStorage.getItem('authToken')
        try {
            const result = await apiRequest('/auth/me', {
                method: 'PUT',
                token,
                body: JSON.stringify({
                    name: profile.name,
                    email: profile.email,
                    profile: {
                        city: profile.city,
                        country: profile.country,
                        dateOfBirth: profile.dateOfBirth || undefined,
                        gender: profile.gender,
                        heightCm: profile.height ? Number(profile.height) : undefined,
                        weightKg: profile.weight ? Number(profile.weight) : undefined,
                        activityLevel: profile.activityLevel,
                        smokingStatus: profile.smokingStatus,
                        alcoholStatus: profile.alcoholStatus,
                        medicalCondition: profile.medicalCondition,
                    },
                }),
            })
            localStorage.setItem('authUser', JSON.stringify(result.user))
            navigate('/profile')
        } catch (requestError) {
            setError(requestError.message)
        } finally {
            setSubmitting(false)
        }
    }

const handleImageUpload = (event) => {
    const file = event.target.files[0]

    if (file) {
        setProfileImage(URL.createObjectURL(file))
    }
}

    const openDatePicker = (event) => {
        try {
            event.currentTarget.showPicker?.()
        } catch {

        }
    }
    return (
        <div className='edit-profile-page'>

            <Head_Title
                title={'Edit Profile'}
                pageTitle={true}
                subtitle={'Update your personal information and health details.'}
                logo={Profile_Page_Title_logo}
            />

            <form className='edit-profile-form' onSubmit={handleSubmit}>

                {/* Profile Information */}
                <div className='profile-info-section'>
                    <Section>

                        <div className='profile-info-layout'>

                            <div className='profile-photo'>
    <img
        className='profile-photo-image'
        src={profileImage}
        alt='Profile photo'
    />

    <input
        type='file'
        id='profile-photo'
        name='profile-photo'
        accept='image/*'
        className='visually-hidden'
        onChange={handleImageUpload}
    />

    <label htmlFor='profile-photo' className='upload-photo-label'>
        Upload
    </label>
</div>

                            <div className='profile-fields'>

                                <div className='form-group'>
                                    <label htmlFor='full-name'>Full Name</label>
                                    <input
                                        type='text'
                                        id='full-name'
                                        name='full-name'
                                        placeholder='Enter your name'
                                        value={profile.name}
                                        onChange={(event) => setProfile((current) => ({ ...current, name: event.target.value }))}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        placeholder='Enter your Email'
                                        value={profile.email}
                                        onChange={(event) => setProfile((current) => ({ ...current, email: event.target.value }))}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='city'>City</label>
                                    <input
                                        type='text'
                                        id='city'
                                        name='city'
                                                value={profile.city}
                                                onChange={(event) => setProfile((current) => ({ ...current, city: event.target.value }))}

                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='country'>Country</label>
                                    <input
                                        type='text'
                                        id='country'
                                        name='country'
                                                value={profile.country}
                                                onChange={(event) => setProfile((current) => ({ ...current, country: event.target.value }))}

                                    />
                                </div>

                            </div>

                            <div className='profile-buttons'>
    <Button
        buttonContent='Save'
        appearance='default'
        type='submit'
        disabled={submitting}
    />

    <Button
        buttonContent='Cancel'
        appearance='cancel'
        type='button'
        actionOnClick={() => navigate('/profile')}
    />
</div>

                        </div>

                    </Section>
                </div>


                {/* Personal Information */}
                <Section title={'Personal Information'}>

                    <div className='details-fields'>

                        <div className='form-group'>
                            <label htmlFor='date-of-birth'>Date of birth</label>

                            <div className='input-with-icon'>
                                <img src={Date_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <input
                                    type='date'
                                    id='date-of-birth'
                                    name='date-of-birth'
                                    onClick={openDatePicker}
                                    value={profile.dateOfBirth}
                                    onChange={(event) => setProfile((current) => ({ ...current, dateOfBirth: event.target.value }))}
                                />
                            </div>
                        </div>


                        <div className='form-group'>
                            <label htmlFor='gender'>Gender</label>

                            <div className='input-with-icon'>
                                <img src={Gender_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <select id='gender' name='gender' value={profile.gender} onChange={(event) => setProfile((current) => ({ ...current, gender: event.target.value }))}>
                                    <option value='Female'>Female</option>
                                    <option value='Male'>Male</option>
                                </select>
                            </div>
                        </div>


                        <div className='form-group'>
                            <label htmlFor='height'>Height (cm)</label>

                            <div className='input-with-icon'>
                                <img src={Height_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <input
                                    type='number'
                                    id='height'
                                    name='height'
                                    placeholder='165 cm'
                                    min={MIN_HEIGHT_CM}
                                    step='0.1'
                                    value={profile.height}
                                    onChange={(event) => setProfile((current) => ({ ...current, height: event.target.value }))}
                                />
                            </div>
                        </div>


                        <div className='form-group'>
                            <label htmlFor='weight'>Weight (Kg)</label>

                            <div className='input-with-icon'>
                                <img src={Weight_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <input
                                    type='number'
                                    id='weight'
                                    name='weight'
                                    placeholder='60 kg'
                                    min={MIN_WEIGHT_KG}
                                    step='0.1'
                                    value={profile.weight}
                                    onChange={(event) => setProfile((current) => ({ ...current, weight: event.target.value }))}
                                />
                            </div>
                        </div>

                    </div>

                </Section>


                {/* Health & Lifestyle */}
                <Section title={'Health & Lifestyle'}>

                    <div className='details-fields'>

                        <div className='form-group'>
                            <label htmlFor='activity-level'>Activity Level</label>

                            <div className='input-with-icon'>
                                <img src={Activity_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <select id='activity-level' name='activity-level' value={profile.activityLevel} onChange={(event) => setProfile((current) => ({ ...current, activityLevel: event.target.value }))}>
                                    <option value='Low'>Low</option>
                                    <option value='Moderate'>Moderate</option>
                                    <option value='High'>High</option>
                                </select>
                            </div>
                        </div>


                        <div className='form-group'>
                            <label htmlFor='smoking'>Smoking</label>

                            <div className='input-with-icon'>
                                <img src={Smoking_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <select id='smoking' name='smoking' value={profile.smokingStatus} onChange={(event) => setProfile((current) => ({ ...current, smokingStatus: event.target.value }))}>
                                    <option value='No'>No</option>
                                    <option value='Yes'>Yes</option>
                                </select>
                            </div>
                        </div>


                        <div className='form-group'>
                            <label htmlFor='alcohol'>Alcohol</label>

                            <div className='input-with-icon'>
                                <img src={Alcohol_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <select id='alcohol' name='alcohol' value={profile.alcoholStatus} onChange={(event) => setProfile((current) => ({ ...current, alcoholStatus: event.target.value }))}>
                                    <option value='No'>No</option>
                                    <option value='Yes'>Yes</option>
                                </select>
                            </div>
                        </div>


                        <div className='form-group'>
                            <label htmlFor='medical-condition'>Medical Condition</label>

                            <div className='input-with-icon'>
                                <img src={Medical_Condition_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <select id='medical-condition' name='medical-condition' value={profile.medicalCondition} onChange={(event) => setProfile((current) => ({ ...current, medicalCondition: event.target.value }))}>
                                    <option value='None'>None</option>
                                    <option value='Diabetes'>Diabetes</option>
                                    <option value='Heart Disease'>Heart Disease</option>
                                    <option value='Hypertension'>Hypertension</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>
                        </div>

                    </div>

                </Section>
                {error && <p role='alert' style={{ color: '#b91c1c' }}>{error}</p>}

            </form>

        </div>
    )
}
 
