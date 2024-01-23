import './Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'
import { useState , useEffect } from 'react'
import {IoIosArrowDown} from 'react-icons/io'

function Navbar() {
    const [activeMenu ,setActiveMenu]= useState('/')
    const location = useLocation()
// Start logic active menu
    useEffect(()=>{
        const pathName = location.pathname
        setActiveMenu(pathName)
        window.scroll(0 ,0)
    },[location])
// End logic active menu

  return (
    <section className="NavBar">
        <div className="containers">
            <div className="navbar_wrapper">
                <ul className="navbar_items">
                    <li className="navbar_item">
                        <NavLink to='/' className={`navbar_item_link  ${activeMenu === '/' ? "navbar_item_linkActive" :""}`}>خانه</NavLink>
                    </li>
                    <li className="navbar_item">
                        <NavLink to='/Products' className={`navbar_item_link  ${activeMenu === '/Products' ? "navbar_item_linkActive" :""}`}>محصولات</NavLink>
                    </li>
                    <li className="navbar_item">
                        <NavLink to='/Weblog' className={`navbar_item_link  ${activeMenu === '/Weblog' ? "navbar_item_linkActive" :""}`}>بلاگ</NavLink>
                    </li>
                    <li className="navbar_item">
                        <NavLink to='/About' className={`navbar_item_link  ${activeMenu === '/About' ? "navbar_item_linkActive" :""}`}>درباه ما</NavLink>
                    </li>

                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">پوشاک</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>مردانه</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>زنانه</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>بجگانه</NavLink>
                            </li>
                        </ul>
                        <span className="navbar_itemIcon">
                            <IoIosArrowDown/>
                        </span>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">کلای دیجیتال</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>لب تاپ</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>موبایل</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>تبلت</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>وسایل جانبی</NavLink>
                            </li>
                        </ul>
                         <span className="navbar_itemIcon">
                            <IoIosArrowDown/>
                        </span>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">لوازم خانگی</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>یخچال و فریزر</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>ماشین لباسشویی</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>اجاق گاز</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>سینک</NavLink>
                            </li>
                        </ul>
                         <span className="navbar_itemIcon">
                            <IoIosArrowDown/>
                        </span>
                    </li>
                    <li className="navbar_item dropdown">
                        <span className="navbar_itemText">زیبایی</span>
                        <ul className="navbar_itemMenus dropdown-content ">
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>لوازم آرایشی</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>عطر</NavLink>
                            </li>
                            <li className="navbar_itemMenu">
                                <NavLink to='/Products' className='navbar_item_link'>لوازم بهداشتی</NavLink>
                            </li>
                        </ul>
                         <span className="navbar_itemIcon">
                            <IoIosArrowDown/>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Navbar