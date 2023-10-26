const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const CarroController = require('./controllers/CarroController');

// Defina as opções para o Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Carros',
            version: '1.0.0',
            description: 'Uma API para gerenciar carros.',
        },
    },
    apis: ['./controllers/CarroController.js'], // Caminho para o arquivo com as anotações Swagger
};

const specs = swaggerJsdoc(options);

// Adicione a rota Swagger UI à sua aplicação
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /carros:
 *   get:
 *     summary: Retorna todos os carros
 *     responses:
 *       200:
 *         description: Lista de carros
 */
router.get('/carros', CarroController.buscarTodos);

/**
 * @swagger
 * /carro/{codigo}:
 *   get:
 *     summary: Retorna um carro por código
 *     parameters:
 *       - in: path
 *         name: codigo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Carro encontrado
 *       404:
 *         description: Carro não encontrado
 */
router.get('/carro/:codigo', CarroController.buscarUm);

/**
 * @swagger
 * /carro:
 *   post:
 *     summary: Cria um novo carro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Carro'
 *     responses:
 *       201:
 *         description: Carro criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/carro', CarroController.criar);

/**
 * @swagger
 * /carro/{codigo}:
 *   put:
 *     summary: Atualiza um carro por código
 *     parameters:
 *       - in: path
 *         name: codigo
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Carro'
 *     responses:
 *       200:
 *         description: Carro atualizado com sucesso
 *       404:
 *         description: Carro não encontrado
 *       400:
 *         description: Dados inválidos
 */
router.put('/carro/:codigo', CarroController.atualizar);

/**
 * @swagger
 * /carro/{codigo}:
 *   delete:
 *     summary: Exclui um carro por código
 *     parameters:
 *       - in: path
 *         name: codigo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Carro excluído com sucesso
 *       404:
 *         description: Carro não encontrado
 */
router.delete('/carro/:codigo', CarroController.excluir);

module.exports = router;
