function cadastrar() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpf = document.getElementById("cpf").value;
    
    if (password === "" || email === "" || cpf === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    } 
    else if (password.length <= 6){
        alert("A senha deve conter mais de 6 caracteres")
    }
    else {
        alert("Cadastro efetuado!")
    }

}