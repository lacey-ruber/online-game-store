import React from 'react'
import { data } from '../../constants'
import './Games.css'
import GamesItem from './GamesItem'

const GamesList = () => {
  return (
    <div className="products">
      <div className="products__body">
        {data.games.map((item, index) => (
          <GamesItem
            key={item.title + index}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
            image={item.imgUrl}
            label={item.label}
          />
        ))}
      </div>
    </div>
  )
}

export default GamesList
