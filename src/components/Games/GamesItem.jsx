import React from 'react'
import GamesLables from './GamesLables'

const GamesItem = ({ title, price, oldPrice, image, label }) => {
  return (
    <a href="#" className="products__item">
      <img src={image} alt={title} />
      <GamesLables label={label}/>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.60794 6.17623C5.12539 4.73117 7.122 4 9.12151 4C11.121 4 13.1176 4.73117 14.6351 6.17623L15.9992 7.47339L17.3518 6.18695C20.3867 3.2968 25.3555 3.29683 28.3904 6.18695C31.4253 9.07707 31.4253 13.7492 28.3904 16.6393C24.5193 20.3257 20.6498 24.0056 16.7786 27.692C16.6762 27.7895 16.554 27.867 16.4192 27.9198C16.2844 27.9727 16.1397 28 15.9935 28C15.8473 28 15.7025 27.9727 15.5677 27.9198C15.4329 27.867 15.3107 27.7895 15.2083 27.692L3.60794 16.6286C0.576966 13.7365 0.573078 9.06635 3.60794 6.17623Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
      <div className="products__item-info">
        <div className="products__item-info__wrapper">
          <h4>{title}</h4>
          {oldPrice && <p>{oldPrice} ₽</p>}
          <span>{price} ₽</span>
        </div>
      </div>
    </a>
  )
}

export default GamesItem
