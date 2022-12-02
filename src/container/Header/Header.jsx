import React from 'react'
import { Breadcrumbs, Title } from '../../components'
import './Header.css'

const Header = () => {
  return (
    <>
      <Breadcrumbs />
      <div className='smallscreen-header-wrapper'>
        <Title title="Каталог" />
        <div className="filters-smallscreen">
          <button>Показать фильтры</button>
        </div>
      </div>
    </>
  )
}

export default Header
