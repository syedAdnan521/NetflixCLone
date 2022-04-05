import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <header className="showcase">
        <div className="showcase-top">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt = "logo" />
          <Link to ="/" className=' btn-rounded'>
              Sign In
          </Link>
        </div>
        <div className='showcase-content'>
            <h1>Unlimited movies, TV<br />
               shows and more</h1>
            <p>watch anywhere. Cancel anytime</p>
            <Link to='/netflix-show' className='btn btn-xl btn-header'>
                watch free for 30 days {" "}
                <i className='fas fa-chevron-right btn-icon'></i>
            </Link>
        </div>
    </header>
    
  )
}

export default Header