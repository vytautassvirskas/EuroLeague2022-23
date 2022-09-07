import React from 'react'
import {Link} from "react-router-dom"
import "./header.css"

const Header = () => {
  return (
    <header className='header'>
        <div className='teams-logos-wrapper'>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Alba_Berlin_logo.svg/1200px-Alba_Berlin_logo.svg.png" 
            alt="berlin-alba-logo." />

            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anadolu_Efes_SK_logo.svg/1200px-Anadolu_Efes_SK_logo.svg.png" 
            alt="efes-logo." />

            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/2020px-FC_Barcelona_%28crest%29.svg.png" 
            alt="barcelonaa-logo." />

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png" 
            alt="bayern-logo." />
        </div>
        <div className='teams-logos-wrapper'>
          <Link to="/"><img src="https://media-cdn.incrowdsports.com/23610a1b-1c2e-4d2a-8fe4-ac2f8e400632.svg" alt="euroleague-logo" /></Link>
        </div>
        <div className='teams-logos-wrapper'>
            <img src="https://media-cdn.incrowdsports.com/b2f93842-1291-49ed-ab35-79a5010c3abd.png" 
            alt="baskonia-logo." />

            <img src="https://media-cdn.incrowdsports.com/8154f184-c61a-4e7f-b14d-9d802e35cb95.png" 
            alt="armani-logo." />

            <img src="https://upload.wikimedia.org/wikipedia/lt/5/52/LDLC_ASVEL_Basket_logo.png" 
            alt="asvel-logo." />
            
            <img src="https://upload.wikimedia.org/wikipedia/lt/thumb/d/d2/BC_%C5%BDalgiris_emblema.png/480px-BC_%C5%BDalgiris_emblema.png" 
            alt="zalgiris-logo." />
        </div>        
    </header>
    
  )
}

export default Header