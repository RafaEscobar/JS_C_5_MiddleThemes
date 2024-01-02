
/**
 *
 * @param {HTMLDivElement} element
 */
export const generatingFunctionExercise = (element) => {

    const ref = generateId();

    let btn = document.createElement('button');
    btn.innerText = 'Click';

    element.append(btn);

    const showId = () => {
        const { value } = ref.next();
        btn.innerText = `Click ${ value }`;
    }

    btn.addEventListener('click', showId);
}

function* generateId(){
    let id = 0;
    while (true) {
        yield ++id;
    }
}