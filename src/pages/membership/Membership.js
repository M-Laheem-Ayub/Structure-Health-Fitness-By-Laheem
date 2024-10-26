import React from 'react'
import './Membership.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MembershipMainSec from '../../sections/membership/membershipMainSec/MembershipMainSec'

const Membership = () => {
  return (
    <div className='membership-page'>
      <Header BgColor={'why-header-color'}/>
      <MembershipMainSec/>
      <Footer/>
    </div>
  )
}

export default Membership
