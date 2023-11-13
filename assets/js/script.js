const botao = document.querySelector("#botaoTema")

//addeventListener = adicionar um ouvidor de eventos.
botao.addEventListener('click',modo)



// document é o documento do html
//querySelector = selecionar elementos

function modo(){
    let body = document.querySelector("body")
    let atualTemaClaro = document.querySelector("#temaAtualClaro")
    let atualTemaEscuro = document.querySelector("#temaAtualEscuro")
   

    if(botao.checked){
        //setAtribute(atributo,valor)
        body.setAttribute("data-bs-theme","dark")
        atualTemaClaro.style.display = "none"
        atualTemaEscuro.style.display = "block"
      
    }else{
        body.setAttribute("data-bs-theme","light")
        atualTemaClaro.style.display = "block"
        atualTemaEscuro.style.display = "none"
       
    }

}