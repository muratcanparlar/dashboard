import React, { useContext } from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import { DarkModeContext } from '../../contexts/darkModeContext';
function Navbar() {
    const{dispatch}=useContext(DarkModeContext)
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className="search">
                <input type="text" placeholder='Search...'/>
                <SearchOutlinedIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className='icon'/>
                     English
                </div>
                <div className="item" onClick={()=>{dispatch({type:'TOGGLE'})}}>
                    <DarkModeOutlinedIcon className='icon' style={{cursor:'pointer',color:"goldenrod"}}/>
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <div className='counter'>1</div>                    
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className='icon'/>
                    <div className='counter'>2</div>      
                </div>
                <div className="item">
                    <ListTwoToneIcon/>
                </div>
                <div className='item'>
                    <img src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" 
                         alt="" 
                         className="avatar"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar