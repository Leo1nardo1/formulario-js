const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobSelect = document.querySelector('#job')
const messageInput = document.querySelector('#message')

form.addEventListener("submit", (event) =>{
    event.preventDefault();


    // verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome")
        return;
    }
  // Verifica se o e-mail está preenchido e se é válido
  if(emailInput.value === "" || isEmailValid(emailInput.value)){
    alert("Por favor, preencha o seu e-mail");
    return;
  }
  // Se todos os campos estiverem corretamente preenchidos, envie o form
  form.submit();

});

//Função que valida e-mail
function isEmailValid(email){
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        //leonardowar15      @             hotmail.com   Informa que o padrão pode acontecer 2 ou mais vezes (.com ou .com.br)
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
//faz a validação
    if(!emailRegex.test(email)){
        return true;
    }

    return false;
    

}
