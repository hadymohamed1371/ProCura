import React from 'react'
import { useNavigate } from 'react-router-dom'
import Head_Title from '../../components/head_title/Head_Title'
import Profile_Page_Title_logo from '../../assets/icons/Profile_Page_Title_logo.svg'
import Profile_Card from './sections/Profile_Card'
import Personal_info from './sections/Personal_info'
import HealthLifeStyle from './sections/HealthLifeStyle'

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
            <div className="profile-grid">
            <Profile_Card/>
            <Personal_info/>
            <HealthLifeStyle/>
            </div>

            











            <button onClick={() => navigate('/profile/edit')}>Edit Profile</button>
        </div>
    )
}
