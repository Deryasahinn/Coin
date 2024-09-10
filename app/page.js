'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './components/Coin'
import Header from './components/Header'



function Page() {
const[veri,setVeri]=useState([])
const[favoriler,setFavoriler]=useState([])

const favekle=()=>{
  var deger=document.getElementById('coinsec').value
  setFavoriler([...favoriler,deger])
  document.getElementById('coinsec').value=""


}

useEffect(()=>{
  axios.get("https://api.coinlore.net/api/tickers/")
  .then((response)=>{setVeri(response.data.data)})
  .catch((e)=>{console.log(e)})
  .finally(()=>{console.log("bir şeyler oldu")})

},[])



  return (
    <div>
      <Header/>
      <div className='ana'>
      <div className='sol'>
          <div className='coinler'>
          {veri.map((para)=>(
              <Coin
               
              resim={para.symbol.toLowerCase()} 
              degisim={para.percent_change_1h}
              isim={para.name} 
              fiyat={para.price_usd}/>
            ))}
            
          </div>
      </div>
      <div className='orta'>
        <input id="coinsec" placeholder='Coin'/><button onClick={favekle}>Ekle</button>
        {veri.map((para)=>{
          if(favoriler.includes(para.symbol.toLowerCase())){
            return(
              <Coin
               
              resim={para.symbol.toLowerCase()} 
              degisim={para.percent_change_1h}
              isim={para.name} 
              fiyat={para.price_usd}/>
            )
          }})}
      </div>
      <div className='sag'>

        <img style={{width:'100%'}} src="https://public.bnbstatic.com/image/cms/blog/20230110/ef0c390d-0cf5-4c42-b6e5-09cc37d04ba1"/>

        <img style={{width:'100%',marginTop:50}} src="https://public.bnbstatic.com/image/cms/blog/20231201/a126babf-1b95-4fa8-a302-b9288200578e.png"/>
      </div>
    </div>
    </div>
    
  )
}

export default Page