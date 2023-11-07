import React from 'react'
import { Banner } from './Home/Banner';
import { HotDeals } from './Home/HotDeals';
import { BrandsLogo } from './Home/BrandsLogo';
import { FeaturedProducts } from './Home/FeaturedProducts';
import { Newsletter } from './Newsletter';

export const Home = () => {
  return (
    <>
    <Banner></Banner>
    <HotDeals></HotDeals>
    <BrandsLogo></BrandsLogo>
    <FeaturedProducts></FeaturedProducts>
    <Newsletter></Newsletter>
    </>
  )
}
