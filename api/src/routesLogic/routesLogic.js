const { Pokemon, Type } = require('../db');
const axios = require('axios');

const getPokeApi = async (req, res) => {
    let name = req.query.name;
    try {
        if (name && name !== undefined && name !== null) {
            let pokemon = {};
            pokemon = await Pokemon.findOne({
                where: { name },
                indclude: {
                    model: Type,
                    attributes: ['name']
                }
            })
            if (pokemon) res.json(pokemon);
            else {
                const urlName = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
                if (urlName) {
                    pokemon = {
                        id: urlName.data.id,
                        name: urlName.data.name,
                        img: urlName.data.sprites.other.dream_world.front_default,
                        hp: urlName.data.stats[0].base_stat,
                        attack: urlName.data.stats[1].base_stat,
                        defense: urlName.data.stats[2].base_stat,
                        types: urlName.data.types.map(el => el.type.name)
                    }
                    
                    return res.json(pokemon);
                }
            }
        }
        const urlApi = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
        const db = await Pokemon.findAll({
            attributes: ['name', 'img', 'attack', 'defense'],
            include: {
                model: Type,
                attributes: ['name']
            }
        });                //Array🔽
        let details = await Promise.all(urlApi.data.results.map(async el => await axios(el.url)));
        details = details.map(el => {
            let newPokemon = {
                id: el.data.id,
                name: el.data.name,
                img: el.data.sprites.other.dream_world.front_default,
                attack: el.data.stats[1].base_stat,
                defense: el.data.stats[2].base_stat,
                types : el.data.types.map(el => el.type.name)
            }
            return newPokemon;
        })
        details = details.concat(db);
        return res.json(
            {
                howManyPokes: details.length, //details sigue siendo un array je
                pokemones: details

            })
    } catch (e) {
        console.log(e)
    }
}

const getIds = async (req, res) => {
    let id = req.params.id;
    if (!id) res.status(404).json('Invalid Id');
    try {
        if (!id.includes('-')) {
            const urlId = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id);
            let pokemon = {
                id: urlId.data.id,
                name: urlId.data.name,
                img: urlId.data.sprites.other.dream_world.front_default,
                hp: urlId.data.stats[0].base_stat,
                attack: urlId.data.stats[1].base_stat,
                defense: urlId.data.stats[2].base_stat,
                types: urlId.data.types.map(el => {
                    let temp = {};
                    return temp = { name: el.type.name }
                })
            }
            return res.json(pokemon)
        } else {
            const pokemon = await Pokemon.findByPk(String(id), {
                include: {
                    model: Type,
                    attributes: ['name']
                }
            });
            if (pokemon) {
                return res.json(pokemon);
            } else {
                res.status(400).json('Invalid ID')
            }
        }
    } catch (e) {
        console.log(e)
    }
}

const postPokemons = async (req,res) => {
    let {name,img,hp,attack,defense,types} = req.body;
    if(!name) res.status(404).json('Invalid Name');

    let newPokemon = await Pokemon.create({
        name,
        img,
        hp,
        attack,
        defense
    });
    newPokemon.addType(types)
    res.json(newPokemon.name)
}    

const getTypes = async (req,res) => {
    try{
        const dbTypes = await Type.findAll({attributes: ['name', 'id']})
        if(dbTypes.length < 1){
            let res = await axios.get('https://pokeapi.co/api/v2/type');
            let types = res.data.results.map(el => {return {name: el.name}})
            
            Type.bulkCreate(types);
            return res.json(types)
        }
        res.json(dbTypes);
    } catch (e){
        console.log(e)
    }
}

module.exports = {getPokeApi, getIds, postPokemons, getTypes}