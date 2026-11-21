import React from 'react'
import Head_Title from '../../components/head_title/Head_Title'
import Profile_Page_Title_logo from '../../assets/icons/Profile_Page_Title_logo.svg'
import Section from '../../components/section/Section'

export default function Edit_Profile() {
    return (
        <div>

            <Head_Title 
            title={'Edit Profile'}
            pageTitle={true}
            subtitle={'update Your personal information and  health details.'}
            logo={Profile_Page_Title_logo}
            />

            
        </div>
    )
}
