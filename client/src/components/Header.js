import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
    BsFillTelephoneFill,
    BsFacebook,
    BsInstagram,
    // BsMessenger,
    BsWhatsapp,
    BsSkype,
    BsSearch
} from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { GiPositionMarker } from 'react-icons/gi'
import compare from '../images/compare.svg'
import wishlist from '../images/wishlist.svg'
import user from '../images/user.svg'
import cart from '../images/cart.svg'
import menu from '../images/menu.svg'

const Header = () => {
  return (
    <>
        <header className="header-top-strip py-3">
            <div className="container-xxl">
                <div className="row align-items-center text-center">
                    <div className="col">
                        <div className="d-flex text-center text-white mb-0">
                            <BsFillTelephoneFill className='fs-3' />
                            <div className='d-flex'>
                              <a className="text-white ps-2" href="tel:+420778881919">+420778881919</a>
                              <a className="text-white ps-2" href="tel:+420778882338">+420778882338</a>
                            </div>
                        </div>
                    </div>
                    <div className="col d-none d-xxl-block">
                        <p className="text-white mb-0">
                            <MdEmail className='fs-3' />
                            <a className="text-white ps-2" href="mailto:info@unixcar.cz">
                            info@unixcar.cz
                            </a>
                        </p>
                    </div>
                    <div className="col">
                        <p className="text-white mb-0">
                            <GiPositionMarker className='fs-3' />
                            <a className="text-white ps-2" href="https://mapy.cz/zakladni?q=pohrani%C4%8Dn%C3%AD%203135%2F16&source=coor&id=18.272571934142718%2C49.82043928062023&x=18.2723037&y=49.8204168&z=18" target="_ blank">
                            Pohraniční 3135/16, Ostrava
                            </a>
                        </p>
                    </div>
                    <div className="col d-none d-xxl-block">
                        <a className='header-social-icon-unixcar text-white mb-2 ps-3' href="https://www.facebook.com/unixcarautodily/" target="_ blank">
                        <BsFacebook className='fs-3' />
                        </a>
                        <a className='header-social-icon-unixcar text-white mb-2 ps-3' href="https://www.instagram.com/unixcar/?hl=cs" target="_ blank">
                        <BsInstagram className='fs-3' />
                        </a>
                        {/* <a className='header-social-icon-unixcar text-white mb-2 ps-3' href="" target="_ blank"> */}
                        {/* <BsMessenger className='fs-3' /> */}
                        {/* </a> */}
                        <a className='header-social-icon-unixcar text-white mb-2 ps-3' href="https://api.whatsapp.com/send?phone=00420778881919" target="_ blank">
                        <BsWhatsapp className='fs-3' />
                        </a>
                        <a className='header-social-icon-unixcar text-white mb-2 ps-3' href="skype:live:.cid.c5ee57b3213425c1" target="_ blank">
                        <BsSkype className='fs-3' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-upper py-3">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-2 d-none d-xxl-block">
                        <h2 className='unixcar'>
                            <Link to='/' className="text-white">UNIXCAR</Link>
                        </h2>
                    </div>
                    <div className="col-5">
                        <div className="input-group">
                            <input
                            type="text"
                                className="form-control py-2"
                                placeholder="Vyhledat produkt zde..."
                                aria-label="Vyhledat produkt zde..."
                                aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text p-3" id="basic-addon2">
                                <BsSearch className="fs-6" />
                            </span>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="header-upper-links d-flex align-items-center justify-content-between">
                            <div className=''>
                                <Link
                                    to="/porovnat-produkty"
                                    className="d-flex flex-column align-items-center gap-10 text-white"
                                >
                                    <img src={compare} alt="compare" />
                                    <p className="mb-0 d-none d-xxl-block">
                                    Porovnat <br /> produkt
                                    </p>
                                </Link>
                            </div>
                            <div className=''>
                                <Link
                                    to="/oblibene"
                                    className="d-flex flex-column align-items-center gap-10 text-white"
                                >
                                    <img src={wishlist} alt="wishlist" />
                                    <p className="mb-0 d-none d-xxl-block">
                                    Oblíbené <br /> položky
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to="/prihlasit"
                                    className="d-flex flex-column align-items-center gap-10 text-white"
                                >
                                    <img src={user} alt="user" />
                                    <p className="mb-0 d-none d-xxl-block">
                                    Přihlášení <br /> Můj účet
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to="/kosik"
                                    className="d-flex align-items-center gap-10 text-white"
                                >
                                    <img src={cart} alt="cart" />
                                    <div className="d-flex flex-column gap-10">
                                        <span className="badge bg-white text-dark">0</span>
                                        <p className="mb-0">500 CZK</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </header>
      
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="" />
                      <span className="me-1 d-inline-block d-none d-xxl-block">
                        Kategorie
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          #
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          #
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          #
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Domů</NavLink>
                    <NavLink to="/produkty">Náš obchod</NavLink>
                    <NavLink to="/blogy">Blogy</NavLink>
                    <NavLink to="/kontakt">Kontakt</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header