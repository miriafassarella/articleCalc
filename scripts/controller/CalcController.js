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

    this.setLastNumberToDisplay();//iniciando a calculadora com zero.
 
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
    this.setLastNumberToDisplay();//limpando a ultima entrada no display.
    
}
clearAll(){
    this._operation = [];
    this.setLastNumberToDisplay();//limpando o display.
}
getLastOperation(){
    return this._operation[this._operation.length - 1];
}
isOperator(value){
return ['+', '-', '*', '%', '/'].indexOf(value) > -1; //validando o operador

}
setLastOperation(value){
    this._operation[this._operation.length - 1] = value; //trocando o operador.
}
pushOperation(value){
    this._operation.push(value);

    if(this._operation.length > 3){

            this.calc();
    }
}
calc(){

    let last = '';

        if(this._operation.length > 3){

    last = this._operation.pop();//guardando o quarto numero em uma variável

}

let result = eval(this._operation.join(""));

    if( last == '%'){ //tratando o botão porcento.

        result /= 100;

        this._operation = [result];

    }else{

        this._operation = [result]; //colocando os valores no novo array.
        if(last) this._operation.push(last);
    }
   
   this.setLastNumberToDisplay();
}

setLastNumberToDisplay(){//mostrando os valores no display.
    let lastNumber;

    for(let i = this._operation.length-1; i >=0; i--){

        if(!this.isOperator(this._operation[i])){
            lastNumber = this._operation[i];
            break;
        }
    }

    if(!lastNumber) lastNumber = 0;
    this.displayCalc = lastNumber; // anexando o valor no display.
}

addOperation(value){

    if(isNaN(this.getLastOperation())){//ultimo valor do array, se for uma string.

        if(this.isOperator(value)){//novo valor, se for um operador.
            
            this.setLastOperation(value);//mudando de ideia quanto ao operador.

        }else{ 
            this.pushOperation(value);
            this.setLastNumberToDisplay();
        }

    }else{//se for um numero

        if(this.isOperator(value)){
            this.pushOperation(value);
        }else{ 
        let newValue = this.getLastOperation().toString() + value.toString(); //concatenando os números.
        this.setLastOperation(parseFloat(newValue));

        this.setLastNumberToDisplay();
        
    }
}
}
addDot(){//tratando a ponto e adicionando ele no display.
    let lastOperation = this.getLastOperation();
    
    if(this.isOperator(lastOperation) || !lastOperation){
        this.pushOperation('0.')
    }else{
        this.setLastOperation(lastOperation.toString() + '.');
    }

    this.setLastNumberToDisplay();
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
            this.calc();
                break;
        case '.':
            this.addDot();
                break;
        case '--':
            
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
    if(value.toString().length > 10){
        this.setError();
        return false;
    }

    this._displayCalcEl.innerHTML = value;
}
}