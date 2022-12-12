import React, { useState } from 'react'
import { Breadcrumbs, Title } from '../../components'
import './Header.css'

const Header = () => {
  const [toggleFilters, setToggleFilters] = useState(false)
  return (
    <>
      <Breadcrumbs />
      <div className="smallscreen-header-wrapper">
        <Title title="Каталог" />
        <div className="filters-smallscreen">
          <button onClick={() => setToggleFilters(!toggleFilters)}>
            Показать фильтры
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
