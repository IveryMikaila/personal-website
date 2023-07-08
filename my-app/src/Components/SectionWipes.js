import React from 'react';
import '../Styles/Home.css'
import { Controller, Scene } from 'react-scrollmagic';
import video from '../assets/video.mp4';
import image from '../assets/brain.gif'

const SectionWipes = () => (
  <div className='animation-container'>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
        <div className="panel one">
        {/* <video controls autoPlay loop width="100%" height="100%">
    <source src={video} type="video/mp4" />
</video> */}
<img width="100%" height="100%" src={image} alt='brain x-ray'/>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel two">
        <div>ABOUT</div> 
        </div>
      </Scene>
      <Scene pin>
        <div className="panel three">
            <div>BRANDS</div>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel four">
            <div>TESTIMONIALS</div>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel five">
            <div>WORK/CONTACT</div>
        </div>
      </Scene>
    </Controller>
  </div>
);

export default SectionWipes;