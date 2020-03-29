const pizzas = require('../database/Pizzas.json');

module.exports = {
    index: (req, res) => {
    //  res.send('Ta tudo indo bem...')
        res.render('index', { pizzas });
    },
    show: (req, res) => {
        // retornando a pizza com o id passado na rota
        let pizza = pizzas.find( pizza => pizza.id == req.params.id);
        return pizza ? res.render('pizza', { pizza }) : res.render('erros/pizzaNaoEncontrada', { id: req.params.id });
    }
}