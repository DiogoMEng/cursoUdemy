// *** TRY...CATCH
// function soma(x, y){
//     if (typeof x !== 'number' || typeof y !== 'number'){
//         // criando um erro
//         throw new Error('x e y precisam ser números');
//     }

//     // retorna se não haver erro
//     return x + y;
// }



// // caso haja erro o bloco try não será executado
// try {
//     console.log(soma(1, 2));
//     console.log(soma('1', 2));
//     // passa para o bloco catch em caso de erro
// }catch(erro){
//     console.log(erro);
// }

// try{
//     try{
//         throw new Error("ops");
//     }catch(e){
//         console.error("inner", ex.message);
//     }finally{
//         console.log("finally");
//     }
// }catch(e){
//     console.error("outer", ex.message);
// }


// *** THROW AND ERROR
function MeuErro(message) { // criando Error

    this.name = "MeuErro";
    this.message = message || "Mensagem de erro padrão";
    this.stack = (new Error()).stack;

}

MeuErro.prototype = Object.create(MeuErro.prototype);
MeuErro.prototype.constructor = MeuErro;

try{

    throw new MeuErro("Mensagem customizada");

}catch(e){

    console.log(e.name);
    console.log(e.message);

}