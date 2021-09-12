const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokeRoutes = require('./PokeRout')
const rutis = require('./TypeRout')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/pokemonsAPP', pokeRutes)

router.use('/pokemons', pokeRoutes)

router.use('/type', rutis)

module.exports = router;
