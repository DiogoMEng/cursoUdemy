const router = require('express').Router();

router.get('/create', (req, res) => {

    res.sendFile(`${basePath}/html/userForm.html`);

});

router.post('/save', (req, res) => {

    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);

    res.sendFile(`${basePath}/html/userForm.html`);

});

router.get('/:id', (req, res) => {

    const id = req.params.id;

    console.log(`usuário: ${id}`);

    res.sendFile(`${basePath}/html/users.html`);

});

module.exports = router;
