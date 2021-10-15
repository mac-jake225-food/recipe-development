import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import { IconContext } from 'react-icons';

import './Sidebar.css';

//rafc


export const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
        <IconContext.Provider value={{ color: 'black' }}>
          <div className='sidebar'>
            <Link to='#' className='menu-bars'>
              <BsFillArrowLeftCircleFill onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
            <ul className='sidebar-menu-items' onClick={showSidebar}>
              <li className='sidebar-toggle'>
                <Link to='#' className='menu-bars'>
                  <BsFillArrowLeftCircleFill/>
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
}
export default Sidebar;