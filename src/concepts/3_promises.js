import { heros } from "../data/heros";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promises = (element) => {
    const showHero = (hero) => {
        element.innerText = hero.name;
    }

    const showError = (error) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h2>${error}</h2>
        `;
    }

    let heroId1 = '5d86371f1efebc31def272e2';

    findHero(heroId1)
        .then( hero => showHero(hero) )
        .catch( error => showError(error) );
}

/**
 * 
 * @param {string} heroId 
 * @returns {Promise}
 */
const findHero = (heroId) => {
    return new Promise( (resolve, reject) => {
        let hero = heros.find( hero => hero.id === heroId );

        if (hero) {
            resolve(hero);
            return;
        }
        reject(`No hay ningun heroe definido con el id: ${heroId}`);
    })
}