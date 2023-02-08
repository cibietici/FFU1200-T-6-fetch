import { persons } from './collection.js';

export default function mapExample() {
    const { results } = persons;

    const newResults = results.map(person => {
        return {
            firstname: person.name.first,
            lastName: person.name.last,
            age: person.dob.age,
            country: person.location.country
        }
    });
    console.log(newResults);
}
