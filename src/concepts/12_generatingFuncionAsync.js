import { heros } from "../data/heros";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatingAsync = async(element) => {
    const genHero = generatingHero();
    let isFinished = false;

    do {
        const { done, value } = await genHero.next();
        if (!done) {
            element.innerText = value;
        } else {
            isFinished = done;
        }
    } while (isFinished==false);
    
}

async function* generatingHero(){
    for( const hero of heros ){
        await sleep();
        yield hero.name;
    }
}


const sleep = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}