import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    return (
        <div>
          <nav className="header">
            <Link to="/login">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                    <span className ="header__optionLine1">Hello</span>
                    <span className ="header__optionLine2">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className ="header__optionLine1">Returns</span>
                    <span className ="header__optionLine2">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className ="header__optionLine1">Your</span>
                    <span className ="header__optionLine2">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLine2 header__basketCount">0</span>

                    </div>
                </Link>



                
            </div>
          </nav>  
        </div>
    )
}

export default Header
