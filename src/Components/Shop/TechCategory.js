import React from 'react'
import { Product } from '../Product'
import { ShopBanner } from './ShopBanner'
import { ShopCategories } from './ShopCategories'

export const TechCategory = () => {
  return (
    <>
    <ShopBanner></ShopBanner>
 <ShopCategories></ShopCategories>
    <div id='productsbycategory'>
    <div id="shopbycategorytext">
        <h2 id='categoryheading' className="categorytext">TECH</h2>
    </div>
    <div id="categoryproducts">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
    </div>
</div>
</>
  )
}
