import React from 'react'
import './BarraMenus.css'
import Home from './Home'
import Contato from './contato'
import Games from './games'
import Curriculo from './curriculo'


export default function brraMenu(){
    
    return(
        <>
        <section id='buttons'>
        <button className='botao' onClick={()=>{
            document.getElementById("shome").style.display="block"
            document.getElementById("curri").style.display="none"
            document.getElementById("cont").style.display="none"
            document.getElementById("game").style.display="none"
        }}>Home</button>
        <button className='botao' onClick={()=>{
            document.getElementById("curri").style.display="block"
            document.getElementById("shome").style.display="none"
            document.getElementById("cont").style.display="none"
            document.getElementById("game").style.display="none"
            
        }}>Curriculo</button>
        <button className='botao' onClick={()=>{
            document.getElementById("cont").style.display="block"
            document.getElementById("curri").style.display="none"
            document.getElementById("shome").style.display="none"
            document.getElementById("game").style.display="none"
        }}>Contato</button>
        <button className='botao' onClick={()=>{
            document.getElementById("game").style.display="block"
            document.getElementById("curri").style.display="none"
            document.getElementById("cont").style.display="none"
            document.getElementById("shome").style.display="none"
        }}>Games</button>
        </section> 
        <section id='shome'><Home /></section>
        <div id='curri'><Curriculo /></div>
        <div id='cont'><Contato /></div>
        <div id='game'><Games /></div>
          
        
        </>
        
    )
}