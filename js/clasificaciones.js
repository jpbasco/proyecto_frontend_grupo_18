let url = 'https://conmebol-api.vercel.app/api/classification';
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))   
    .catch(err => console.log('Solicitud fallida: ', err));

const mostrarData = (data) => {
    console.log(data);
    let body = '';
    for(let i = 0; i < data.length; i++){
        body += `<tr><td>${data[i].position}</td><td>${data[i].country}</td><td>${data[i].matches_played}</td><td>${data[i].won}</td><td>${data[i].losses}</td><td>${data[i].tied}</td><td>${data[i].goal_difference}</td><td>${data[i].points}</td></tr>`;
    }
    document.getElementById('data').innerHTML = body;
}
