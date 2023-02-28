import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'

const ProductCard = (props) => {
  const { grid } = props
  let location = useLocation()
  return (
    <>
      <div
        className={` ${
          location.pathname === "/produkty" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "/produkty/:id"
              : location.pathname === "/produkty/:id"
              ? "/produkty/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src='images/wish.svg' alt="wishlist" />
            </button>
          </div>
          <div className='product-image'>
            <img src='images/watch.jpg' className='img-fluid' alt='product_image' />
            <img src='images/watch-1.avif' className='img-fluid' alt='product_image' />
          </div>
          <div className='product-details'>
            <h6 className='brand'>značka</h6>
            <h5 className='product-title'>
              název produktu
            </h5>
            <ReactStars
              count={5}
              size={24}
              value='5'
              edit={false}
              activeColor='#ffd700'
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Vivamus ac leo pretium faucibus.
            </p>
            <p className=''>cena</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src='images/prodcompare.svg' alt='compare'></img>
              </Link>
              <Link>
                <img src='images/view.svg' alt='view'></img>
              </Link>
              <Link>
                <img src='images/add-cart.svg' alt='addcart'></img>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard
