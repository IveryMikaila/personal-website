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

testimony.innerHTML = `" ONE Lorem ipsum dolor sit amet. Eum quae nihil rem veniam asperiores et modi pariatur non dolorem harum et natus omnis et voluptatum facilis ut inventore expedita. "`
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
  
  testimony.innerHTML = `" TWO Lorem ipsum dolor sit amet. Eum quae nihil rem veniam asperiores et modi pariatur non dolorem harum et natus omnis et voluptatum facilis ut inventore expedita. "`
  name.innerHTML = `Cameal Richardson`
  position.innerHTML = `Creative Director at Brooklyn House of Hair`
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
    
    testimony.innerHTML = `" THREE Lorem ipsum dolor sit amet. Eum quae nihil rem veniam asperiores et modi pariatur non dolorem harum et natus omnis et voluptatum facilis ut inventore expedita. "`
    name.innerHTML = `Raffa Valleon`
    position.innerHTML = `Project Manager at Boy Blondey`
    pagnationDotOne.innerHTML = `◦`
    pagnationDotTwo.innerHTML = `◦`
    pagnationDotThree.innerHTML = `⦿`
    }


  return (
    <div id='testimonials' className='testimony-container' >
    <div className='text-container'>
      <h1 className='text-message'>&#x22;	Lorem ipsum dolor sit amet. Eum quae nihil rem veniam asperiores et modi pariatur non dolorem harum et natus omnis et voluptatum facilis ut inventore expedita.&#x22;</h1>
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

