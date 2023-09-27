import React from 'react'
import { Link } from 'react-router-dom';
import s from './CategoryCard.module.css'

export default function CategoryCard({ image, title, id }) {
  return (
  <div>
    <Link  to = { `/categories/${id}` }>
   <div className={s.category_card}>
    <img src={`http://127.0.0.1:3333${image}`} alt = {title } />
  <p> { title } </p>
</div>
  </Link>
  </div>
  )
  }
  