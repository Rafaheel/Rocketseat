// procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener("click", cloneField)


//Executar uma ação
function cloneField() {
    //duplicar os campos, que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //Bolean: retorn true or false

    //Limpar os capos, que campos
    const fields = newFieldContainer.querySelectorAll('input')
    

    //para cada campo limpar
    fields.forEach(function (field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })



     //Colocar na pagina, em que lugar da pagina?
     document.querySelector("#schedule-items").appendChild(newFieldContainer)

    
}

    


   

 