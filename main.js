let biciDaCorsa = [
    {nome:"Bianchi" , peso: "10.5"} , 
    {nome:"Triban" , peso: "7.2"} ,
    {nome:"Pinarello" , peso: "13"} ,
    {nome:"Silverstar" , peso: "6.50"} ,  
]

//console.log(biciDaCorsa)

//console.log(parseInt(biciDaCorsa[2].peso))

let pesoMinore= biciDaCorsa[0].peso ;


for (i=1; i< biciDaCorsa.length ; i++) {

    let pesoBici= parseFloat(biciDaCorsa[i].peso)

    if (pesoBici < parseFloat(biciDaCorsa[i-1].peso)) {
        pesoMinore = parseFloat(pesoBici) ;
    } 
}

console.log(pesoMinore);