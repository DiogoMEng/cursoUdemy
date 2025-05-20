module.exports = (requi, respo, next) => {
    if(requi.body.cliente){
        requi.body.cliente = requi.body.cliente.replace('Mello', 'Correia');
        console.log();
        console.log(`Postou: ${requi.body.cliente}`)
        console.log();
    }

    next();
};