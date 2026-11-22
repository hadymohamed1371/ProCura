import React from 'react'
import Head_Title from '../../components/head_title/Head_Title'
import Settings_Page_Title_logo from '../../assets/icons/Settings_Page_Title_logo.svg'
import Preferences from './sections/Preferences'
import Units from './sections/Units'
import './Settings.css'
import Section from '../../components/section/Section'
import Button from '../../components/button/Button'

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

             <div className="patient-info-save-row">
                <Section
                title={'Save the new data:'}
                subtitle={'The new data will contribute to the predictions and your health tracking.'}
                >
                    <div className="patient-info-save-content">
                        
                        <Button
                        type="submit"
                        buttonContent={'Save Settings'}
                        />
                        
                    </div>
                </Section>
            </div>

        </form>
    </div>
  )
}
