
// import React from 'react'

// import './Edit_Profile.css'

// import Head_Title from '../../components/head_title/Head_Title'
// import Profile_Page_Title_logo from '../../assets/icons/Profile_Page_Title_logo.svg'
// import Section from '../../components/section/Section'
// import Button from '../../components/button/Button'


// // Icons
// import Date_Icon from '../../assets/icons/Profile_Date.svg'
// import Gender_Icon from '../../assets/icons/Profile_Gender.svg'
// import Height_Icon from '../../assets/icons/Profile_Height.svg'
// import Weight_Icon from '../../assets/icons/Profile_Weight.svg'

// import Activity_Icon from '../../assets/icons/Profile_ActivityLevel.svg'
// import Smoking_Icon from '../../assets/icons/Profile_Smoking_Health.svg'
// import Alcohol_Icon from '../../assets/icons/Profile_Alcohol_Health.svg'
// import Medical_Condition_Icon from '../../assets/icons/Profile_Medical_Health.svg'

// export default function Edit_Profile() {
//     return (
//         <div className='edit-profile-page'>

//             <Head_Title
//                 title={'Edit Profile'}
//                 pageTitle={true}
//                 subtitle={'Update your personal information and health details.'}
//                 logo={Profile_Page_Title_logo}
//             />

//             {/* Profile Information */}
//             <form className='edit-profile-form'>

//                 <div className='profile-section-wrapper'>
//                     <Section>

//                         <div className='profile-info-layout'>

//                             <div className='profile-photo'>
//                                 <img
//                                     src={Profile_Page_Title_logo}
//                                     alt='Profile Logo'
//                                 />
//                             </div>

//                             <div className='profile-fields'>

//                                 <div className='form-group'>
//                                     <label>Full Name</label>
//                                     <input
//                                         type='text'
//                                         placeholder='Enter your name'
//                                     />
//                                 </div>

//                                 <div className='form-group'>
//                                     <label>City</label>
//                                     <input
//                                         type='text'
//                                         placeholder='Alexandria'
//                                     />
//                                 </div>

//                                 <div className='form-group'>
//                                     <label>Email</label>
//                                     <input
//                                         type='email'
//                                         placeholder='Enter your Email'
//                                     />
//                                 </div>

//                                 <div className='form-group'>
//                                     <label>Country</label>
//                                     <input
//                                         type='text'
//                                         placeholder='Egypt'
//                                     />
//                                 </div>

//                             </div>

// <div className="profile-buttons">
//     <Button
//         buttonContent="Save"
//         appearance="default"
//         type="submit"
//     />

//     <Button
//         buttonContent="Cancel"
//         appearance="cancel"
//         type="button"
//         actionOnClick={() => window.history.back()}
//     />
// </div>
//                         </div>

//                     </Section>
//                 </div>

//             </form>


//             {/* Personal Information & Health Lifestyle */}
//             <div className='profile-details-layout'>

//                 {/* Personal Information */}
//                 <Section title={'Personal Information'}>

//                     <div className='personal-information-fields'>

//                         <div className='form-group'>
//                             <label>Date of birth</label>

//                             <div className='input-with-icon'>
//                                 <div className='field-icon'>
//                                     <img src={Date_Icon} alt='Date' />
//                                 </div>

//                                 <input type='date' />
//                             </div>
//                         </div>


//                         <div className='form-group'>
//                             <label>Gender</label>

//                             <div className='input-with-icon'>
//                                 <div className='field-icon'>
//                                     <img src={Gender_Icon} alt='Gender' />
//                                 </div>

//                                 <select defaultValue='Female'>
//                                     <option value='Female'>Female</option>
//                                     <option value='Male'>Male</option>
//                                 </select>
//                             </div>
//                         </div>


//                         <div className='form-group'>
//                             <label>Height (cm)</label>

//                             <div className='input-with-icon'>
//                                 <div className='field-icon'>
//                                     <img src={Height_Icon} alt='Height' />
//                                 </div>

//                                 <input type='number' placeholder='165 cm' />
//                             </div>
//                         </div>


//                         <div className='form-group'>
//                             <label>Weight (Kg)</label>

//                             <div className='input-with-icon'>
//                                 <div className='field-icon'>
//                                     <img src={Weight_Icon} alt='Weight' />
//                                 </div>

//                                 <input type='number' placeholder='60 kg' />
//                             </div>
//                         </div>

//                     </div>

//                 </Section>


//                 {/* Health & Lifestyle */}
//                 <Section title={'Health & LifeStyle'}>

//                     <div className='health-lifestyle-fields'>

//                         <div className='form-group'>
//                             <label>Activity Level</label>

//                             <div className='input-with-icon'>
//                                 <div className='field-icon'>
//                                     <img src={Activity_Icon} alt='Activity Level' />
//                                 </div>

