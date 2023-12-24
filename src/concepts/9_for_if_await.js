import { heros } from "../data/heros";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    // const herosIds = heros.map( hero => hero.id );

    // const myHeros = getHeroesAsync( herosIds );

    // for await( const {name} of myHeros ) {
    //     element.innerHTML += `${ name } <br/> `
    // }

    const heroId = "5d86371f1efebc31def272e2";

    if (await getHeroAsync(heroId)) {
        console.log("Si se Resolvio 🎉🎉");
    } else {
        console.log("No se resolvio");
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

    await new Promise( resolve => setTimeout(() => resolve(), 1000) );

    return heros.find( hero => hero.id === id );
}