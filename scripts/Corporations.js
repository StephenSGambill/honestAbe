import { getCorporations } from "../api/dataAccess.js"



export const Corporations = () => {
    const corporations = getCorporations()
   
    let html = ``
       
    corporations.map(corporation => {
            html += 
            `<section class="corporation">
            <header class="corporation__name">
                <h1>${corporation.company}</h1>
            </header>
            <div class="corporation__info">
                <div>Address: ${corporation.address}</div>
            </div>
            </section>`
   }
)
    return html
}



