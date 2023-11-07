import React from 'react'

export const Product = () => {
  return (
    <div id='product'>
        <div id="productimagesection" className='productcontent'>
            <img src="https://preview.colorlib.com/theme/fashiop/img/product/feature-product/f-p-5.jpg" alt="" id="productimage" />
        </div>
        <div id="productdetailsection" className='productcontent'>
            <h4 id="productname" className="producttext">Blue Shirt</h4>
            <h3 id="productprice" className="producttext">$160</h3>
        </div>
    </div>
  )
}
