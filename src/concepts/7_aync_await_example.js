import { heros } from "../data/heros"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitExample = async(element) => {
    console.log('Inicio');
    let message1 = await slow();
    console.log('Fin');
    element.innerText = message1;
}

const slow = async() => {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Slow resolve');
        }, 2000);
    });
}