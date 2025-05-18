localStorage.setItem("nickname", "passFaca")//setar item, dentro dos parentes vai servir para o que quer adicionar no localStorage
const nome = localStorage.getItem("nickname")
console.log(nome)

localStorage.removeItem("nickname")

localStorage.clear()


const usuario = {
    nome: "Carlos",
    senha: "1290"
}
localStorage.setItem("usuario", usuario) //salva dentro do localStorage como "objeto"
localStorage.setItem("usuario", JSON.stringify(usuario))//transforma em string

const nomeUsuario = JSON.parse(localStorage.getItem("usuario"))

const nomeUser = localStorage.getItem("usuario")
console.log(usuario)
console.log("-------")
console.log(nomeUser)
console.log('--------')
console.log(nomeUsuario)
