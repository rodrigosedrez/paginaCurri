import react from "react";
import './home.css'
import Foto from './imgs/comp.png'

export default function home(){
    return(
        <>
        <table id="tabela">
            <tr>
            <td id="tabeTx">
        Ser dedicado é um ponto fundamental para alcançar o sucesso em qualquer coisa que fazemos,
         mas é fácil dedicar-se quando se gosta do que se faz; quando não é assim é preciso um pouco mais
          de esforço pessoal e motivação.
            </td>
            <td>
              <img src={Foto} id='foto'></img>
            </td></tr>

            
        </table>
        
        </>
    )
}