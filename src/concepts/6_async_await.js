import { heros } from "../data/heros"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait = async(element) => {
    
    let heroId1 = '5d86371f1efebc31def272e2';
    let heroId2 = '5d86371f233c9f2425f16916';

    try {
        let {name: name1} = await findHero( heroId1 );
        let {name: name2}  = await findHero( heroId2 );
    
        element.innerHTML = `
            <h2>${name1} / ${name2}</h2>
        `;
    } catch (error) {
        element.innerText = error;
    }
}

const findHero = async( heroId ) => {
    const hero = heros.find( hero => hero.id == heroId );

    if(!hero) 
        throw `Heroe not found`;

    return hero;
}