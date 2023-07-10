import React from 'react';
import '../Styles/Home.css'
import { Controller, Scene } from 'react-scrollmagic';
//Component Imports
import About from './Page Sections/About';
import Brands from './Page Sections/Brands';
import Testimonials from './Page Sections/Testimonials';
import Work from './Page Sections/Work';


const SectionWipes = () => (
  <div className='animation-container'>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
        <div className="panel one">
        </div>
      </Scene>
      <Scene pin>
        <div className="panel two">
       <About />
        </div>
      </Scene>
      <Scene pin>
        <div className="panel three">
          <Brands/>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel four">
        <Testimonials />
        </div>
      </Scene>
      <Scene pin>
        <div className="panel five">
           <Work />
        </div>
      </Scene>
    </Controller>
  </div>
);

export default SectionWipes;