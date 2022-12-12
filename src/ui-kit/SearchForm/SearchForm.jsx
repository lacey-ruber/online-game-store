import React from 'react'
import images from '../../constants/images'
import './SearchForm.css'

const SearchForm = ({ className }) => {
  return (
    <div className={className}>
      <input type="text" />
      <img src={images.search} alt="search" />
    </div>
  )
}

export default SearchForm
