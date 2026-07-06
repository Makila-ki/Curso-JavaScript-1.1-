function calculoImpuestos (monto, impuesto){
    let impuestoUnico = monto * impuesto;
    return monto+impuestoUnico;
}

let resultados = calculoImpuestos(19.90, 0.15)
console.log(resultados);