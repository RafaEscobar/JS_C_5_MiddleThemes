
/**
 *
 * @param {HTMLDivElement} element
 */
export const generatingFunction = (element) => {

    const ref = myGeneratingFunction();

    setInterval(() => {
        const {value, done} = ref.next();
        if (done == false) {
            console.log(value);
        }
    }, 2000);

}

function* myGeneratingFunction() {

    yield 'Goblin Slayer';
    yield 'Maki Zenin';
    yield 'Edwar Elrick';
    yield 'Itadori';
    yield 'Nagatoro';

    return 'Ya no hay más personajes';

}