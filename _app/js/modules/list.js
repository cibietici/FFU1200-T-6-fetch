export default function usersList(users) {

    const ulElement = document.getElementById('users-list');

    // forEach user 
    users.forEach(user => {
        renderList(user);
    });

    // renderList function
    function renderList(user) {
        const liElement = document.createElement('li');
        liElement.textContent = `
            ${user.name.first} 
            ${user.name.last} -
            ${user.dob.age} 
            (${user.location.country})
            `
        ulElement.appendChild(liElement);
    }
}
