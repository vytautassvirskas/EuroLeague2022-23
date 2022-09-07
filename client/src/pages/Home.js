import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import convertDate from '../utils/Date'
import "./home.css"

const Home = () => {
  const[games, setGames]=useState([])

  useEffect(() => {
    axios.get('/games/')
    .then(resp =>{
      console.log(resp)
      setGames(resp.data)
    }
        )
  }, [])

  return (
    <div className='main-page'>
      <div className='cards-container'>
        {games.map(game => {
          return (
            <div key={game.id} className='card'>
              <div className='tournament-info'>
                <img src="https://media-cdn.incrowdsports.com/23610a1b-1c2e-4d2a-8fe4-ac2f8e400632.svg" alt="euroleague-logo" />
                <p className='trounament-name'>{game.tournament}</p>
              </div>
              
              <div className='card-bottom'>
                <div className='team-info'>
                  <img src={game.team1Logo} alt="team1Logo"/>
                  <p className='team-name'>{game.team1Name}</p>
                </div>
                {game.results.length>0?(
                <div className='game-info'>
                  <p className='game-dashboard'> 25:58</p>
                  <div className='link-wrapper'>
                      <Link to={"/results/"+game.id} className='stats-link'><img src="https://www.svgrepo.com/show/54740/stats.svg" alt="stats-logo" /></Link>
                    </div>
                </div>
                ):(
                  <div className='game-info'>
                    <p className='game-date'>{convertDate(game.date)}</p>
                    <p className='game-date'>{game.place}</p>
                    <div className='link-wrapper'>
                      <Link to={"/results/"+game.id} className='stats-link'><img src="https://www.svgrepo.com/show/54740/stats.svg" alt="stats-logo" /></Link>
                    </div>
                  </div>
                )                
                }
                <div className='team-info'>
                  <img src={game.team2Logo} alt="team1Logo"/>
                  <p className='team-name'>{game.team2Name}</p>
                </div>
              </div>
            </div>
          )
        })

        }

      </div>
    </div>
  )
}

export default Home