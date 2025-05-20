module.exports = (requi, respo, next) => {
    respo.locals.VariavalLocal = 'Valor variável local';
    next();
};