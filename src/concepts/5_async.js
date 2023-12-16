import { heros } from "../data/heros"

/**
 * 
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
    let heroId = '5d86371f1efebc31def272e2';

    findHero(heroId)
        .then( hero => element.innerText = hero )
        .catch( error => element.innerText = error );
}

const findHero = async(heroId) => {
    let hero = heros.find( hero => hero.id == heroId );
    if (!hero) 
        throw `Heroe with ${heroId} not found`;
    return hero.name;
}