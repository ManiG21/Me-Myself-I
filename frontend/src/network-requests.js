// API key for google oAuth - 952817535193-1lhs434tqvkj2q3fl92bgpb3d2gs6uet.apps.googleusercontent.com
// giphy API key - Gdb5esWtKhpcp529ExKdmxd6QIIgGkx6
// API ninjas - 3h1Ig2eNjPjZEqW4UBdwbQ==SbV2SyMnNWJZQq0D

export const getDatApiNinjas = (route, query) => {
    console.log(route, query, `https://api.api-ninjas.com/v1/quotes?api_key=3h1Ig2eNjPjZEqW4UBdwbQ==SbV2SyMnNWJZQq0D`)
    return fetch (`https://api.api-ninjas.com/v1/quotes?api_key=3h1Ig2eNjPjZEqW4UBdwbQ==SbV2SyMnNWJZQq0D`, {
        headers: {'X-Api-Key': '3h1Ig2eNjPjZEqW4UBdwbQ==SbV2SyMnNWJZQq0D'},
    })
    .then(res => res.json())
}

