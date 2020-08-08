const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "123456789",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica", 
        cost: "20,00", 
        weekday: [0], 
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "123456789",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica", 
        cost: "20,00", 
        weekday: [1], 
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "123456789",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica", 
        cost: "20,00", 
        weekday: [1], 
        time_from: [720],
        time_to: [1220]
    }
]

//Dados
const subjects = [ 
    "Artes",
    "Biologia",
    " Ciêcias",
    "Educação Fisica",
    "Fisica",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",                       
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]

//Funcionalidades

function getSubjects(subjectsNumber) {
    const arrayPosition = +subjectsNumber - 1 
    return subjects [arrayPosition]
    
}

function pageLanding(req, res) {
    return res.render("index.html")    
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})    
}

function pageGiveClasses(req, res) { 
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    
    if (isNotEmpty) {
        data.subject = getSubjects(data.subject)
        
        proffys.push(data) 
        return res.redirect("/study")       
    }
    
    //Addicionar od dados preenchidos do formulario para a lista de proffys, com a condição de se existir os dados.   
    return res.render("give-classes.html", {subjects, weekdays})    
}


//servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks') //Importando o pacote nunjucks

//configurando nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Configurando arquivos estaticos (css, scripts e imagens)
server.use(express.static("public"))


//Rotas da plicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)  
.listen(5500)

