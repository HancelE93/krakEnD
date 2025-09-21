saludar=function(){
    let nombre= recuperartexto("txtnombre")
    let apellido=recuperartexto("txtapelldio")
    generarSaludo=(nombre , apellido);
    return generarSaludo;
    console.log(generarSaludo)
}