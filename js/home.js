window.onload = () => {
    let objUsuario = sessionStorage.getItem("usuario"); 
    let usuario = JSON.parse(objUsuario);

    let mensagem = document.getElementById("msg");


    mensagem.innerHTML += usuario.name;
}

let botao = document.getElementById("sair");

botao.addEventListener("click", (event) => {
    sessionStorage.clear();
    window.location.href = "index.html";
} );