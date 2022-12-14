import React, { useState } from 'react'
import { VscClose, VscMenu } from 'react-icons/vsc'
import './Navbar.css'
import images from '../../constants/images'
import SearchForm from '../../ui-kit/SearchForm/SearchForm'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Logo" />
        <span>turbinary</span>
      </div>
      <SearchForm icon={images.search} className={'search-form'} />
      <ul className="app__navbar-menu">
        <li>
          <a href="#login">
            <svg
              className="app__navbar-icon app__navbar-icon_login"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.1383 13.9241C21.7793 12.7401 22.8517 10.776 22.8517 8.55172C22.8517 4.93103 20.0102 2 16.5 2C12.9898 2 10.1483 4.93103 10.1483 8.55172C10.1483 10.776 11.2207 12.7401 12.8617 13.9241C13.224 14.1855 13.6139 14.4089 14.0262 14.5887C14.7863 14.9202 15.6223 15.1034 16.5 15.1034C17.3777 15.1034 18.2137 14.9202 18.9738 14.5887C19.3861 14.4089 19.776 14.1855 20.1383 13.9241ZM20.5924 16.0117C20.0672 15.9134 19.5263 15.8621 18.9738 15.8621H14.0262C13.4737 15.8621 12.9328 15.9134 12.4076 16.0117C8.19755 16.7995 5 20.6043 5 25.1724V28.9655C5 29.5517 5.43459 30 6.00291 30H26.9971C27.5654 30 28 29.5517 28 28.9655V25.1724C28 20.6043 24.8025 16.7995 20.5924 16.0117ZM16.5 4C14.1524 4 12.1483 5.97671 12.1483 8.55172C12.1483 11.1267 14.1524 13.1034 16.5 13.1034C18.8476 13.1034 20.8517 11.1267 20.8517 8.55172C20.8517 5.97671 18.8476 4 16.5 4ZM18.9738 17.8621H14.0262C10.2076 17.8621 7 21.0802 7 25.1724V28H26V25.1724C26 21.0802 22.7924 17.8621 18.9738 17.8621Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#favorites">
            <svg
              className="app__navbar-icon app__navbar-icon_favorites"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.69976 4C6.72297 4 4.74905 4.76164 3.24884 6.2669C0.248465 9.27745 0.252309 14.1422 3.24884 17.1547L14.7173 28.6791C14.8186 28.7807 14.9394 28.8614 15.0727 28.9165C15.206 28.9716 15.3491 29 15.4936 29C15.6381 29 15.7812 28.9716 15.9145 28.9165C16.0478 28.8614 16.1686 28.7807 16.2699 28.6791C20.097 24.8391 23.9226 21.0059 27.7497 17.1659C30.7501 14.1554 30.7501 9.28861 27.7497 6.27807C24.7493 3.26753 19.837 3.2675 16.8365 6.27807L15.4993 7.61811L14.1507 6.2669C12.6505 4.76164 10.6765 4 8.69976 4ZM8.69976 6.12173C10.1048 6.12173 11.507 6.66845 12.5981 7.76328L14.7287 9.89618C14.8299 9.9978 14.9507 10.0785 15.084 10.1336C15.2173 10.1887 15.3604 10.2171 15.5049 10.2171C15.6495 10.2171 15.7925 10.1887 15.9258 10.1336C16.0591 10.0785 16.1799 9.9978 16.2812 9.89618L18.3891 7.77445C20.5714 5.58475 24.0149 5.58478 26.1972 7.77445C28.3795 9.96411 28.3795 13.4687 26.1972 15.6584C22.6302 19.2373 19.0663 22.8221 15.4993 26.4011L4.80138 15.6472C2.62035 13.4545 2.61912 9.95294 4.80138 7.76328C5.89256 6.66845 7.29467 6.12173 8.69976 6.12173Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#cart">
            <svg
              className="app__navbar-icon app__navbar-icon_cart"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9989 24.0003C10.3429 24.0003 8.99891 25.3443 8.99891 27.0003C8.99891 28.6563 10.3429 30.0003 11.9989 30.0003C13.6549 30.0003 14.9989 28.6563 14.9989 27.0003C14.9989 25.3443 13.6549 24.0003 11.9989 24.0003ZM11.9989 26.0003C12.5509 26.0003 12.9989 26.4483 12.9989 27.0003C12.9989 27.5523 12.5509 28.0003 11.9989 28.0003C11.4469 28.0003 10.9989 27.5523 10.9989 27.0003C10.9989 26.4483 11.4469 26.0003 11.9989 26.0003Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.9983 24.0003C22.3423 24.0003 20.9983 25.3443 20.9983 27.0003C20.9983 28.6563 22.3423 30.0003 23.9983 30.0003C25.6543 30.0003 26.9983 28.6563 26.9983 27.0003C26.9983 25.3443 25.6543 24.0003 23.9983 24.0003ZM23.9983 26.0003C24.5503 26.0003 24.9983 26.4483 24.9983 27.0003C24.9983 27.5523 24.5503 28.0003 23.9983 28.0003C23.4463 28.0003 22.9983 27.5523 22.9983 27.0003C22.9983 26.4483 23.4463 26.0003 23.9983 26.0003Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.292 3.836C4.588 5.611 7.683 20.629 7.683 20.629C7.98 22.012 9.202 23 10.617 23C14.036 23 21.964 23 25.383 23C26.798 23 28.02 22.012 28.317 20.629L30.459 10.629C30.649 9.743 30.429 8.81901 29.859 8.11401C29.289 7.40901 28.432 7 27.526 7H6.847L6.265 3.50699C6.024 2.05999 4.772 1 3.306 1C2.626 1 2 1 2 1C1.448 1 1 1.448 1 2C1 2.552 1.448 3 2 3H3.306C3.795 3 4.212 3.353 4.292 3.836ZM28.504 10.21L26.361 20.21C26.262 20.671 25.855 21 25.383 21C21.964 21 14.036 21 10.617 21C10.145 21 9.738 20.671 9.639 20.21L7.237 9H27.526C27.828 9 28.114 9.136 28.304 9.371C28.494 9.606 28.567 9.91399 28.504 10.21Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
      </ul>
      <VscMenu
        className="overlay__burger"
        color="#fff"
        fontSize={24}
        style={{ marginLeft: '20px' }}
        onClick={() => setToggleMenu(true)}
      />
      {toggleMenu && (
        <div className="app__navbar-smallscreen">
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <VscClose
              fontSize={24}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <div className="app__navbar-smallscreen-menu"></div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
