class CalcController{

constructor(){
    /*this transforma uma variável em um atributo..
    faz referência ao objeto que foi instanciado a classe.*/
    this._displayCalcEl = document.querySelector("#display");//aqui nós amarramos nosso elemento ao javascript.
    this.initial(); //colocamos aqui pq o construtor é iniciado automaticamente.
    this.buttonsEvents();
}

initial(){//quando a calculadora inicia.
    
 
}


buttonsEvents(){

    let buttons = document.querySelectorAll("#row-buttons > div");//Amarrando a cada elemento.

    buttons.forEach(btn=>{//percorrendo cada elemento.
        //recebendo o resultado no click no console.
        btn.addEventListener("click", e=>{
            console.log(btn.className.replace("button", ""));
        })
        //recebendo o resultado de passar o mouse em cima.
        btn.addEventListener("mouseover", e=>{
            btn.style.cursor = "pointer";
        })

        })


        
    
}

get displayCalc(){
    return this._displayCalcEl.innerHTML;
}
set displayCalc(value){
    this._displayCalcEl.innerHTML = value;
}
}