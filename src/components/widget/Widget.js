import React from 'react'
import './widget.scss'
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function Widget() {
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>USERS</span>
            <span className='counter'>Users</span>
            <span className='link'>See our users</span>
        </div>
        <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpTwoToneIcon/>
                20%
            </div>
                <PersonOutlineIcon className='icon'/>
           
        </div>
    </div>
  )
}

export default Widget