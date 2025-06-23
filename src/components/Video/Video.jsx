import React from 'react';
import './video.scss';

const Video = () => {
  return (
    <>
    <section className="video">
      <div className="image">
        <picture>
          <source srcset="./assets/images/video/video-m.jpg" media="(max-width: 768px)" />
          <source srcset="./assets/images/video/video.jpg" media="(max-width: 1512px)" />
          <img style={{width: '100%'}} src="./assets/images/video/video.jpg" alt="Example Image" />
        </picture>
      </div>
    </section>
    </>
  )
}

export default Video
