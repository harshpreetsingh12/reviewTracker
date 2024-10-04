import React from 'react'
import Small_logo from '../../assets/images/logo/logo-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavBarWrap, NavItem, pathIcons, StaticWall } from './NavbarStylesData';
import { getFormattedDate } from './LayoutHelpers';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../reduxStore/actionsReducers/themeReducer/themeActions';


const Navbar = () => {
  const dispatch= useDispatch()
  const theme = useSelector((state) => state.themeState.theme);

  return (
    <header>
        <nav >
          <NavBarWrap className='fixed h-full w-20' >
            <div>
              <img 
                src={Small_logo}
                alt="ReviewTracker Logo"
                className="w-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
            {pathIcons.map((element)=>{
              return (
                <NavItem>
                  <FontAwesomeIcon icon={element.icon}/>
                </NavItem>
              )
            })}
          </NavBarWrap>

          <StaticWall className='pl-24'>
            <div className='flex justify-between items-center p-4'>
              <h3 className='text-sm'>{getFormattedDate()}</h3>
              <SearchBar/>
              <div className='cursor-pointer ' onClick={() => dispatch(toggleTheme())}>
                <FontAwesomeIcon icon={theme.theme==='dark'?'sun':'moon'}/>
              </div>
            </div>
          </StaticWall>
        </nav>
      </header>
  )
}

export default Navbar
