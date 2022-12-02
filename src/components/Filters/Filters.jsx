import React from 'react'
import Accordion from '../../ui-kit/Accordion/Accordion'
import './Filters.css'

const Filters = () => {
  return (
    <>
    <div className="filters">
      <Accordion title="По популярности" isActive={false}></Accordion>
      <div className="accordion">
        <div className="accordion-header" style={{ cursor: 'default' }}>
          <div className="accordion-header__title">Цена</div>
        </div>
        <div className="accordion-content">
          <div className="accordion-content__inner"></div>
        </div>
      </div>
      <Accordion title="Жанр" isActive={true}></Accordion>
      <Accordion title="Платформы" isActive={false}></Accordion>
      <Accordion title="Активация" isActive={false}></Accordion>
      <Accordion title="Разработчик" isActive={false}></Accordion>
      <Accordion title="Издатель" isActive={true}></Accordion>
      <Accordion title="Особенности" isActive={false}></Accordion>
      <Accordion title="Тип" isActive={false}></Accordion>
    </div>
    </>
  )
}

export default Filters
