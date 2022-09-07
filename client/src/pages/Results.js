import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import axios from "axios"
import "./results.css"

const Results = () => {
  const {gameId}=useParams()
  const [pointsForm,setPointsForm]=useState({
    points: '',
		teamName: '',
		time: ''
  })
  const [ alert, setAlert ] = useState({
    message: '',
    status: ''
  });
  const [refresh,setRefresh]=useState(false)
  const [stats, setStats] = useState([])
  const [gameInfo, setGameInfo]=useState({})
  const [gameEnded, setGameEnded] = useState(false)
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(gameId);
    axios.get('/results/'+gameId)
    .then(resp =>{
      console.log(resp)
      // setStats(resp.data)
      setStats(resp.data.results)
      setGameInfo(resp.data.gameInfo)
    })
    .catch(error=>{
      console.log(error);
      setAlert({
        message: error.response.data,
        status: 'danger'
      });
    })
  },[refresh])
 
  const handleForm = (e) =>{
    setPointsForm({...pointsForm,[e.target.name]:e.target.value})
  }
  

  const handleAdd = (e)=>{
    e.preventDefault()
    console.log("veikia");
    axios.post("/results/"+gameId, pointsForm)
    .then(resp=>{
      setRefresh(!refresh)
      setAlert({
				message: resp.data,
				status: 'success'
			});
    })
    .catch(error=>{
      console.log(error);
      setAlert({
        message: error.response.data,
        status: 'success'
      });
    })
    
  }

  return (
    <div className='results-page'>
      <div className='results-add-container'>
        <h1 className='results-add-title'>Taškų įvedimas</h1>
        <form action="" className='form' onSubmit={(e)=>handleAdd(e)}>
          <div className='input-info'>
            <label htmlFor="points">Taškų skaičius</label>
            <select name="points" id="points" onChange={(e)=>handleForm(e)}>
              <option value="initial" selected disabled></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className='input-info'>
            <label htmlFor="team-name">Komandos pavadinimas</label>
            <select name="teamName" id="team-name" onChange={(e)=>handleForm(e)}>
              <option value="initial" selected disabled></option>
              {gameInfo && (
                <>
                <option value={gameInfo.team1Name}>{gameInfo.team1Name}</option>
                <option value={gameInfo.team2Name}>{gameInfo.team2Name}</option>
                </>
              )}
            </select>
          </div>
          <div className='input-info'>
            <label htmlFor="time">Laikas</label>
            <input name='time' 
            type="text" 
            id='time'
            placeholder={pointsForm.time}
            onChange={(e)=>handleForm(e)}
            />
          </div>
          <div className='save-btn-wrapper'>
            <button className='save-btn'>Saugoti</button>
          </div>
        </form>
      </div>
      <div className='results-show-container'>
        {stats&& stats.map(data=>{
          if(data.teamName == data.game.team1Name){
            return (
              <div key={data.id} className='results-show-card' style={{borderLeft: "4px solid black"}}>
                <div className='team1-info'>
                  <p>{data.points} tšk. įmeta <span className='team-name-small'>{data.game.team1Name}</span></p><img className='logo-result-team' src={data.game.team1Logo}></img>
                </div>
                <div className='game-time-info'>
                  <p>{data.time}</p>
                </div>
                <div className='team2-info'>
                {/* <img src={data.game.team2Logo}></img><p>{data.points} tšk. įmeta <span className='team-name-small'>{data.game.team2Name}</span></p> */}
                </div>
              </div>
              )
          }
          if(data.teamName == data.game.team2Name){
            return (
                <div key={data.id}  className='results-show-card' style={{borderRight: "4px solid darkgreen"}}>
                <div className='team1-info'>
                  {/* <p>{data.points} tšk. įmeta <span className='team-name-small'>{data.game.team1Name}</span></p><img src={data.game.team1Logo}></img> */}
                </div>
                <div className='game-time-info'>
                  <p>{data.time}</p>
                </div>
                <div className='team2-info'>
                <img className='logo-result-team' src={data.game.team2Logo}></img><p>{data.points} tšk. įmeta <span className='team-name-small'>{data.game.team2Name}</span></p>
                </div>
              </div>
                )
          }
        }
        )
        }
      </div>
    </div>
  )
}

export default Results