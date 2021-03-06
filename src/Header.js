import React from 'react'
import image from './image/amazon.jpg'
import {Link} from "react-router-dom"
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
import { auth } from './firebase'

function Header() {
  
  const [{basket,user}] = useStateValue();

  const login =()=> {
    if(user) {
      auth.signOut();
    }
  }


    return (
        <nav className="header">
        {/*Amazon logo */}
            <Link to="/">
            <img
            className="header__logo" 
            src={image}
            alt="image not available"
            />
            </Link>
        {/*Search Bar */}
        <div className="header__search">
        <input type="text" className="header_searchInput"/>  
        <SearchIcon className="header__searchIcon" />
        </div> 
        {/*# Links */}
        <div className="header_nav">

        <Link to={!user && "/login"} className="header__link">
        <div  onClick={login}className="header__option"> 
          <span className="header__optionLineOne"> Hello {user?.email}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
        </div>
        </Link>

        <Link to="/" className="header__link">
        <div className="header__option"> 
          <span className="header__optionLineOne">Return</span>
          <span  className="header__optionLineTwo">&Order</span>
        </div>
        </Link>

        <Link to="/" className="header__link">
        <div className="header__option"> 
          <span className="header__optionLineOne">Your</span>
          <span  className="header__optionLineTwo">Prime</span>
        </div>
        </Link>
        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
            
            <ShoppingBasketIcon/>
            <span className="header__optionLineTwo header__baseketCount">{basket?.length}</span>
            </div>
         </Link>
        </div>
        </nav>
    )
}

export default Header
