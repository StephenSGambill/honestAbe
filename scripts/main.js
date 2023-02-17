import { fetchPoliticians, fetchCorporations, fetchPacDonations, fetchPacs} from "../api/dataAccess.js"
import { HonestAbe } from "./HonestAbe.js"

const mainContainer = document.querySelector("#container")


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)


const render = () => {
    fetchPoliticians()
    .then(() => fetchCorporations())
    .then(() => fetchPacDonations())
    .then(() => fetchPacs())
    .then(
        () => {
            mainContainer.innerHTML = HonestAbe()
        }
    )
}


render()