import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Coin(props) {
  const icon="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/"+props.resim+".png" 

  

  return (
    <div className='coincard'>
        <div className='ccresim'><img src={icon}/></div>
        <div className='ccisim'>{props.isim}</div>
        <div className='ccfiyat'>
            {props.fiyat} $
            <div>
            {props.degisim<0?<h5 style={{color:'red'}}>{props.degisim}%</h5>:<h5 style={{color:'green'}}>+{props.degisim}%</h5>}   
            </div>
             
        </div>
        <div className='ccfav'>
        <StarBorderIcon/>
        </div>
    </div>
  )
}

export default Coin