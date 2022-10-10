import React from 'react'
import './widget.scss'
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
function Widget({type}) {
    //temporary data
    const amount=100;
    const diff=20;
    let data;
    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<PersonOutlineIcon className="icon" style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>
            };
            break;
        case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"View all orders",
                icon:<ShoppingCartCheckoutIcon className="icon" style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}}/>
            };
            break;
        case "earning":
            data={
                title:"EARNINGS",
                isMoney:true,
                link:"View new earnings",
                icon:<MonetizationOnIcon className="icon" style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}/>
            };
            break;    
        case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See details",
                icon:<AccountBalanceWalletOutlinedIcon className="icon" style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>
                }
                
            break
            default:
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className="right">

            <div className="percentage positive">
              <KeyboardArrowUpTwoToneIcon/>
                {diff }%
            </div>
                {data.icon}
           
        </div>
    </div>
  )
}

export default Widget