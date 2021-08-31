const express = require('express');
const router = express.Router();



router.get('/', (request, response) => {
    response.send('home')
})


router.get('/new-form', (request, response) => {
    response.render('../src/views/new_form')
})
router.post('/new-form', async (request, response) => {
    const a = request.body
    console.log(a)
    const newPedido = await a.create({

    })

    return reponse.status(200).json(newPedido)
})


module.exports = router