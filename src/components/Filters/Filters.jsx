import React from 'react'
import Accordion from '../../ui-kit/Accordion/Accordion'
import SearchForm from '../../ui-kit/SearchForm/SearchForm'
import data from '../../constants/data'
import './Filters.css'

const Filters = () => {
  return (
    <>
      <div className="filters">
        <Accordion title="По популярности" isActive={false}>
          <div className="filters-column">
            <div className="radio">
              <input
                className="custom-radio"
                type="radio"
                id="radio1"
                name="radio"
                value="По убыванию"
              />
              <label htmlFor="radio1">По убыванию</label>
            </div>
            <div className="radio">
              <input
                className="custom-radio"
                type="radio"
                id="radio2"
                name="radio"
                value="По возрастанию"
              />
              <label htmlFor="radio2">По возрастанию</label>
            </div>
          </div>
        </Accordion>
        <div className="accordion">
          <div className="accordion-header" style={{ cursor: 'default' }}>
            <div className="accordion-header__title">Цена, ₽</div>
          </div>
          <div className="accordion-content">
            <div className="accordion-content__inner">
              <div className="price-range__values">
                <input id="range1" min="0" max="10500" value="0" />
                <input id="range2" min="0" max="10500" value="10 500" />
              </div>
              <div className="price-range__track">
                <div className="slider-track"></div>
                <input
                  type="range"
                  min="0"
                  max="10500"
                  value="0"
                  id="slider-1"
                />
                <input
                  type="range"
                  min="0"
                  max="10500"
                  value="10500"
                  id="slider-2"
                />
              </div>
            </div>
          </div>
        </div>
        <Accordion title="Жанр" isActive={true} className={'margin__reset'}>
          <div className="filters-column">
            {data.genres.map((item) => (
              <div className="radio" key={item.id}>
                <input
                  className="custom-radio"
                  type="checkbox"
                  name={item.title}
                  id={item.title}
                />
                <label htmlFor={item.title}>{item.title}</label>
              </div>
            ))}
          </div>
        </Accordion>
        <Accordion title="Издатель" isActive={true}>
          <SearchForm className={'search-form-small'} />
          <div className="filters-column">
            {data.publisher.map((item) => (
              <div className="radio" key={item.id}>
                <input
                  className="custom-radio"
                  type="radio"
                  name="radio"
                  id={item.title + item.id}
                />
                <label htmlFor={item.title + item.id}>{item.title}</label>
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </>
  )
}

export default Filters
