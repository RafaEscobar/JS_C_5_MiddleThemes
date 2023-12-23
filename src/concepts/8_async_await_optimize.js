
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitOptimize = (element) => {
    console.log("Estamos aqui");
}


const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast');
    }, 1000);
});