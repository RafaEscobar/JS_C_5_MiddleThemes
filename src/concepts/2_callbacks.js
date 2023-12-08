import { heros } from "../data/heros"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacks = (element) => {    
    const heroId = "5d86371f1efebc31def272e2";
    findHero( heroId, (error, hero) => {
        if (error) {
            element.innerText = error;
            return;
        }
        element.innerText = hero.name;
    });
}

/**
 * 
 * @param {String} heroId 
 * @param { (error: String, hero: Object) => void } callback 
 */
const findHero = (heroId, callback) => {
    let hero = heros.find( hero => hero.id === heroId );

    if (!hero) {
        callback(`El id: -${heroId}- no esta definido...`);
        return;
    }

    callback(null, hero);
}