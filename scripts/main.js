import { fetchPoliticians} from "../api/dataAccess.js"


const mainContainer = document.querySelector("#container")


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)


const render = () => {
    fetchPoliticians()
    .then(
        () => {
            mainContainer.innerHTML = BouquetFlowers()
        }
    )
}


render()


//.then(() => fetchAnother())