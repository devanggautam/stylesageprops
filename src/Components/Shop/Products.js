import React, { useEffect } from 'react'
import { Product } from '../Product'
import loader from '../loading.gif'
import { useOutletContext } from 'react-router-dom'


export const Products = ({text}) => {

 const [isloading] =  useOutletContext()
// isloading ki state change nahi ho rahi.. 
  useEffect(()=>{
    console.log(isloading)
  }, [isloading])

  return (
    <>
    {isloading? (console.log("working")):

    (
    <div id='productsbycategory'>
    <div id="shopbycategorytext">
        <h2 id='categoryheading' className="categorytext">{text}</h2>
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
)
}
</>
  )
}
