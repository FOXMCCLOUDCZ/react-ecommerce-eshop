import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'

export const TermsAndConditions = () => {
  return (
    <>
        <Meta title={'Všeobecné obchodní podmínky | UNIXCAR'} />
        <BreadCrumb title='Všeobecné obchodní podmínky' />
        <Container className='policy-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='policy'></div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default TermsAndConditions