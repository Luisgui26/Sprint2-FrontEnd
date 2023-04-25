function cadastrar() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpf = document.getElementById("cpf").value;
//condição que verifica se o usuário preencheu todos os campos
    if (password === "" || email === "" || cpf === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    } 
 //condição que verifica se a senha tem mais de 6 caracteres   
    else if (password.length <= 6){
        alert("A senha deve conter mais de 6 caracteres")
    }
    else {
        alert("Cadastro efetuado!")
    }

}