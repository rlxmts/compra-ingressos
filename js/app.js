function comprar() {

    // capturar o tipo de ingresso (pista, superior, inferior)
    let tipoDoIngresso = document.getElementById('tipo-ingresso').value;

    //capturar a quantidade de ingressos a serem comprados em numero.
    let quantidade = parseInt(document.getElementById('qtd').value);

    //capturar quantidade de ingressos à venda.
    let ingressosVendendo = parseInt(document.getElementById(`qtd-${tipoDoIngresso}`).innerText);

    //SE a quantidade de ingressos à venda for igual ou maior a quantidade de ingressos que serao comprados.
    if(ingressosVendendo >= quantidade && quantidade > 0){
        //ingressos a venda menos ingressos comprados
        let saldo = ingressosVendendo - quantidade;
        document.getElementById(`qtd-${tipoDoIngresso}`).innerText = saldo;
        
    }else{
        //SE NÃO informar que não tem ingressos suficiente.
        alert('não temos ingressos suficiente');
    }
    document.getElementById('qtd').value = '';
}