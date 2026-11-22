import React from 'react'

import './Profile.css';
import Head_Title from '../../components/head_title/Head_Title'
import Profile_Page_Title_logo from '../../assets/icons/Profile_Page_Title_logo.svg'
import Profile_Card from './sections/Profile_Card'
import Personal_info from './sections/Personal_info'
import HealthLifeStyle from './sections/HealthLifeStyle'

export default function Profile() {
    

    return (
        <div>
            <Head_Title 
            title={'Profile'}
            pageTitle={true}
            subtitle={'Your personal information and health details.'}
            logo={Profile_Page_Title_logo}
            />
            <div className="profile-grid">
                <div className="profile-grid-card">
                    <Profile_Card/>
                </div>
                <div className="profile-grid-personal">
                    <Personal_info/>
                </div>
                <div className="profile-grid-health">
                    <HealthLifeStyle/>
                </div>
            </div>

        </div>
    )
}
