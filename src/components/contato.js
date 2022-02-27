import react from "react";
import './contato.css'


export default function contato(){
    return(
        <>
        <div className="container">
      <form>
         <label htmlFor="nome">Nome</label>
        <input type="text" id="nome"  placeholder="Nome da pessoa.." /> 

        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail de destino.." />
 
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Deixe seu reacado" className="textArea"></textarea>
 
 
        <input type="submit" value="Enviar" />
      </form>
    </div>
        </>
    )
}