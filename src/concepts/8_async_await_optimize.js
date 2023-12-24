
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitOptimize = async(element) => {

    console.time('start');

    const [myPromise1, myPromise2, myPromise3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);

    element.innerHTML = `
        <h2>${myPromise1}</h2>
        <h2>${myPromise2}</h2>
        <h2>${myPromise3}</h2>
    `;
    console.timeEnd('start');
    console.log('Que pinche hermoso es JS');
}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow');
    }, 3000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium');
    }, 2000);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast');
    }, 1000);
});