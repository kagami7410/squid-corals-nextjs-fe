'use client'
import { CiUser } from "react-icons/ci";
import Link from 'next/link'
import React, { useEffect, useState, createContext, useContext } from 'react'
import { useBasket } from '@/app/components/BasketContext/BasketContext';

const BasketContext = createContext<BasketContextData | undefined>(undefined);



// Define the context data
interface BasketContextData {
  basket: BasketItem[];
  addItemToBasket: (item: BasketItem) => void;
  getBasketCount: () => number;
}




// Define a type for the item
interface BasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const NavBar = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Safe to use window or document here
      setIsClient(true);
    }
  }, []);

  const borderVisibile = ''
  let basketItemCount;

  // Export a custom hook to use the BasketContext
  const { getBasketCount } = useBasket();




  return (
    <div className={`navbar bg-base-100 ${borderVisibile}`}>


      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>

      <div className={`flex-1 ${borderVisibile} `}>
        <Link href={'/'} className={`btn btn-ghost text-xl sm:text-3xl`}>Squid Corals</Link>
      </div>

      {/* for phone */}


      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 21 21.5"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-md indicator-item bg-slate-800">
              {isClient ? getBasketCount() : 0 }
                 
                 </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">{isClient ? getBasketCount() : 0 } Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <Link href={"/basket"} className="btn btn-primary btn-block">View cart</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div className="w-100 rounded-full">
            <CiUser style={{
              display: "flex",
              fontSize: "2.5em",
              justifyContent: "center",
              alignItems: "center"

            }}/>

            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
      {/* <div className={`navbar-center hidden lg:flex ${borderVisibile} justify-center flex-1`}>
    <ul className={`menu menu-horizontal px-1 ${borderVisibile}`}>
    <li>
        <details>
          <summary>Corals</summary>
          <ul className="p-2">
            <li><a>LPS</a></li>
            <li><a>SPS</a></li>
            <li><a>Soft Corals</a></li>

          </ul>
        </details>
      </li>

      <li><a>LiveStocks</a></li>

      <li><a>Special Offers</a></li>
    </ul>
  </div>
 */}

    </div>


  )
}

export default NavBar
