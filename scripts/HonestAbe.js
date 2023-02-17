import { Corporations } from "./Corporations.js"
import { Politicians } from "./Politicians.js"
import { PacDonations } from "./Donations.js"

export const HonestAbe = () => {
    return `
    <article class="politicians">
        ${Politicians()}
    </article>
    <article class="corporations">
        ${Corporations()}
    </article>
    
    <article class="pacs">
        ${PacDonations()}
    </article>
    `
}



    