import React from 'react'
import { Product } from '../Product'

export const FeaturedProducts = () => {
  return (
    <div id='featured'>
        <div id="featuredtext">
            <h2 id='featuredheading' className="featuredtext">Featured Products</h2>
            <p id='featureddescription' className="featuredtext">Who are in extremely love with eco friendly system.</p>
        </div>
        <div id="featuredproducts">
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
  )
}
