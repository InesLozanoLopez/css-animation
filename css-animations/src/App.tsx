import React, { useState } from 'react';
import './App.css';

function App() {
  const [newMessage, setNewMessage] = useState<Boolean>(true);
  
  const handleNewMessage = () => {
    setNewMessage(!newMessage)
  }
  return (
<>
<div className='bannerTop'>
  <div className='bannerTop-welcoming'>
  <h1>Welcome!</h1>
  </div>
  {newMessage &&
  <div className='bannerTop-icons' onClick={handleNewMessage}>
    <img src="messageIcon.png" alt='Message icon' className='bannerTop-Icon'/>
  </div>
}
</div>
</>
  );
}

export default App;
