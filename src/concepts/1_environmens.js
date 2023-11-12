
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const showEnv = (element) => {
    let envCard = `
        DEV: ${ import.meta.env.DEV } <br>
        MODE: ${ import.meta.env.MODE } <br>
        BASE_URL: ${ import.meta.env.VITE_BASE_URL } <br>
        APP_KEY: ${ import.meta.env.VITE_APP_KEY }
    `;
    element.innerHTML = envCard;
}