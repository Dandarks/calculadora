function calculo(){
    var preco = parseInt(document.getElementById("dinheiro").value);
    var desconto = parseInt(document.getElementById("desconto").value);
    
    var valor = desconto/100 * preco;
    var resu = preco - valor;
    document.getElementById("total").value = resu;

    document.getElementById("dinheiro").value = '';
    document.getElementById("desconto").value = '';
}