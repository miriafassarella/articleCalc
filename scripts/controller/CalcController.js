class CalcController{

constructor(){
    
    this._operation = [];
    /*this transforma uma variável em um atributo..
    faz referência ao objeto que foi instanciado a classe.*/
    this._displayCalcEl = document.querySelector("#display");//aqui nós amarramos nosso elemento ao javascript.
    this.initial(); //colocamos aqui pq o construtor é iniciado automaticamente.
    this.buttonsEvents();
    
    
}

initial(){//quando a calculadora inicia.
    
 
}





addEventListenerAll(element, events, fn){

    events.split(' ').forEach(event =>{

        element.addEventListener(event, fn);
    })
}
setError(){
this.displayCalc = 'Error';
}
clearEntry(){
    this._operation.pop();
    console.log(this._operation);
}
clearAll(){
    this._operation = [];
    console.log(this._operation);
}
getLastOperation(){
    return this._operation[this._operation.length - 1];
}
isOperator(value){
return ['+', '-', '*', '%', '/'].indexOf(value) > -1; //validando o operador


}
setLastOperation(value){
    this._operation[this._operation.length - 1] = value;
}

addOperation(value){

    if(isNaN(this.getLastOperation())){

        if(this.isOperator(value)){
            this.setLastOperation(value);
        }else if(isNaN(value)){

        }else{ 
            this._operation.push(value);
        }

    }else{
        let newValue = this.getLastOperation().toString() + value.toString();
        this.setLastOperation(newValue);
    }

    
    console.log(this._operation);
}
 
execBtn(value){
    switch(value){

        case 'AC':
            this.clearAll()
        break;
        case 'CE':
            this.clearEntry();
        break;
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            this.addOperation(value);
                break;
        case '=':
            
                break;
        case '.':
            
                break;

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            this.addOperation(parseInt(value));
                break;
            default:
                 this.setError();   
                break;

    }
}


buttonsEvents(){

    let buttons = document.querySelectorAll("#row-buttons > div");//Amarrando a cada elemento.
    
    buttons.forEach((btn, index)=>{

        this.addEventListenerAll(btn, 'click drag', e =>{
            let textBtn = btn.className.replace('button button-', "");
            this.execBtn(textBtn);
            
        });

        this.addEventListenerAll(btn, 'mouseover', e =>{

            btn.style.cursor = 'pointer';
        })

    });
    

        
}

get displayCalc(){
    return this._displayCalcEl.innerHTML;
}
set displayCalc(value){
    this._displayCalcEl.innerHTML = value;
}
}