import React from 'react'

import images from '../../constants/images'
import './Advantages.css'

const Advantages = () => {
  return (
    <div id='#advantages' className='app__advantages'>
      <div className='app__advantages-item'>
        <img src={images.stock} alt="stock" />
        <span>Регулярные акции, скидки и бонусы</span>
      </div>
      <div className='app__advantages-item'>
        <img src={images.licenseKeys} alt="license keys" />
        <span>Лицензионные ключи от официальных издателей</span>
      </div>
      <div className='app__advantages-item'>
        <img src={images.technicalSupport} alt="technical support" />
        <span>Гарантированная техподдержка вашей покупки</span>
      </div>
      <div className='app__advantages-item'>
        <img src={images.gettingKey} alt="getting key" />
        <span>Мгновенное получение ключа на почту и в личный кабинет</span>
      </div>
    </div>
  )
}

export default Advantages
