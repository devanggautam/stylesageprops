import React from 'react'
import { Link } from 'react-router-dom'

export const ShopCategories = ({setIsLoading, setPath}) => {


  const handleClick= (pagepath, pagetext)=>{
    setIsLoading(true);
    setTimeout(() => {
      setPath({path: pagepath, text: pagetext})
      localStorage.setItem("urlpath", JSON.stringify({path: pagepath, text: pagetext}));
      setIsLoading(false);
    }, 800);
  
  }



  return (
    <>
    <div id='shopcategories'>
        <Link onClick={()=>handleClick('men', 'MEN')} to='/shop/men' id="shopcategory1" className="shopcategory">MEN</Link>
        <Link onClick={()=>handleClick('women', 'WOMEN')} to='/shop/women' id="shopcategory2" className="shopcategory">WOMEN</Link>
        <Link onClick={()=>handleClick('kids', 'KIDS')} to='/shop/kids' id="shopcategory3" className="shopcategory">KIDS</Link>
        <Link onClick={()=>handleClick('home-living', 'HOME & LIVING')} to='/shop/home-living' id="shopcategory4" className="shopcategory">HOME & LIVING</Link>
        <Link onClick={()=>handleClick('beauty', 'BEAUTY')} to='/shop/beauty' id="shopcategory5" className="shopcategory">BEAUTY</Link>
        <Link onClick={()=>handleClick('tech', 'TECH')} to='/shop/tech' id="shopcategory6" className="shopcategory">TECH</Link>
    </div>
    </>
  )
}
