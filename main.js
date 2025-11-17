let biciDaCorsa = [
    {nome:"Bianchi" , peso: "6,8"} , 
    {nome:"Triban" , peso: "7,2"} ,
    {nome:"Pinarello" , peso: "13"} ,  
]

//console.log(biciDaCorsa)

//console.log(parseInt(biciDaCorsa[2].peso))

pesoMinore= null


for (i=0; i< biciDaCorsa.length ; i++) {

    let pesoBici= parseFloat(biciDaCorsa[i].peso)


    if (pesoBici < parseFloat(biciDaCorsa[i+1]) ) {
        pesoMinore = pesoBici ;
    } /*else if (pesoBici < parseFloat(biciDaCorsa[i-1].peso)) {
        console.log(parseFloat(biciDaCorsa[i].peso))
    }*/
}