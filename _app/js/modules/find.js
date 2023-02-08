import { persons } from './collection.js';

export default function findExample() {
    const { results } = persons;

    const found = results.find(person => {
        return person.location.country === 'Australia';
    });
    console.log(found);
}
