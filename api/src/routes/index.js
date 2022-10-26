const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  Activity = require('./Activity.js')
const  Country  = require('./Country.js')
const router = Router();

router.use('/activity', Activity);
 router.use('/country', Country);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
