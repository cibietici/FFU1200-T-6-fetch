export default function usersList(users) {

    const ulElement = document.getElementById('users-list');

    users.forEach(user => {
        renderList(user);
    });

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
