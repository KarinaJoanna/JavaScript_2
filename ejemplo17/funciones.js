function saludar(saludarFuncion){
    saludarFuncion();
}

const saludoInternacional = function(){
    console.log("Hola Mundo");
}

const saludoMexicano = function(){
    console.log("Quiubole!");
}

saludar(saludoInternacional);
saludar(saludoMexicano);