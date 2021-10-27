function clickProduto(){
    var x = document.getElementById('modal');

    if(x.style.display ==='none'){
        x.style.display = 'block';
    }else{
        x.style.display ="none";
    }
    
}

function clickClose(){
     var x = document.getElementById('modal');

     if(x.style.display ==='none'){
        x.style.display = 'block';
    }else{
        x.style.display ="none";
    }
 }


function functionValidar(){
    let senha = document.getElementById('senha').value;
    let confirmeSenha = document.getElementById("confirmeSenha").value;
    let avisoLogin = document.getElementById ("avisoLogin"); 
    let senhaValida = document.getElementById("senhaValida")
   
    if(senha === confirmeSenha){
        if(senhaValida.style.display == "none"){
            senhaValida.style.display ="block";
        }else{
            senhaValida.style.display ="none";
        }
    }else{
        if(avisoLogin.style.display === "none"){
            avisoLogin.style.display ="block";
        }else{
            avisoLogin.style.display ="none";   
        }
    }
}
    
