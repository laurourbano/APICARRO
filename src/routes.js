const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
    res.json({
        rota: 'get'
    });
});



module.exports = router;