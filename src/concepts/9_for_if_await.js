import { heros } from "../data/heros";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const herosIds = heros.map( hero => hero.id );

    const myHeros = getHeroesAsync( herosIds );

    for await( const hero of myHeros ) {
        element.innerHTML += `${ hero.name } <br/> `
    }

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });
    
    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heros.find( hero => hero.id === id );
}