
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRase = (element) => {
    
    const renderContent = (value) => {
        element.innerText = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])
    .then( renderContent );
}


const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Itadori Juji');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("Gojo Satoru");
    }, 1500);
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("Sukuna");
    }, 1000);
})