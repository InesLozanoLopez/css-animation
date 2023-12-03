import React, { useEffect, useState, useRef } from 'react';
import './topBanner.css';
import './videoBanner.css';

function App() {
  const [newMessage, setNewMessage] = useState<boolean>(true);

  const handleNewMessage = () => {
    setNewMessage(!newMessage)
  }

  useEffect(() => {
    const handleScroll = () => {
      const video = document.querySelector('.bannerVideo-video') as HTMLElement;
      if(!video) return;
      const videoHeight = video.offsetHeight;
      const videoBottom = videoHeight + video.offsetTop;

      if (window.scrollY > videoBottom) {
        video.style.height = `${videoHeight}px`;
        video?.classList.add('stuck');
      } else {
        video.style.height = 'auto';
        video.classList.remove('stuck');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <div className='bannerTop'>
        <div className='bannerTop-welcoming'>
          <h1>Welcome!</h1>
        </div>
        {newMessage &&
          <div className='bannerTop-icons' onClick={handleNewMessage}>
            <img src="messageIcon.png" alt='Message icon' className='bannerTop-Icon' aria-label='You have a new message' />
          </div>
        }
      </div>

      <div className='bannerVideo'>
        <iframe className='bannerVideo-video' src="https://www.youtube.com/embed/MRzeLDkWT1c?si=HRtICVES33WC173P" allowFullScreen frameBorder="0" aria-label='GoPro Killian Jornet video'>
          Your browser does not support this HTML5 Video Element
        </iframe>
        <div className='bannerVideo-text' >
          <h2>Text explaining what is the video about</h2>
          <p> Some more text about this video which is very amazing and Killian Jornet is a kind of real super heroe.</p>
        </div>
      </div>
    </>
  );
}

export default App;
