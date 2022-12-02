import React from 'react'
import { Filters, GamesList, Pagination } from '../../components'
import { InformationSection } from '../index'
import './Catalog.css'

const Catalog = () => {
  return (
    <div className='catalog'>
      <Filters/>
      <div className='wrapper-catalog'>
      <GamesList/>
      <Pagination/>
      <InformationSection/>
      </div>
    </div>
  )
}

export default Catalog
