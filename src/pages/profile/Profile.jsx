import React from 'react'
import { useNavigate } from 'react-router-dom'
import Head_Title from '../../components/head_title/Head_Title'
import Profile_Page_Title_logo from '../../assets/icons/Profile_Page_Title_logo.svg'

export default function Profile() {
    const navigate = useNavigate()

    return (
        <div>
            <Head_Title 
            title={'Profile'}
            pageTitle={true}
            subtitle={'Your personal information and health details.'}
            logo={Profile_Page_Title_logo}
            />

            











            <button onClick={() => navigate('/profile/edit')}>Edit Profile</button>
        </div>
    )
}
