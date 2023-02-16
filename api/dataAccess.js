const applicationState = {
    politicians: []
    
    
}


const API = "http://localhost:8080"





export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
    .then(response => response.json())
    .then(
        (politiciansList) => {
            applicationState.flowers = politiciansList
        }
        )
}
export const getPoliticians = () => {
    return applicationState.politicians.map(politician => ({...politician}))
}

