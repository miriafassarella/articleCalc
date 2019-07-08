class CalcController{

constructor(){
    /*this transforma uma variável em um atributo..
    faz referência ao objeto que foi instanciado a classe.*/
    this._displayCalcEl = document.querySelector("#display");//aqui nós amarramos nosso elemento ao javascript.
    this.initialize(); //colocamos aqui pq o construtor é iniciado altomaticamente.
    this.initButtonsEvents();
}

initialize(){//quando a calculadora inicia.
    
 
}
initButtonsEvents(){

    let buttons = document.querySelectorAll("#row-buttons > .button");//Amarrando a cada elemento.
    buttons.forEach(button=>{//percorrendo cada elemento.
        button.addEventListener('click', e=>{//adicionando o evento.
            console.log(e);
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