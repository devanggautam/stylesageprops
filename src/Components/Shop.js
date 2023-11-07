import React from 'react'
import { ShopBanner } from './Shop/ShopBanner'
import { ShopCategories } from './Shop/ShopCategories'
import { Outlet } from 'react-router-dom'


export const Shop = ({ isloading, setIsLoading, setPath}) => {


  return (<>
  
  <ShopBanner></ShopBanner>
  <ShopCategories setIsLoading={setIsLoading} setPath={setPath}></ShopCategories>
  
  <Outlet context={[isloading]} />
  </>
  )
}
