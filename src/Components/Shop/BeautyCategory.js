import React from 'react'
import { Product } from '../Product'
import { ShopBanner } from './ShopBanner'
import { ShopCategories } from './ShopCategories'


export const BeautyCategory = () => {
  return (
    <>
    <ShopBanner></ShopBanner>
  <ShopCategories></ShopCategories>
    <div id='productsbycategory'>
    <div id="shopbycategorytext">
        <h2 id='categoryheading' className="categorytext">BEAUTY</h2>
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
