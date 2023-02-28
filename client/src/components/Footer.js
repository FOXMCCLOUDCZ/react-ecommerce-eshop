import React from "react"
import { Link } from "react-router-dom"
import {
  BsFacebook,
  BsInstagram,
  // BsMessenger,
  BsWhatsapp,
  BsSkype,
} from 'react-icons/bs'
import newsletter from "../images/newsletter.png"

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center d-none d-xxl-block">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Přihlašte se k odběru novinek</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Vaše emailová adresa"
                  aria-label="Vaše emailová adresa"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Odebírat
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col d-flex flex-column align-items-center">
              <h4 className="text-white mb-4">Kontaktujte nás</h4>
              <div>
                <address className="text-white fs-6 d-flex flex-column align-items-center">
                  Pohraniční 3135/16,
                  <br/>
                  70200 Ostrava
                </address>
                <a
                  href="tel:+420778881919"
                  className="mt-3 d-block mb-1 text-white d-flex flex-column align-items-center"
                >
                  +420 778881919
                </a>
                <a
                  href="tel:+420778882338"
                  className="mt-3 d-block mb-1 text-white d-flex flex-column align-items-center"
                >
                  +420 778882338
                </a>
                <a
                  href="mailto:info@unixcar.cz"
                  className="mt-2 d-block mb-0 text-white d-flex flex-column align-items-center"
                >
                  info@unixcar.cz
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className='text-white' href="https://www.facebook.com/unixcarautodily/" target="_ blank">
                  <BsFacebook className='fs-3' />
                  </a>
                  <a className='text-white' href="https://www.instagram.com/unixcar/?hl=cs" target="_ blank">
                  <BsInstagram className='fs-3' />
                  </a>
                  {/* <a className='text-white' href="" target="_ blank"> */}
                  {/* <BsMessenger className='fs-3' /> */}
                  {/* </a> */}
                  <a className='text-white' href="https://api.whatsapp.com/send?phone=00420778881919" target="_ blank">
                  <BsWhatsapp className='fs-3' />
                  </a>
                  <a className='text-white' href="skype:live:.cid.c5ee57b3213425c1" target="_ blank">
                  <BsSkype className='fs-3' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <h4 className="text-white mb-4">Dokumenty</h4>
              <div className="footer-link d-flex flex-column align-items-center">
                <Link to="/zasady-ochrany-osobnich-udaju" className="text-white py-2 mb-1 d-flex flex-column align-items-center">
                  Zásady ochrany osobních údajů
                </Link>
                <Link to="/zasady-vraceni-penez" className="text-white py-2 mb-1 d-flex flex-column align-items-center">
                  Zásady vrácení peněz
                </Link>
                <Link to="/zasady-dopravy" className="text-white py-2 mb-1 d-flex flex-column align-items-center">
                  Zásady dopravy
                </Link>
                <Link to="/vseobecne-obchodni-podminky" className="text-white py-2 mb-1 d-flex flex-column align-items-center">
                  Všeobecné obchodní podmínky
                </Link>
                <Link to='/blogy' className="text-white py-2 mb-1 d-flex flex-column align-items-center">Blogy</Link>
              </div>
            </div>
            <div className="col d-none d-xxl-block">
              <h4 className="text-white mb-4 d-flex flex-column align-items-center">Účet</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1 d-flex flex-column align-items-center">O nás</Link>
                <Link className="text-white py-2 mb-1 d-flex flex-column align-items-center">Otázky a odpovědi</Link>
                <Link className="text-white py-2 mb-1 d-flex flex-column align-items-center">Kontakt</Link>
              </div>
            </div>
            <div className="col d-none d-xxl-block">
              <h4 className="text-white mb-4 d-flex flex-column align-items-center">Rychlé odkazy</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1 d-flex flex-column align-items-center">#</Link>
                <Link className="text-white py-2 mb-1 d-flex flex-column align-items-center">#</Link>
                <Link className="text-white py-2 mb-1 d-flex flex-column align-items-center">#</Link>
                <Link className="text-white py-2 mb-1 d-flex flex-column align-items-center">#</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Vytvořeno UNIXCAR autodíly
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer