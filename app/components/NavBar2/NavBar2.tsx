import Link from 'next/link'
import React from 'react'

const NavBar2 = () => {
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
        <details>
          <summary className='text-lg'>
            <Link href="/corals">Corals</Link>
          </summary>
          <ul className="p-0 w-20">
            <li><a>LPS</a></li>
            <li><a>SPS</a></li>
            <li><a>Soft Corals</a></li>
          </ul>
        </details>
      </li>
      <li><a className='text-lg'>LiveStocks</a></li>2

      <li><a  className='text-lg'>Special Offers</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  </div>
</div>
  )
}

export default NavBar2
