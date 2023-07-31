import React from 'react';
import '../../Styles/Final.css'


export default function Testimonials() {


function changeTestimony1(){
let testimony = document.querySelector('.text-message');
let name =  document.querySelector('.text-name');
let position =  document.querySelector('.text-position');
let pagnationDotOne =  document.querySelector('.dot1');
let pagnationDotTwo =  document.querySelector('.dot2');
let pagnationDotThree =  document.querySelector('.dot3');

testimony.innerHTML = `" Mikaila has been a tremendous asset to our brand. She consistently meets deadlines, surpasses expectations when help is required, and displays an exceptional work ethic. I wholeheartedly endorse her services and highly recommend her without reservation. "`
name.innerHTML = `Ray Miah`
position.innerHTML = `Founder at Orée Nyc`
pagnationDotOne.innerHTML = `⦿`
pagnationDotTwo.innerHTML = `◦`
pagnationDotThree.innerHTML = `◦`

}
function changeTestimony2(){
  let testimony = document.querySelector('.text-message');
  let name =  document.querySelector('.text-name');
  let position =  document.querySelector('.text-position');
  let pagnationDotOne =  document.querySelector('.dot1');
  let pagnationDotTwo =  document.querySelector('.dot2');
  let pagnationDotThree =  document.querySelector('.dot3');
  
  testimony.innerHTML = `" I was looking for a Web professional who would code and design my website. Mikaila delivers exactly what I want. It’s always a pleasure working and seeing her. "`
  name.innerHTML = `Portia Magwaza`
  position.innerHTML = `Creative Director at Waist Away by Moojy`
  pagnationDotOne.innerHTML = `◦`
  pagnationDotTwo.innerHTML = `⦿`
  pagnationDotThree.innerHTML = `◦`
  
  }
  function changeTestimony3(){
    let testimony = document.querySelector('.text-message');
    let name =  document.querySelector('.text-name');
    let position =  document.querySelector('.text-position');
    let pagnationDotOne =  document.querySelector('.dot1');
    let pagnationDotTwo =  document.querySelector('.dot2');
    let pagnationDotThree =  document.querySelector('.dot3');
    
    testimony.innerHTML = `"  Working on a small team with Mikaila is always fun and productive at the same time. She's very empathetic toward everyone's ideas. Highly recommend. 
    "`
    name.innerHTML = `Raffa Valleon`
    position.innerHTML = `Project Manager at Boy Blondey`
    pagnationDotOne.innerHTML = `◦`
    pagnationDotTwo.innerHTML = `◦`
    pagnationDotThree.innerHTML = `⦿`
    }


  return (
    <div id='testimonials' className='testimony-container' >
    <div className='text-container'>
      <h1 className='text-message'>&#x22;	Mikaila has been a tremendous asset to our brand. She consistently meets deadlines, surpasses expectations when help is required, and displays an exceptional work ethic. I wholeheartedly endorse her services and highly recommend her without reservation. &#x22;</h1>
      <h3 className='text-name'>Ray Miah</h3>
      <p className='text-position'>Founder of Orée Nyc</p>
      <div className='pagnation'>
      <span onClick={changeTestimony1} className='pagnation-dot dot1'>◦ </span>
      <span onClick={changeTestimony2} className='pagnation-dot dot2'>◦ </span>
      <span onClick={changeTestimony3} className='pagnation-dot dot3'>◦</span>
    </div>
    </div>
   
    </div>
  );
}

