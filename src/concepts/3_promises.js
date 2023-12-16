import { heros } from "../data/heros";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promises = (element) => {
    const showHero = (hero) => {
        element.innerText = hero.name;
    }

    const showTwoHeros = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `;
    }

    const showError = (error) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h2>${error}</h2>
        `;
    }

    let heroId1 = '5d86371f1efebc31def272e2';
    let heroId2 = '5d86371f233c9f2425f16916';

    // let hero1;

    //* Consumir forma base
    /*
    findHero(heroId1)
        .then( hero => showHero(hero) )
        .catch( error => showError(error) );
    */

    //* Consumir anidado hell
    /*
    findHero( heroId1 )
        .then( hero => {
            hero1 = hero;
            return findHero(heroId2);
        }).then( hero2 => {
            showTwoHeros(hero1, hero2);
        }).catch( showError );
    */

    //* Consumir promise.all

    Promise.all([
        findHero(heroId1),
        findHero(heroId2),
    ])
    .then( ([hero1, hero2]) => showTwoHeros(hero1, hero2) )
    .catch( showError );


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