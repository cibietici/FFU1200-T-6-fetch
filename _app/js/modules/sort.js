import { persons } from './collection.js';
export default function sortExample() {
    const { results } = persons;

    const users = ["Thomas", "Sabine", "Mario", "Stefanie"];

    const sortedUsers = results.sort((a, b) => {
        const nameA = a.name.first;
        const nameB = b.name.first;
        if(nameA < nameB) {
            return -1;
        };
        if(nameA > nameB) {
            return 1;
        };
        return 0;
    });

    const sortingByName = results
                            .map(person => person.name.first)
                            .sort();

    console.log(sortedUsers);
    console.log(sortingByName);
}