//                                 <select defaultValue='Moderate'>
//                                     <option value='Low'>Low</option>
//                                     <option value='Moderate'>Moderate</option>
//                                     <option value='High'>High</option>
//                                 </select>
//                             </div>
//                         </div>


//                         <div className='form-group'>
//                             <label>Smoking</label>

//                             <div className='input-with-icon'>
//                                 <div className='field-icon'>
//                                     <img src={Smoking_Icon} alt='Smoking' />
//                                 </div>

//                                 <select defaultValue='No'>
//                                     <option value='No'>No</option>
//                                     <option value='Yes'>Yes</option>
//                                 </select>
//                             </div>
//                         </div>


//                         <div className='form-group'>
//                             <label>Alcohol</label>

//                             <div className='input-with-icon'>
//                                 <div className='field-icon'>
//                                     <img src={Alcohol_Icon} alt='Alcohol' />
//                                 </div>

//                                 <select defaultValue='No'>
//                                     <option value='No'>No</option>
//                                     <option value='Yes'>Yes</option>
//                                 </select>
//                             </div>
//                         </div>


//                         <div className='form-group'>
//                             <label>Medical Condition</label>

//                             <div className='input-with-icon'>
//                                 <div className='field-icon'>
//                                     <img src={Medical_Condition_Icon} alt='Medical Condition' />
//                                 </div>

//                                 <select defaultValue='None'>
//                                     <option value='None'>None</option>
//                                     <option value='Diabetes'>Diabetes</option>
//                                     <option value='Heart Disease'>Heart Disease</option>
//                                     <option value='Hypertension'>Hypertension</option>
//                                     <option value='Other'>Other</option>
//                                 </select>
//                             </div>
//                         </div>

//                     </div>

//                 </Section>

//             </div>

//         </div>
//     )
// }

import React from 'react'

import './Edit_Profile.css'

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

const MIN_HEIGHT_CM = 50
const MIN_WEIGHT_KG = 5

export default function Edit_Profile() {
    
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

            <form className='edit-profile-form'>

                {/* Profile Information */}
                <div className='profile-info-section'>
                    <Section>

                        <div className='profile-info-layout'>

                            <div className='profile-photo'>
                                <img
                                    className='profile-photo-image'
                                    src={Profile_Page_Title_logo}
                                    alt='Profile photo'
                                />

                                <input
                                    type='file'
                                    id='profile-photo'
                                    name='profile-photo'
                                    accept='image/*'
                                    className='visually-hidden'
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
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        placeholder='Enter your Email'
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='city'>City</label>
                                    <input
                                        type='text'
                                        id='city'
                                        name='city'
                                        placeholder='Alexandria'
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='country'>Country</label>
                                    <input
                                        type='text'
                                        id='country'
                                        name='country'
                                        placeholder='Egypt'
                                    />
                                </div>

                            </div>

                            <div className='profile-buttons'>
                                <Button
                                    buttonContent='Save'
                                    appearance='default'
                                    type='submit'
                                />

                                <Button
                                    buttonContent='Cancel'
                                    appearance='cancel'
                                    type='button'
                                    actionOnClick={() => window.history.back()}
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
                                />
                            </div>
                        </div>


                        <div className='form-group'>
                            <label htmlFor='gender'>Gender</label>

                            <div className='input-with-icon'>
                                <img src={Gender_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <select id='gender' name='gender' defaultValue='Female'>
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
                                />
                            </div>
                        </div>

                    </div>

                </Section>


                {/* Health & Lifestyle */}
                <Section title={'Health & LifeStyle'}>

                    <div className='details-fields'>

                        <div className='form-group'>
                            <label htmlFor='activity-level'>Activity Level</label>

                            <div className='input-with-icon'>
                                <img src={Activity_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <select id='activity-level' name='activity-level' defaultValue='Moderate'>
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

                                <select id='smoking' name='smoking' defaultValue='No'>
                                    <option value='No'>No</option>
                                    <option value='Yes'>Yes</option>
                                </select>
                            </div>
                        </div>


                        <div className='form-group'>
                            <label htmlFor='alcohol'>Alcohol</label>

                            <div className='input-with-icon'>
                                <img src={Alcohol_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <select id='alcohol' name='alcohol' defaultValue='No'>
                                    <option value='No'>No</option>
                                    <option value='Yes'>Yes</option>
                                </select>
                            </div>
                        </div>


                        <div className='form-group'>
                            <label htmlFor='medical-condition'>Medical Condition</label>

                            <div className='input-with-icon'>
                                <img src={Medical_Condition_Icon} alt='' aria-hidden='true' className='field-icon' />

                                <select id='medical-condition' name='medical-condition' defaultValue='None'>
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

            </form>

        </div>
    )
}
 
