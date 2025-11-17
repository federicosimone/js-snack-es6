let serieA = [
    {nome: "Juventus", puntiFatti: "" , falliSubiti: "" } ,
    {nome: "Roma", puntiFatti: "" , falliSubiti: "" } ,
    {nome: "Pisa", puntiFatti: "" , falliSubiti: "" } ,
    {nome: "Cremonese", puntiFatti: "" , falliSubiti: "" }
]
 
let elencoSquadre= []


for (i=0 ; i< serieA.length ; i++) {
    serieA[i].puntiFatti= Math.floor((Math.random() * 100) + 1) ;
    serieA[i].falliSubiti= Math.floor((Math.random() * 10) + 1) ;
    elencoSquadre.push(serieA[i].nome) ;
}

console.log(serieA)
console.log(elencoSquadre)





