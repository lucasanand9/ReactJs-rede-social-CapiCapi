export default function postUsuarioLogin(){

    let campoEmail = document.getElementById("email").value
    let campoSenha = document.getElementById("senha").value

    fetch('http://localhost:8080/loginUsuario', {
        method: 'POST',
        body: JSON.stringify({
            email: campoEmail,
            senha: campoSenha,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.text())
    .then((text) => {
        sessionStorage.setItem('userToken', text)
    })
}