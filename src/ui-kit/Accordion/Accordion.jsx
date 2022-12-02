import React, { useState } from 'react'
import classNames from 'classnames'
import './Accordion.css'

const Accordion = ({ className, title, isActive, children }) => {
  const [isOpen, setIsOpen] = useState(isActive)
  const handleToggleAccordion = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div
      className={classNames('accordion', className, {
        accordion__active: isOpen
      })}
    >
      <div className="accordion-header" onClick={handleToggleAccordion}>
        <div className="accordion-header__title">{title}</div>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.19307 12.6402L15.2127 5.09712C15.5958 4.61729 15.5958 3.83933 15.2127 3.35973C14.8299 2.88009 14.2091 2.88009 13.8263 3.35973L8.4999 10.0342L3.17367 3.35992C2.79074 2.88028 2.16997 2.88028 1.7872 3.35992C1.40427 3.83956 1.40427 4.61749 1.7872 5.09732L7.80688 12.6404C7.99836 12.8802 8.24905 13 8.49987 13C8.75081 13 9.00168 12.88 9.19307 12.6402Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="accordion-content accordion-contentSlideDown">
        {isOpen && <div className="accordion-content__inner">{children}</div>}
      </div>
    </div>
  )
}

export default Accordion
