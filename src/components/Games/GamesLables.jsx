import React from 'react'

const GamesLables = ({ label }) => {
  // const nameClass = (textLabel) => {
  //   if (textLabel === 'новинка') {
  //     return 'label-text_new'
  //   } if (textLabel === 'скидка') {
  //     return 'label-text_discount'
  //   } if (textLabel === 'акция') {
  //     return 'label-text_stock'
  //   } else {
  //     return ''
  //   }
  // }

  return (
    <div className='label'>
      {label && <span className=''>{label}</span>}
    </div>
  )
}

export default GamesLables
