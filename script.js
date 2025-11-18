let serieA = [
    {nome: "Juventus", puntiFatti: "" , falliSubiti: "" } ,
    {nome: "Roma", puntiFatti: "" , falliSubiti: "" } ,
    {nome: "Pisa", puntiFatti: "" , falliSubiti: "" } ,
    {nome: "Cremonese", puntiFatti: "" , falliSubiti: "" }
]
 
let elencoSquadre= [] ;

const squadreFiltrate = []


for (i=0 ; i< serieA.length ; i++) {

    const team = serieA[i]
    team.puntiFatti= Math.floor((Math.random() * 100) + 1) ;
    team.falliSubiti= Math.floor((Math.random() * 10) + 1) ;
    elencoSquadre.push(team.nome) ;

    const newObj= {
        nome: team.nome , 
        falli: team.falliSubiti
    } ;
    squadreFiltrate.push(newObj) ;
}

console.log(serieA) ;
console.log(elencoSquadre) ; 
console.log(squadreFiltrate)





