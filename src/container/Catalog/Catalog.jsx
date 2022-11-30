import React from 'react'
import { Filters, GamesList } from '../../components'
import './Catalog.css'

const Catalog = () => {
  return (
    <div className='catalog'>
      <Filters/>
      <GamesList/>
    </div>
  )
}

export default Catalog
