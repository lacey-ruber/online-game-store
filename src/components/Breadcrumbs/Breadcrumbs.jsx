import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import './Breadcrumbs.css'

const Breadcrumbs = () => {
  return (
    <div className="app__breadcrumbs">
        <ul className="app__breadcrumbs-list">
          <li>
            <a href="#">Главная страница</a>
          </li>
          <AiOutlineRight fontSize={10} />
          <li>
            <a href="#">Каталог</a>
          </li>
        </ul>
    </div>
  )
}

export default Breadcrumbs
