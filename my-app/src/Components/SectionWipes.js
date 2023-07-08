import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

const SectionWipesStyled = styled.div`
width: 50%;
margin-left:50%;

  .panel {
    height: 100vh;
  }
    
  .panel.one {
    background-color: #3883d8;
  }
  
  .panel.two {
    background-color: #38ced7;
  }
  
  .panel.three {
    background-color: #22d659;
    margin-bottom: 800px;
  }
  
  .panel.four {
    background-color: #953543;
  }
  .panel.five {
    background-color: #f62680;
  }

`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
        <div className="panel one">
<div>VIDEO</div>

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
  </SectionWipesStyled>
);

export default SectionWipes;