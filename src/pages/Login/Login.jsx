import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
 

const Login =({username, setUsername,socket,room, setRoom}) => {


  
   const navigate = useNavigate();

  const joinRoom = async (e) => {

    if (room !== ''  && username !== '') {
      socket.emit('join_room', { username, room });
      console.log("if error")
    }
    else{
      navigate('/chat', { replace: true });
        }}

  return (
<div className='container'>
      <div className='formContainer'>
        <h1>{`<>DevRooms</>`}</h1>
        <input className='input'placeholder='Username...' onChange={(e) => setUsername(e.target.value)}/>

        <select className='input' onChange={(e) => setRoom(e.target.value)}>
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </select>

        <button className='btn btn-secondary' style={{ width: '100%' }} onClick={joinRoom}>Join Room</button>
      </div>
    </div>
      )
}

export default Login