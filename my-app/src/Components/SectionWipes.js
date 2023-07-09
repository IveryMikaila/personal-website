import React from 'react';
import '../Styles/Home.css'
import { Controller, Scene } from 'react-scrollmagic';


const SectionWipes = () => (
  <div className='animation-container'>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
        <div className="panel one">
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