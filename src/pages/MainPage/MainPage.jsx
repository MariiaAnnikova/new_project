import React from 'react'


import BluBanner from '../../components/BluBanner/BluBanner';
import GreenBanner from '../../components/GreenBanner/GreenBanner';
import CatalogPage from '../CatalogPage/CatalogPage';
import OfferPage from '../OfferPage/OfferPage';


export default function MainPage() {



  return (
    <div>
    <BluBanner/>
    
    <CatalogPage/>
   
    <GreenBanner />
        
    <OfferPage />    
   </div>
  )
}
