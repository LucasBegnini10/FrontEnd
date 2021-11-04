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
function clickClose2(){
    var x = document.getElementById('itensHamburguer');
   
   if(x.style.display ==='none'){
       x.style.display = 'block';
   }else{
       x.style.display ="none";
   }  
}

function functionValidar(){
    let senha2 = document.getElementById('senha2').value;
    let confirmeSenha = document.getElementById("confirmeSenha").value;
    let avisoLogin = document.getElementById("avisoLogin");
    let senhaValida = document.getElementById("senhaValida");
    

    if(senha2 != confirmeSenha){
        if(avisoLogin.style.display=="block"){
            avisoLogin.style.display="none";
        }else if(senhaValida.style.display=="block"){
            senhaValida,style.display="none";
        }else{
            avisoLogin.style.display="block";
        }
    }else{
        if(senhaValida.style.display=="block"){
            senhaValida.style.display="none";
        }else if(avisoLogin.style.display=="block"){
            avisoLogin,style.display="none";
        }else{
            senhaValida.style.display="block";
        }
       }
   
}



function functionEntrar(){
    const email1 = document.getElementById("email1").value;
    const senha1 = document.getElementById("senha1").value;

    if(email1 ==""){
        alert("Ops, você não preencheu todos os campos!")
    }else{
        if(senha1 ==""){
            alert("Ops, você não preencheu todos os campos!")
        }else{
            alert("Login realizado com sucesso!")
        }
    }       
}

function verSenha1(){

    if(senha1.type=="password"){
        senha1.type="text"  
    }else{
        senha1.type="password";
    }
}
function verSenha2(){
    const senha2 = document.getElementById("senha2");

    if(senha2.type=="password"){
        senha2.type="text";
    }else{
        senha2.type="password";
    }
}
function verSenha3(){
    const senha3 = document.getElementById("confirmeSenha");

    if(senha3.type=="password"){
        senha3.type="text";
    }else{
        senha3.type="password";
    }
}

const imgs = document.getElementById("imgCarrosel");
const img = document.querySelectorAll(".imagemCarrosel");

let idx = 0; 

function carrosel(){
  idx++;

  if(idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 800}px)`;
}
setInterval(carrosel, 3000);