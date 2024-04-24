//alert("Ola Mundo");
//console.log("Ola mundo");

/*function helloWorld (){
    alert("Ola Mundo");
}

let botao = document.querySelector("button");
botao.addEventListener('click', helloWorld);*/

let botao = document.querySelector("button");
botao.addEventListener('click', function(e){

    let valor = parseInt (document.querySelector('.valor').value);
    
    if (valor >= 18){
        document.querySelector('h1').innerHTML = "SIM";
        document.querySelector('h1').style.color = "green";
    }

    else{
        document.querySelector('h1').innerHTML = "NAO";
        document.querySelector('h1').style.color = "red";
    }
    

   
});
