const Database = require('./db.js')
const createProffy = require('./createProffy')
//const Database = require('sqlite-async')


Database.then(async (db) => {
    //inserir dados 

    proffyValue = {

        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "123456789",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."                 
    }

    classValue = {

        subject: "Quimica", 
        cost: "20,00"         
    }

    classScheduleValues = [{

        weekday: 1, 
        time_from: 720,
        time_to: 1220
    },
    {

        weekday: 0, 
        time_from: 520,
        time_to: 1220
    }
]   
    

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar esses dados (todos os proffys)
    const selectProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectProffys)
    //consultar as classes de um determinado professor e os dados dele

    const selectclassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 0;
        `)
        console.log(selectclassesAndProffys)
})