const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./page')


const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
  express: server,
  noCache: true,
})

server

.use(express.urlencoded ({ extended: true}))

.use(express.static("public"))

.get("/", pageLanding)

.get ("/study", pageStudy)

.get ("/give-classes", pageGiveClasses)

.post ("/save-classes", saveClasses)

.listen(5500, () => {
  console.log("Server rodando na porta 5500")
})



//Como Rodar o node no terminal do VScode
//iniciando o pacote de sub dependencias (npm init -y)
//Instalando a biblioteca para o servidor (npm install express)
//Como atualizar automaticamente o servidor (npm nodemon -D) Como desenvolvedor
//instalando nunjucks (npm install nunjucks)