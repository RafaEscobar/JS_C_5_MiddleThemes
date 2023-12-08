import { heros } from "../data/heros"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacks = (element) => {    
    const heroId = "5d86371f1efebc31def272e2";
    findHero( heroId, (hero) => {
        element.innerText = hero.name;
    });
}

/**
 * 
 * @param {String} heroId 
 * @param { (hero: Object) => void } callback 
 */
const findHero = (heroId, callback) => {
    let hero = heros.find( hero => hero.id === heroId );
    callback(hero);
}