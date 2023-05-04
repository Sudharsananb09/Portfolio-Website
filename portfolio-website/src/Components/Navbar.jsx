import React from 'react'

const Navbar = () => {
  return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <a href='#' className='navbar-brand'>Sudhan</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navmenu'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <a href='#About' className='nav-link'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#Skills' className='nav-link'>Skills</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#Portfolio' className='nav-link'>Portfolio</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#ContactMe' className='nav-link'>ContactMe</a>
                        </li>
                    </ul>
                </div>
            </div>           
        </nav>
    )
}

export default Navbar