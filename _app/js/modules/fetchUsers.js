export default async function fetchUsersData() {
    const endpoint = 'https://randomuser.me/api/?results=60';
    const response = await fetch(endpoint);
    const { results } = await response.json();
    
    return results;
}
