import {Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import io from 'socket.io-client';
import Chat from './pages/Chat/index';
import Login from './pages/Login/Login'; 

const socket = io.connect('http://localhost:5000');
function App() {
  const [username, setUsername] = useState(''); // Add this
  const [room, setRoom] = useState(''); // Add this
  return (

    <div className="App">
    <Routes>
          <Route
            path='/'
            element={
              <Login
                username={username} // Add this
                setUsername={setUsername} // Add this
                room={room} // Add this
                setRoom={setRoom} // Add this
                socket={socket} // Add this
              />
            }
          />
          <Route
            path='/chat'
            element={<Chat username={username} room={room} socket={socket} />} />
        </Routes>

    </div>

  );
}

export default App;
