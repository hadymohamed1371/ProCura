import React from 'react'
import Head_Title from '../../components/head_title/Head_Title'
import Settings_Page_Title_logo from '../../assets/icons/Settings_Page_Title_logo.svg'
import Preferences from './sections/components/Preferences'
import Units from './sections/components/Units'
import './Settings.css'

export default function Settings() {
  return (
    <div>
        <Head_Title
            title={'Settings'}
            pageTitle={true}
            subtitle={'Customize your app experience.'}
            logo={Settings_Page_Title_logo}
        />

        <form method='POST' className="settings-sections-wrapper">

            <Preferences />
            
            <Units />

        </form>
    </div>
  )
}
