import React from 'react'
import './Contact.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MapSec from '../../sections/home/mapSec/MapSec'
import KeepInTouchSec from '../../sections/our branches/keep in touch sec/KeepInTouchSec'
import ContactMainSec from '../../sections/contact/ContactMainSec'

const Contact = () => {
    return (
        <div className='contact-page'>
            <Header BgColor={'why-header-color'} />
            <ContactMainSec />
            <KeepInTouchSec />
            <MapSec />
            <Footer />
        </div>
    )
}

export default Contact
