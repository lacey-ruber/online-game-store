import React from 'react'

import './FooterNav.css'

const FooterNav = () => <div className='footer-nav'>
  <div className='footer-nav__wrapper'>
  <div className='footer-nav__column'>
    <a href="#about-company">
    <span>О компании</span>
    </a>
    <a href="#news">
    <span>Новости и статьи</span>
    </a>
    <a href="#stock">
    <span>Акции</span>
    </a>
  </div>
  <div className='footer-nav__column'>
    <a href="#faq">
    <span>Часто задаваемые вопросы</span>
    </a>
    <a href="#return-conditions">
    <span>Условия возврата</span>
    </a>
    <a href="#legal-information">
    <span>Правовая информация</span>
    </a>
  </div>
  </div>
  <div className='footer-nav__wrapper'>
    <div className='footer-nav__column'>
    <a href="tel:+74957270181"><span>+7 (495) 727-01-81</span></a>
  <a href="mailto:care@turbistore.ru">
  <span>care@turbistore.ru</span>
  </a>
  </div>
  </div>
</div>

export default FooterNav
