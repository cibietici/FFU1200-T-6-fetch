import { persons } from './collection.js';

export default function filterExample() {

    const { results } = persons;
    const filteredArray = results.filter(person => {
        return person.location.country === 'Australia' && person.dob.age > 55;
    })
    console.log(filteredArray);

    const newFilteredArray = results
        .filter(person => person.location.country === 'Australia')
        .filter(person => person.dob.age > 55);
    console.log(newFilteredArray)
}
