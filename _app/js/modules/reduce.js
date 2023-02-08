import { persons } from './collection.js';

export default function reduceExample() {
    const { results } = persons;
    const reduced = results.reduce((accumulator, person) => {
        return accumulator + person.dob.age;
    }, 0);
    console.log(reduced);
}
