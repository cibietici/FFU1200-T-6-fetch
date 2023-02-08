import { persons } from './collection.js';

export default function someEvery() {
    const { results } = persons;
    console.log(results)
    const output = results.some(person => {
        return person.dob.age === 54;
    });
    console.log(output)
}
