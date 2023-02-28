import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import Container from '../components/Container'

const OurStore = () => {
  const [grid, setGrid] = useState(4)
  return (
    <>
      <Meta title={'Náš obchod | UNIXCAR'} />
      <BreadCrumb title='Náš obchod' />
      <Container class1='store-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Shop by Categories</h3>
              <div>
                <ul className='ps-0'>
                  <li>Kategorie</li>
                  <li>Kategorie</li>
                  <li>Kategorie</li>
                  <li>Kategorie</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filtrovat podle</h3>
              <div>
                <h5 className='sub-title'>Dostupnosti</h5>
                <div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='' />
                    <label
                      className='form-check-label'
                      htmlFor=''>
                      Ihned k odběru (1)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='' />
                    <label
                      className='form-check-label'
                      htmlFor=''>
                      Skladem u dodavatele (1)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='' />
                    <label
                      className='form-check-label'
                      htmlFor=''>
                      Vyprodáno (0)
                    </label>
                  </div>
                </div>
                <h5 className='sub-title'>Ceny</h5>
                <div className='d-flex align-items-center gap-10'>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Od"
                    />
                    <label hmtlFor="floatingInput">Od</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Do"
                    />
                    <label hmtlFor="floatingInput">Do</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Product Tags</h3>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Random Product</h3>
            </div>
          </div>
          <div className='col-9'>
            <div className='filter-sort-grid'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-10'>
                  <p className='mb-0 d-block' style={{width: '150px'}}>Řadit podle:</p>
                  <select
                    name=''
                    className='form-control form-select'
                    id=''>
                      <option value='manual'>Doporučené</option>
                      <option value='best-selling' selected='selected'>Nejprodávanější</option>
                      <option value='title-ascending'>Abecedně (A–Z)</option>
                      <option value='title-descending'>Abecedně (Z-A)</option>
                      <option value='price-ascending'>Nejlevnější</option>
                      <option value='price-descending'>Nejdražší</option>
                      <option value='title-descending'>Nejnovější</option>
                      <option value='title-descending'>Nejstarší</option>
                  </select>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <p className='totalproducts mb-0'>21 produktů</p>
                  <div className='d-flex align-items-center gap-10 grid'>
                    <img
                      onClick={() => {setGrid(3)}}
                      src='images/gr4.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                    <img
                      onClick={() => {setGrid(4)}}
                      src='images/gr3.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                    <img
                      onClick={() => {setGrid(6)}}
                      src='images/gr2.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                    <img
                      onClick={() => {setGrid(12)}}
                      src='images/gr.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='products-list pb-5'>
              <div className='d-flex flex-wrap gap-10'>
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default OurStore