var itemFilme = document.querySelector(".corpo")
var addFilme = document.querySelector("#add")
let cadastrar = document.querySelector("#cadastrar")
let excluir = document.querySelector("#excluir")

function carregar() {
    fetch("http://localhost:3000/pirateflix")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {

                let novoItem = itemFilme.cloneNode(true)

                novoItem.classList.remove("modelo")

                let nome = novoItem.querySelector("#nome")
                let imagem = novoItem.querySelector(".imagem")

                nome.innerHTML = cada.titulo;
                imagem.src = cada.imagem;

                document.querySelector("main").appendChild(novoItem);
            })
        })
}

cadastrar.addEventListener('click', () => {
    let titulo = document.querySelector("#titulo")
    let lancamento = document.querySelector("#lancamento")
    let categoria = document.querySelector("#categoria")
    let cartaz = document.querySelector("#cartaz")

    let cad = {
        "titulo": titulo.value,
        "lancamento": lancamento.value,
        "cartaz": categoria.value,
        "imagem": cartaz.value
    }
    // alert(lancamento.value)
    fetch('http://localhost:3000/pirateflix', {
        "method": 'POST',
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(cad)
    })
        .then(response => {
            return response.json();
        })
        .then(resp => {
            if (resp.titulo !== null) {
                alert("Filme cadastrado com sucesso!");
                window.location.reload();
            } else {
                alert("Falha ao cadastrar filme!")
            }
        })
})

excluir.addEventListener('click', () => {
    fetch('http://localhost:3000/pirateflix/' + id, {
        "method": 'DELETE',
    })
        .then(res => res.json())
        .then(res => console.log(res))
})

let modal = document.querySelector("dialog")

function fecharModal() {
    addFilme.style.backgroundColor = '#2e2e2e'
    addFilme.style.color = 'yellow'
    modal.style.visibility = 'hidden'
    modal.close()
}

addFilme.addEventListener('click', () => {
    addFilme.style.backgroundColor = 'yellow'
    addFilme.style.color = 'black'
    modal.style.visibility = 'visible'
    modal.showModal()
})