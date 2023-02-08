export default async function multiplyFetch() {
    const endpoint1 = 'https://webapi.no/api/v1/zipcode/1459';
    const endpoint2 = 'https://webapi.no/api/v1/zipcode/2000';
    const endpoint3 = 'https://webapi.no/api/v1/zipcode/1390';
    const endpoint4 = 'https://webapi.no/api/v1/zipcode/1732';
    const endpoint5 = 'https://webapi.no/api/v1/zipcode/5000';

    const responses = await Promise.all(
        [
            fetch(endpoint1),
            fetch(endpoint2),
            fetch(endpoint3),
            fetch(endpoint4),
            fetch(endpoint5),
        ]);
    const data = await Promise.all(responses.map(
        response => response.json()
    ));
    console.log(data);
    console.log(data[0].data.city);
    data.forEach(city => console.log(city.data.city));
    return data;
}