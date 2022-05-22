import React from 'react'
import './inicio.css'
import img1 from './InicioImg/torneo.jpg'
import img2 from './InicioImg/bingo1.jpg'
function Inicio(){
    return(
        <div className='container'>
            <h1 className='h1_g'>Grow your money</h1>
            <h2 className='h2_1'>Torneo</h2>
            <img src={img1} className="imgr"></img>
            <h2 className='h2_2'>Bingo</h2>
            <img src={img2} className="imgr2"></img>
            <h2 className="h2_3">Link</h2>
            <h4 className='link'><a href='https://www.twitch.tv/' style={{color:"white"}}>https://www.twitch.tv/</a></h4>
            
        </div>
    )

}
export default Inicio