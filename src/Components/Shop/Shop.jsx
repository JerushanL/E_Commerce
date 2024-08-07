import React, { Profiler } from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offer from '../Offer/Offer'
import NewCollection from '../NewCollections/NewCollection'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import Product from './Product'
import Breadcrum from '../Breadcrum/Breadcrum'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop
