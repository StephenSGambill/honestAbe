const applicationState = {
    politicians: [],
    corporations: []
}


const API = "http://localhost:8080"





export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
    .then(response => response.json())
    .then(
        (politiciansList) => {
            applicationState.politicians = politiciansList
        }
        )
}
export const getPoliticians = () => {
    return applicationState.politicians.map(politician => ({...politician}))
}


export const fetchCorporations = () => {
    return fetch(`${API}/corporations`)
    .then(response => response.json())
    .then(
        (corporationsList) => {
            applicationState.corporations = corporationsList
        }
        )
}
export const getCorporations = () => {
    return applicationState.corporations.map(corporation => ({...corporation}))
}


export const fetchPacDonations = () => {
    return fetch(`${API}/pacdonations`)
    .then(response => response.json())
    .then(
        (pacDonationsList) => {
            applicationState.pacdonations = pacDonationsList
        }
        )
}
export const getPacDonations = () => {
    return applicationState.pacdonations.map(pacdonation => ({...pacdonation}))
}

export const fetchPacs = () => {
    return fetch(`${API}/pacs`)
    .then(response => response.json())
    .then(
        (pacsList) => {
            applicationState.pacs = pacsList
        }
        )
}
export const getPacs = () => {
    return applicationState.pacs.map(pac => ({...pac}))
}