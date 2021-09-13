const { Router } = require("express");
// const { Pokemon, Type } = require("../db.js");
const router = Router();
const {getPokeApi, getIds, postPokemons} = require('../routesLogic/routesLogic')


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/', getPokeApi);

router.get('/:id', getIds);

router.post('/', postPokemons);

// router.delete('/:id', deletePoke)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



module.exports = router


