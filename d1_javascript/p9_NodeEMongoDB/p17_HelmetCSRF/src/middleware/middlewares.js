exports.middleWareGlobal = (requi, respo, next) => {
    respo.locals.VariavalLocal = 'Valor variável local';
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.render('E404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};