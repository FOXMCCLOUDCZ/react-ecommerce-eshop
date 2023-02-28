import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {
  FaHome,
  FaPhoneAlt
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsInfoCircleFill } from 'react-icons/bs'
import Container from '../components/Container'

const Contact = () => {
  return (
    <>
      <Meta title={'Kontakt | UNIXCAR'} />
      <BreadCrumb title='Kontakt' />
      <Container class1='contact-wrapper home-wrapper-1 py-3'>
        <div className='row'>
          <div className='col-12'>
            <iframe
              title='kontakt-mapy'
              src="https://frame.mapy.cz/s/latucanape"
              width="700"
              height="466"
              className='border-0 w-100'
              frameborder="0"
              />
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Kontaktujte nás</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Jméno a příjmení'
                      />
                  </div>
                  <div>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Kontaktní emailová adresa'
                      />
                  </div>
                  <div>
                    <input
                      type='tel'
                      className='form-control'
                      placeholder='Kontaktní telefon'
                      />
                  </div>
                  <div>
                    <textarea
                      name=''
                      id=''
                      className='w-100 form-control'
                      cols='30'
                      rows='4'
                      placeholder='Váš komentář'
                      />
                  </div>
                  <div>
                    <button className='button border-0'>Odeslat</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Spojte se s námi</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaHome className='fs-4' />
                      <adress>Pohraniční 3135/16, Ostrava - Vítkovice 702 00</adress>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaPhoneAlt className='fs-4' />
                      <a className='text-primary' href='tel:+420778881919'>+420 778881919</a>
                      <a className='text-primary' href='tel:+420778882338'>+420 778882338</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <MdEmail className='fs-4' />
                      <a className='text-primary' href='mailto:info@unixcar.cz'>info@unixcar.cz</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BsInfoCircleFill className='fs-4' />
                      <ul className='ps-0'>
                        <li className='mb-0'>Pondělí: 8 - 17</li>
                        <li className='mb-0'>úterý: 8 - 17</li>
                        <li className='mb-0'>středa: 8 - 17</li>
                        <li className='mb-0'>čtvrtek: 8 - 17</li>
                        <li className='mb-0'>pátek: 8 - 16</li>
                        <li className='mb-0'>sobota: ZAVŘENO</li>
                        <li className='mb-0'>neděle: ZAVŘENO</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
