import {GET_POKEMONS, GET_TYPES,FILTER_BY_TYPE, FILTER_IF_CREATED, ORDER_BY_NAME, ORDER_BY_ATTACK, GET_NAME_POKEMONS, FILTER_BY_NAME, CLEAN_TYPES, GET_ID, CLEAN_ID} from '../Actions/constants'

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    names: [],
    details: {}
}

function reducer (state = initialState, action){
    switch(action.type){
        case GET_POKEMONS:{
            return {
                ...state,
                pokemons: action.payload.pokemones, 
                allPokemons: action.payload.pokemones
            }
        }

        case GET_TYPES: 
            return {
                ...state,
                types: action.payload
        }  

        case GET_ID:
            return {
                ...state,
                details: action.payload
            }

        case GET_NAME_POKEMONS: {
            return {
                ...state,
                pokemons: action.payload
            }
        }


        case FILTER_BY_TYPE:{
            const filtered = action.payload === 'all'? state.allPokemons : state.allPokemons.filter(el => el.types[0].name === action.payload) 
            // console.log(state.allPokemons)
            return{         
                ...state,
                pokemons: filtered,
            }
        }

        case FILTER_BY_NAME:{
            const fil = action.payload === ''?  state.allPokemons : state.allPokemons.filter(el => el.name.includes(action.payload))// === action.payload)
            return{         
                ...state,
                pokemons: fil,
            }
        }

        case FILTER_IF_CREATED: {
            const filtrado = action.payload === 'created'? state.allPokemons.filter(el => typeof el.id !== 'number') : state.allPokemons.filter(el=> typeof el.id === 'number') ;
            return {
                ...state,
                pokemons: action.payload === 'all'? state.allPokemons : filtrado
            }
        }

        case ORDER_BY_NAME: {
            let sortedPokemons = action.payload === 'asc'?
                state.pokemons.sort(function (a,b){
                    if (a.name > b.name){
                        return 1
                    } else if (b.name > a.name) {
                        return -1
                    }
                    return 0;
                    
                }) : state.pokemons.sort(function (a,b){
                    if(a.name > b.name){
                        return -1
                    } else if (b.name > a.name){
                        return 1
                    }
                    return 0;
                })
                return {
                    ...state,
                    pokemons: sortedPokemons
                }
        }

        case ORDER_BY_ATTACK: {
            let sortedPokemons = action.payload === 'ascA'?
                state.pokemons.sort(function (a,b){
                    if (a.attack > b.attack){
                        // console.log(a)
                        return 1
                    } else if (b.attack > a.attack) {
                        return -1
                    }
                    return 0;
                    
                }) : state.pokemons.sort(function (a,b){
                    if(a.attack > b.attack){
                        return -1
                    } else if (b.attack > a.attack){
                        return 1
                    }
                    return 0;
                })
                return {
                    ...state,
                    pokemons: sortedPokemons
                }
        }

        case CLEAN_TYPES: 
            return{
                ...state,
                types: []
            }
        case CLEAN_ID:
            return {
                ...state,
                details: action.payload
            }    

        default: { 
            return state
        }
    }
}
// console.log(initialState)
export default reducer;