import { persons } from './collection.js';

export default function foreachExample() {
    const { results } = persons;

    console.log(results);

    results.forEach((person, index, array) => {
        console.log(person.gender);
        console.log(array)
    }); 
}
