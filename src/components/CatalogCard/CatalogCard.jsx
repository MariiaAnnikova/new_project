import React from 'react'
import s from './CatalogCard.module.css'
import {Link} from 'react-router-dom'

export default function CatalogCard({id,image, title}) {
  return (
    <div className={s.catalog}>
        <Link  to = { `/categories/${id}` }> 
      <div className={s.catalog_card}>
        <img src={`http://127.0.0.1:3333${image}`} alt = {title } />
        <p> { title } </p>
        </div>
        </Link>
    </div>
  )
}
