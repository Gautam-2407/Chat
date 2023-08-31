import './Chat.css'
import RoomAndUsersColumn from './room-and-users'; // Add this
import SendMessage from './Send-message';
import MessagesReceived from './Messages';

const Chat = ({ username, room, socket }) => {
  return (
    <div className='chatContainer'>
      {/* Add this */}
      <RoomAndUsersColumn socket={socket} username={username} room={room} />

      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;