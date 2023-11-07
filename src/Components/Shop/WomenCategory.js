import React from 'react'
import { Product } from '../Product'
import { ShopBanner } from './ShopBanner'
import { ShopCategories } from './ShopCategories'

export const WomenCategory = () => {
  return (
    <>
    <div id='productsbycategory'>
    <div id="shopbycategorytext">
        <h2 id='categoryheading' className="categorytext">WOMEN</h2>
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
