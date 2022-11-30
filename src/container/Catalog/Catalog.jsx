import React from 'react'
import { Filters, GamesList, Pagination } from '../../components'
import './Catalog.css'

const Catalog = () => {
  return (
    <div className='catalog'>
      <Filters/>
      <div className='wrapper-catalog'>
      <GamesList/>
      <Pagination/>
      </div>
    </div>
  )
}

export default Catalog
