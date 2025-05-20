// try {
//     // caso haja erro o bloco try não será executado
//     console.log('abrir arquivo');
//     console.log('manipulando arquivo');
//     console.log('fechando arquivo');
// }catch(erro){
//     // passa para o bloco catch em caso de erro
//     console.log('tratando erro');
// } finally {
//     console.log('executando programa')
// }

function retornaHora(data){
    // se não for instancia de data da erro
    if (data && !(data instanceof Date)){
        // criando erro
        throw new TypeError('Esperando instância de Date.');
    }

    if(!data){
        data = new Date();
    }

    // retornando a hora
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e){

}finally {
    console.log('programa finalizado');
}