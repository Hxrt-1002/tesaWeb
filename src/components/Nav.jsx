import React from 'react'
import App from './../App';

const Nav = () => {
  return (
    <>
      <div className='fixed-top'>
        <div className='col-md-12 d-flex justify-content-between py-4 px-4 n'>
          <div className="ht"><a href="#" className='t'>Tesa Cafe</a></div>
          <ul className='navbar gap-5'>
            <li className='nav-link lk'><a href="" className='link'>Home</a></li>
            <li className='nav-link lk'><a href="" className='link'>Menu</a></li>
            <li className='nav-link lk'><a href="" className='link'>Contact</a></li>
            <li className='nav-link lk'><a href="" className='link'>Setting</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav