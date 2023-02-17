import { getPoliticians } from "../api/dataAccess.js"



export const Politicians = () => {
    const politicians = getPoliticians()
   
    let html = ``
       
    politicians.map(politician => {
            html += 
            `<section class="politician">
            <header class="politician__name">
                <h1>${politician.name.first} ${politician.name.last}</h1>
            </header>
            <div class="politician__info">
            <div>Age: ${politician.age}</div>
            <div>Represents: ${politician.district}</div>
            </div>    
            </section>`
   }
)
    return html
}