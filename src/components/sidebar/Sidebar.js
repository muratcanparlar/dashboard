import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PollRoundedIcon from '@mui/icons-material/PollRounded';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import {Link} from 'react-router-dom'


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration: "none"}}>
                <span className='logo'>mcp dasboard</span>
            </Link>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration: "none"}}>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span> 
                    
                    </li>
                </Link>
                <p className="title">LISTS</p>
                
                <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <Person2OutlinedIcon className='icon'/>
                        <span>Users</span> 
                    </li> 
                </Link>
                <li>
                    <StoreOutlinedIcon className='icon'/>
                    <span>Products</span> 
                </li>
                <li>
                    <CreditCardOutlinedIcon className='icon'/>
                    <span>Orders</span> 
                </li>
                <li>
                    <LocalShippingRoundedIcon className='icon'/>
                    <span>Delivery</span> 
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <PollRoundedIcon className='icon'/>
                    <span>Stats</span> 
                </li>
                <li>
                    <NotificationsNoneIcon className='icon'/>
                    <span>Notifications</span> 
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                    <span>System Health</span> 
                </li>
                <li>
                    <PsychologyOutlinedIcon className='icon'/>
                    <span>Logs</span> 
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon'/>
                    <span>Settings</span> 
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span> 
                </li>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Logout</span> 
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar